package main

import (
  "fmt"

  "github.com/sh4hids/school/class-golang/models"
)

func main() {
  u := models.User{
    ID: 2,
    FirstName: "John",
    LastName: "Doe",
  }

  fmt.Println(u)
}

