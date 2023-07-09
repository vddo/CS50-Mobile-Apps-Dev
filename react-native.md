## Functions

- map function receives a fucntion as first argument and an array as second arguemnt

- In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as second argument:

```js
function map(f, a) {
	const result = new Array(a.length);
	for (let i=0; i< a.length; i++) {
		result[i] = f(a[i]);
	}
	return result;
}

const cube = function (x) {
	return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]
```

- Arrow notation and shorter functions

```js
const a = ["Hydrogen", "Helium"];

const a2 = a.map(function (s) {
	return s.length;
})

console.log(a2); // [8, 6]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6]
```

- The parentheses can only be omitted if the function has a single simple parameter. If it has multiple parameters, no parameters, or default, destructured, or rest parameters, the parentheses around the parameter list are required.
- The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required - and so is the ```return``` keyword. 

```js
// Traditional anonymous function
(function (a, b){
	const chuck = 42;
	return a + b + chuck;
});

// Arrow function
(a, b) => {
	const chuck = 42;
	return a + b + chuck;
}
```

## Array

- When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property accordingly:

```js
const fruits = []
fruits.push("banana", "apple", "peach")
console.log(fruits.length); // 3

fruits[5] = "mango"
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
console.log(fruits[4]); // undefined
```

### reduce()
`callbackFn`: function to execute for each element. return value becomes value of `accumulator` parameter on next invocation.
`const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)`

# CSS

## Layout

### Difference Padding and Margin

- Padding: is the space between the content of an element and its border
- Space is created within an element

```css
div {
	padding: 10px;
}
```

- Margin: is the space outside the element
- position relative to other elements and creates space between elements
  
```css
div {
	margin: 10px;
}
```
[mozilla: margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top?retiredLocale=de)

## setState and prevState

```jsx
this.setState(previousState => ({
	minutes: minutes,
	seconds: seconds,
    }));
```
By using prevState you ensure that the new state is calculated on the basis of the previous state. This provides a more reliable and predicatble way of updating state in react.