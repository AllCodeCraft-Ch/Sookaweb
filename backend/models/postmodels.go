package models

type NewItemInput struct {
	Name         string  `json:"name"`
	TypeFootID   uint    `json:"typeFootID"`
	Description  string  `json:"description"`
	ImageURL     string  `json:"imageURL"`
	CaloriesPerCup int   `json:"caloriesPerCup"`
	ProteinPerCup  float32 `json:"proteinPerCup"`
	FiberPerCup    float32 `json:"fiberPerCup"`
	Nutrition Nutrition `json:"nutrition"`
	Benefits    []Benefit    `json:"benefits"`
	Recipes     []Recipe     `json:"recipes"`
	StorageTips []StorageTip `json:"storageTips"`
}
