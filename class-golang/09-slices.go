package main

import "fmt"

func main()  {
  alpha := make([]string, 3)
  alpha[0] = "a"
  alpha[1] = "b"
  alpha[2] = "c"

  fmt.Println(alpha)

  alpha = append(alpha, "d")
  fmt.Println(alpha)

  numbers := make([]int, 3)
  numbers[0] = 1
  numbers[1] = 2
  numbers[2] = 3
  numbers = append(numbers, 4)
  fmt.Println(numbers)
  fmt.Println(len(numbers))
}
