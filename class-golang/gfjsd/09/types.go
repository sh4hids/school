package main

import (
  "fmt"
  "reflect"
)

func main()  {
  // var age int = 20
  // var gpa float64 = 3.99
  // var name string = "John"
  // var canVote bool = age > 18

  fmt.Println(reflect.TypeOf("Doe"))
  fmt.Println(reflect.TypeOf(3.1416))
}
