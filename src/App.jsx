import { useState, useEffect } from 'react'
import './App.css'

function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then(response => response.json())
			.then(json => {
				setTimeout(() => {
					setTodos(json);
				}, 1000);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{isLoading ? <div className="loading">Загрузка...</div> :
				<>
					<h1>Список дел</h1>
					<ul>
						{todos.map(todo => {
							return <li key={todo.id}>{todo.id}: {todo.title}</li>
						})
						}
					</ul>
				</>
			}
		</>
	)
}

export default App
