package main

import "fmt"
import "time"

func main() {
	i := 1
	fmt.Print("Print ", i, " as ")
	switch i {
	case 1:
		fmt.Println("one")
	case 2:
		fmt.Println("two")
	case 3:
		fmt.Println("three")
  default:
    fmt.Println("word")
	}

  fmt.Println(time.Now().Format(time.RFC3339))

  switch time.Now().Weekday() {
  case time.Saturday, time.Sunday:
    fmt.Println("It's weekend")
  default:
    fmt.Println("It's weekday")
  }
}
