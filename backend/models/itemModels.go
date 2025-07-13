package models

import "gorm.io/gorm"

type Item struct {
	gorm.Model
	UserID uint
	User User `gorm:"foreignKey:UserID"`
	Name        string `gorm:"unique;not null"`
	TypeFootID  uint
	TypeFoot    TypeFoot `gorm:"foreignKey:TypeFootID"`
	Description string
	ImageURL    string

	CaloriesPerCup int
	ProteinPerCup  float32
	FiberPerCup    float32

	NutritionID uint
	Nutrition   Nutrition `gorm:"foreignKey:NutritionID"`

	Benefits    []Benefit
	Recipes     []Recipe
	StorageTips []StorageTip
}

type Nutrition struct {
	gorm.Model
	Protein       string
	DietaryFiber  string
	Iron          float32
	Phosphorus    int
	Carbohydrates float32
	TotalFat      float32
	Magnesium     int
	Folate        int
}

type Benefit struct {
	gorm.Model
	ItemID uint
	Title  string
	Detail string
}

type Recipe struct {
	gorm.Model
	ItemID   uint
	Title    string
	Steps    string
	ImageURL string
}

type StorageTip struct {
	gorm.Model
	ItemID uint
	Tip    string
}
