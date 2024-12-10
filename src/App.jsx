import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./features/todo/todoSlice"; // Include editTodo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEdit = (id, currentText) => {
    setEditId(id); // Set the ID of the todo to be edited
    setText(currentText); // Prefill the input with the current todo text
  };

  const saveEdit = () => {
    if (!text) return;
    dispatch(editTodo({ id: editId, text })); // Dispatch the edit action
    setEditId(null); // Reset edit mode
    setText(""); // Clear the input
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-grow border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {editId ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={saveEdit}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => {
                if (!text) return;
                dispatch(addTodo({ id: Date.now(), text }));
                setText(""); // Clear input field
              }}
            >
              Add
            </button>
          )}
        </div>

        {todos.length === 0 ? (
          <p className="text-gray-500">No tasks added yet.</p>
        ) : (
          <ul className="space-y-2">
            {todos.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-100 border rounded-md px-4 py-2"
              >
                <span className="text-gray-800">{item.text}</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleEdit(item.id, item.text)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo({ id: item.id }))}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;

