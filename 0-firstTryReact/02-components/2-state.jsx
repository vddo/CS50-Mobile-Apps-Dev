function HomePage() {
	const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

	function handleClick() {
		console.log('increment like count');
	}

	return (
		<div>
			<Header title="Develop. Preview. Ship. 🚀" />
			<ul>
				{names.map((name) => (
					<li key={name}>{name}</li>
				))}
			</ul>

			<button onClick={handleClick}>Like</button>
		</div>
		);
}