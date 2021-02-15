import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";

const App: React.FC = () => {
	const [todos, setTodos] = useState([]);

	const addHandler = (title: string) => {
		console.log("add new task", title);
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<TodoForm onAdd={addHandler} />
			</div>
		</div>
	);
};

export default App;
