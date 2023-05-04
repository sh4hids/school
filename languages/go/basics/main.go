// Date: Sunday, April 23, 2023

//go:build (prod && ignore) || (dev && ignore) || test
// +build prod,ignore dev,ignore test

/*
In this lesson I am trying to learn golang.
I am using the `https://learnxinyminutes.com/docs/go/` lesson to learn the basics.
*/

/* A build tag is a line comment starting with // +build
and can be executed by go build -tags="foo bar" command.
Build tags are placed before the package clause near or at the top of the file
followed by a blank line or other line comments. */

// A package clause starts every source file.
// main is a special name declaring an executable rather than a library.

package main

// Import declaration declares library packages referenced in this file.
import (
	"fmt"
	"os"
)

// A function definition. Main is special. It is the entry point for the
// executable program. Love it or hate it, Go uses brace brackets.
func main() {
	fmt.Println("Hello, world!")

	beyondHello()
}

func beyondHello() {
	var x int // Variable declaration
	x = 3     // Variable assignment
	y := 4    // "Short" declarations use := to infer the type, declare, and assign.

	sum, product := learnMultiple(x, y)

	fmt.Println("Sum:", sum, "Product:", product)

	learnTypes()
}

func learnMultiple(x, y int) (sum, product int) {
	return x + y, x * y
}

func learnTypes() {
	str := "Learn Go!"
	s2 := `Raw string literal can include
  line breaks.`

	// Non-ASCII literal. Go source is UTF-8.
	g := 'Σ'

	f := 3.14159 // float64
	c := 3 + 4i  // complex128, represented internally with two float64's.

	var u uint = 7 // Unsigned, but implementation dependent size as with int.
	var pi float32 = 22. / 7
	n := byte('\n') // byte is an alias for uint8.

	// Arrays have size fixed at compile time.
	var a4 [4]int
	a5 := [...]int{1, 2, 3, 4, 5}

	a4_copy := a4
	a4_copy[0] = 25
	fmt.Println(a4_copy[0] == a4[0])

	// Slices have dynamic size. Arrays and slices each have advantages
	// but use cases for slices are much more common.
	s3 := []int{4, 5, 6}
	s4 := make([]int, 4)
	var d2 [][]float64
	bs := []byte("a slice")

	s3_cpy := s3
	s3_cpy[0] = 0
	fmt.Println(s3_cpy[0] == s3[0])

	s := []int{1, 2, 3}
	s = append(s, 4, 5, 6)
	fmt.Println(s)

	s = append(s, []int{7, 8, 9}...)
	fmt.Println(s)

	// Maps are a dynamically growable associative array type, like the
	// hash or dictionary types of some other languages.
	m := map[string]int{"one": 1, "two": 2}
	m["three"] = 3
	fmt.Println(m)

	// Unused variables are an error in Go.
	// The underscore lets you "use" a variable but discard its value.
	_, _, _, _, _, _, _, _, _, _ = str, s2, g, f, u, pi, n, a5, s4, bs

	// Usually you use it to ignore one of the return values of a function
	// For example, in a quick and dirty script you might ignore the
	// error value returned from os.Create, and expect that the file
	// will always be created.

	file, _ := os.Create("output.txt")
	fmt.Fprint(file, "This is how you write to a file, by the way")
	file.Close()

	fmt.Println(s, c, a4, s3, d2, m)

	p, q := learnMemory()             // Declares p, q to be type pointer to int.
	fmt.Println("p:", *p, ", q:", *q) // * follows a pointer. This prints two ints.

	z := learnNamedReturn(4, 6)
	fmt.Println(z)

	learnFlowControl()
}

func learnMemory() (p, q *int) {
	p = new(int)

	s := make([]int, 20)

	s[3] = 7

	r := -2

	fmt.Println("p:", p)
	return &s[3], &r

}

func learnNamedReturn(x, y int) (z int) {
	z = x * y
	return
}

func learnFlowControl() {
	if true {
		fmt.Println("Yes!")
	}

	if false {
		//Pout
	} else {
		//Gloat
	}

	x := 42.0

	switch x {
	case 0:
	case 1, 2:
	case 42:
	case 43:
	default:

	}

	var data interface{}
	data = ""

	switch c := data.(type) {
	case string:
		fmt.Println(c, "is a string")
	case int64:
		fmt.Printf("%d is an int64", c)
	default:

	}

	for x := 0; x < 3; x++ {
		fmt.Println("iteration", x)
	}

	for {
		break
		continue
	}

	for key, value := range map[string]int{"one": 1, "two": 2, "three": 3} {
		fmt.Printf("key: %s, value: %d\n", key, value)
	}

	for _, value := range []string{"Abdullah", "Musab", "Muaz"} {
		fmt.Printf("Hello, %s\n", value)
	}

	xBig := func() bool {
		return x > 10000

	}

	x = 99999
	fmt.Println("xBig:", xBig())

	x = 1.3e3
	fmt.Println("xBig:", xBig())

	fmt.Println("Add + double two numbers:", func(a, b int) int {
		return (a + b) * 2
	}(4, 5))
}
