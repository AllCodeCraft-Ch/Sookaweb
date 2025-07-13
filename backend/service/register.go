package service

import (
	"server/config"
	"server/models"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func Register(c *fiber.Ctx) error {
	registerUser := new(models.User)

	if err := c.BodyParser(registerUser); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(SimpleStatus(400, "Missing body client"))
	}
	registerUser.Role = "user"
	if err := register(config.DB, registerUser); err != nil {
		return c.Status(fiber.ErrBadRequest.Code).JSON(SimpleStatus(400, "Registration failed or User already exists"))
	}
	return c.Status(fiber.StatusOK).JSON(SimpleStatus(200, "Register successful"))
}
func register(db *gorm.DB, registerUser *models.User) error {

	// Hash password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(registerUser.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	registerUser.Password = string(hashedPassword)

	// Create new user in DB
	result := db.Create(registerUser)
	if result.Error != nil {
		return result.Error
	}

	return nil
}
