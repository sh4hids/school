package main

import "fmt"

func main() {
	i := 1
	for i <= 3 {
		fmt.Println(i)
		i = i + 1
	}

	fmt.Println("-------->")
	for j := 1; j <= 10; j++ {
		fmt.Println(j)
	}

	fmt.Println("--------> Odd")
	for j := 1; j <= 10; j++ {
		if j%2 == 0 {
			continue
		}
		fmt.Println(j)
	}
}
