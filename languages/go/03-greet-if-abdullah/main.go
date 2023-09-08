package main

import (
	"fmt"
	"strings"
)

func main() {
	const user = "Abdullah"
	var name string

	fmt.Println("Enter you name:")
	fmt.Scan(&name)

	if strings.EqualFold(name, user) {
		fmt.Printf("Hello %s!\n", user)
	}
}
