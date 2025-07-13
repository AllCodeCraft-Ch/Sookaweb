package models

import "gorm.io/gorm"

type TypeFoot struct{
	gorm.Model
	Type string
}