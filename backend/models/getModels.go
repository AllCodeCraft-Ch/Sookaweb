package models

type TypeWithCount struct {
	Type      string `json:"type"`
	ItemCount int64  `json:"itemCount"`
}
