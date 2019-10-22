package main

import "fmt"

func main()  {
  person := make(map[string]string)
  person["name"] = "Shahidul Islam Majumder"
  person["bio"] = "{human.muslim.golanger}"
  person["testKey"] = "test data"

  fmt.Println(person)

  delete(person, "testKey")

  fmt.Println(person)
  fmt.Println(len(person))


  myMap := map[string]int{"one": 1, "two": 2}
  fmt.Println(myMap)
  fmt.Println(myMap["one"])
}
