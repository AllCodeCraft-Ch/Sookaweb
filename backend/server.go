package main

import (
	"server/config"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	config.ConnectDatabase()
	app.Listen(":5602")
}
