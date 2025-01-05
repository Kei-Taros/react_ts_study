import { useState, useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";

const Todo = () => {
  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const nextId = useRef<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: nextId.current,
      checked: false,
    };
    nextId.current += 1;
    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleEdit = (id: number, inputValue: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <div>
        <h2>Todo List</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => handleChange(e)}
            className="inputText"
            value={inputValue}
          />
          <input type="submit" value="create" className="submitBtn" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="text"
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                className="inputText"
                value={todo.inputValue}
                disabled={todo.checked}
              />
              <input
                type="checkbox"
                onChange={() => handleChecked(todo.id, todo.checked)}
                className="inputCheck"
              />
              <button onClick={() => handleDelete(todo.id)}>delete</button>
            </li>
          ))}
        </ul>
        <nav>
          <Link to="/">Back to Home</Link>
        </nav>
      </div>
    </div>
  );
};

export default Todo;
