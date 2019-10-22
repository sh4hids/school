package main

import "fmt"

func main() {
	if n := 9; n < 0 {
		fmt.Println(n, "is negative.")
	} else if n > 9 {
		fmt.Println(n, "has multiple digits.")
	} else {
		fmt.Println(n, "has single digit.")
	}

	if 8%4 == 0 {
		fmt.Println("The number is devisible by 4")
	} else {
		fmt.Println("The number is not devisible by 4")
	}
}
