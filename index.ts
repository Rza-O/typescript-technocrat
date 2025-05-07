// * Problem 1
function formatString(input: string, toUpper?: boolean): string {
	if (toUpper === false) {
		return input.toLowerCase();
	}
	return input.toUpperCase();
}
// console.log(formatString("Hello One")); // Output: "HELLO"
// console.log(formatString("Hello One", true)); // Output: "HELLO"
// console.log(formatString("Hello One", false)); // Output: "hello"

/**
 *
 * *Description: Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.
 */

// * Problem 2
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
	const filteredBooks = items.filter((item) => item.rating >= 4);
	return filteredBooks;
}


// * Problem 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
	return ([] as T[]).concat(...arrays);
}

// *Problem 4
class Vehicle {
	private make: string;
	private year: number;

	constructor(make: string, year: number) {
		this.make = make;
		this.year = year;
	}

	getInfo() {
		console.log(`Make: ${this.make}, Year: ${this.year}`);
	}
}

class Car extends Vehicle {
	private model: string;
	constructor(make: string, year: number, model: string) {
		super(make, year);
		this.model = model;
	}
	getModel() {
		console.log(`Model: ${this.model}`);
	}
}

// * Problem 5
function processValue(value: string | number): number {
	if (typeof value === "string") {
		return value.length;
	} else {
		return value * 2;
	}
}

// *Problem 6

interface Product {
	name: string;
	price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
	if (products.length === 0) {
		return null;
	}

	let highestPriceProduct: Product = products[0];

	for (const product of products) {
		if (product.price > highestPriceProduct.price) {
			highestPriceProduct = product;
		}
	}
	return highestPriceProduct;
}


// *problem 7
enum Day {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

function getDayType(day: Day): string {
	if (day === Day.Saturday || day === Day.Sunday) {
		return "Weekend";
	} else {
		return "Weekday";
	}
}

// *problem 8
async function squareAsync(n: number): Promise<number> {
	return new Promise((resolve, reject) => {
		if (n > 0) {
			console.log();
			setTimeout(() => {
				resolve(n * n);
			}, 1000);
		} else {
			reject(new Error("Negative number is not allowed"));
		}
	});
}
