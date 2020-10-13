package main

import (
	"fmt"
)

func fibonacci(num int) int {
	if num < 0 {
		return -1
	}

	if num <= 1 {
		return 1
	}

	return num * fibonacci(num-1)
}

func main() {
	fmt.Println("For 5", fibonacci(5))
	fmt.Println("For 4", fibonacci(4))
	fmt.Println("For 0", fibonacci(0))
	fmt.Println("For -5", fibonacci(-5))
}
