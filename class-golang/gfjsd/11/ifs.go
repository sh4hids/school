package main

import (
  "fmt"
)

func main()  {
  age := 20

  if age > 18 {
    fmt.Println(age)
  }

  err1 := someFunc();
  if err != nil {
    fmt.Println(err.Error())
  }

  if err := someFunc(); err != nil {
    fmt.Println(err.Error())
  }
}
