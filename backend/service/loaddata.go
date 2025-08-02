package service

import (
	"server/models"

	"gorm.io/gorm"
	"fmt"
)

func LoadUserByID(id int, db *gorm.DB) (models.User, error) {
	var user models.User

	// ใช้ GORM ค้นหาจาก primary key (โดยทั่วไปคือ ID)
	result := db.First(&user, id)
	if result.Error != nil {
		return user, fmt.Errorf("failed to load user with ID %d: %w", id, result.Error)
	}

	return user, nil
}
