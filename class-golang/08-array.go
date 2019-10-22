package main

import "fmt"

func main() {
	var arr [5]int
	fmt.Println("Empty arr: ", arr)

	arr[4] = 500
	fmt.Println("Array with value", arr)
	fmt.Println("Array index value", arr[4])

	newArr := [5]int{100, 200, 300, 400, 500}
	fmt.Println("Array: ", newArr)

	for i := 0; i < len(newArr); i++ {
		fmt.Println("newArr[", i, "]: ", newArr[i])
	}
}
