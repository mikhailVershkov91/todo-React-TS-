import React, { useState } from "react";

interface TodoFormProps {
	onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
	const [title, setTitle] = useState<string>("");

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const keyPressHandler = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			props.onAdd(title);
			setTitle("");
		}
	};

	return (
		<div className="input-field  mt2">
			<input
				onChange={onChangeHandler}
				value={title}
				type="text"
				id="title"
				placeholder="Введите название дела"
				onKeyPress={keyPressHandler}
			/>
			<label htmlFor="title" className="active">
				Введите название дела
			</label>
		</div>
	);
};

export default TodoForm;
