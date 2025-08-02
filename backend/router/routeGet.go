package routes

import (
	"fmt"
	"server/config"
	"server/models"
	"server/service"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func methotGet(routes fiber.Router) {

	routes.Get("/gettype", func(c *fiber.Ctx) error {
		var types []models.TypeFoot

		if err := config.DB.Find(&types).Error; err != nil {
			return c.Status(500).JSON(fiber.Map{"error": "Failed to get types"})
		}

		var results []models.TypeWithCount
		for _, t := range types {
			var count int64
			config.DB.Model(&models.Item{}).Where("id = ?", t.ID).Count(&count)
			results = append(results, models.TypeWithCount{
				Type:      t.Type,
				ItemCount: count,
			})
		}

		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"type": results,
		})
	})
	routes.Get("/item", func(c *fiber.Ctx) error {
		idParam := c.Query("id")
		fmt.Println(idParam)
		idUint64, err := strconv.ParseUint(idParam, 10, 64)
		if err != nil {
			return c.Status(400).JSON(fiber.Map{
				"error": "Invalid item ID",
			})
		}
		itemID := uint(idUint64)

		var item models.Item
		err = config.DB.Preload("Nutrition").
			Preload("Benefits").
			Preload("Recipes").
			Preload("StorageTips").
			Preload("TypeFoot").
			First(&item, itemID).Error

		if err != nil {
			fmt.Println(err)
			return c.Status(404).JSON(fiber.Map{
				"error": "Item not found",
			})
		}

		return c.JSON(item)
	})
	routes.Get("/getdatauser",config.JWTProtected(), func(c *fiber.Ctx) error {
		//get form JWT
		userIDFloat := c.Locals("user_id").(float64)
		userID := uint(userIDFloat)
		fmt.Println(userID)
		//get form data base by {id}
		dataUser, err := service.LoadUserByID(int(userID), config.DB)
		if err != nil {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "no user found in this JWT",
			})
		}
		//send json data user
		return c.Status(fiber.StatusOK).JSON(fiber.Map{
			"username": dataUser.Username,
			"email":    dataUser.Email,
		})
	})
}
