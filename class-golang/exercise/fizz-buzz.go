package main

import "fmt"

func main()  {
  count := 100

  for i := 0; i <= count; i++ {
    if i % 3 == 0 && i % 5 == 0 {
      fmt.Println("FizzBuzz");
    } else if i % 3 == 0 {
      fmt.Println("Fizz");
    } else if i % 5 == 0 {
      fmt.Println("Buzz");
    }
  }
}
