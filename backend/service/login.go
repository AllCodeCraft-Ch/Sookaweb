package service

import (
	"fmt"
	"os"
	"server/config"
	"server/models"

	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func Login(c *fiber.Ctx) error {
	type loginRequest struct {
		Usernoun string `json:"usernoun"`
		Password string `json:"password"`
	}
	req := new(loginRequest)
	if err := c.BodyParser(req); err != nil {
		fmt.Println(err)
	}
	loginUserNew := models.User{
		Email:    req.Usernoun,
		Username: req.Usernoun,
		Password: req.Password,
	}

	token, err := login(config.DB, &loginUserNew)
	if err != nil {
		fmt.Println(err)
	}
	return c.Status(fiber.StatusOK).JSON(Statustoken(200, "Login successful", token))

}

func login(db *gorm.DB, loginUser *models.User) (string, error) {
	jwtSecret := os.Getenv("JWT_SEC")
	if jwtSecret == "" {
		return "", fmt.Errorf("JWT_SEC environment variable not set")
	}

	// Find user by email
	firstUser := new(models.User)
	fmt.Println(loginUser.Email)
	result := db.Where("email = ? or username = ?", loginUser.Email, loginUser.Email).First(firstUser)
	if result.Error != nil {
		return "", result.Error
	}
	fmt.Println("From loginUser.Password:", loginUser.Password)
	fmt.Println("From DB (firstUser.Password):", firstUser.Password)

	// Check password
	err := bcrypt.CompareHashAndPassword([]byte(firstUser.Password), []byte(loginUser.Password))
	if err != nil {

		return "", err
	}

	// Create JWT token
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["user_id"] = firstUser.ID
	claims["username"] = firstUser.Username
	claims["email"] = firstUser.Email
	claims["iat"] = time.Now().Unix()

	t, err := token.SignedString([]byte(jwtSecret))
	if err != nil {
		return "", err
	}
	return t, nil
}
