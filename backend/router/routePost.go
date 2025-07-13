package routes

import (
	"server/config"
	"server/models"
	"server/service"

	"github.com/gofiber/fiber/v2"
)

func methotPost(routes fiber.Router) {
	routes.Post("/login", func(c *fiber.Ctx) error {
		service.Login(c)
		return nil
	})

	routes.Post("/register", func(c *fiber.Ctx) error {
		service.Register(c)
		return nil
	})
	routes.Post("/Newitem", config.JWTProtected(), func(c *fiber.Ctx) error {
		var input models.NewItemInput
		if err := c.BodyParser(&input); err != nil {
			return c.Status(400).JSON(fiber.Map{"error": "Invalid input"})
		}

		// สมมติว่าใน JWT คุณเก็บ UserID ไว้ใน context เช่น
		userIDFloat := c.Locals("user_id").(float64)
		userID := uint(userIDFloat)

		nutrition := models.Nutrition{
			Protein:       input.Nutrition.Protein,
			DietaryFiber:  input.Nutrition.DietaryFiber,
			Iron:          input.Nutrition.Iron,
			Phosphorus:    input.Nutrition.Phosphorus,
			Carbohydrates: input.Nutrition.Carbohydrates,
			TotalFat:      input.Nutrition.TotalFat,
			Magnesium:     input.Nutrition.Magnesium,
			Folate:        input.Nutrition.Folate,
		}
		if err := config.DB.Create(&nutrition).Error; err != nil {
			return c.Status(500).JSON(fiber.Map{"error": "Create nutrition failed"})
		}

		item := models.Item{
			UserID:         userID,
			Name:           input.Name,
			TypeFootID:     input.TypeFootID,
			Description:    input.Description,
			ImageURL:       input.ImageURL,
			CaloriesPerCup: input.CaloriesPerCup,
			ProteinPerCup:  input.ProteinPerCup,
			FiberPerCup:    input.FiberPerCup,
			NutritionID:    nutrition.ID,
			Benefits:       input.Benefits,
			Recipes:        input.Recipes,
			StorageTips:    input.StorageTips,
		}

		if err := config.DB.Create(&item).Error; err != nil {
			return c.Status(500).JSON(fiber.Map{"error": "Create item failed"})
		}

		return c.Status(201).JSON(fiber.Map{
			"message": "Item created successfully",
			"item":    item,
		})
	})

}
