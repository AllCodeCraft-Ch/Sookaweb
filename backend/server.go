package main

import (
	"server/config"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	config.ConnectDatabase()
	app.Get("/",func (c *fiber.Ctx)error  {
		return c.SendString("HELLO BAKEND IS UP")
	})
	app.Listen(":5602")
}
