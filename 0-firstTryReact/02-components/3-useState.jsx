// Count times of pressed like button

function HomePage() {
	// ...

	// Returns an array

	// First item is the state value
	// Second item is a update function. Common prefix "set" followed by name of variable to update
	// Initial value of likes state: zero
	const [likes, setLikes] = React.useState(0);

	function handleClick(){
		setLikes(likes + 1)
	}

	return (
		// ...
		<button onClick={handleClick}>Like({likes})</button>
		)
	// Clicking the button will call the handleClick function, which calls the setLikes state updater function with a single argument!
}