import { useState } from "react";
import TaskManager from "../components/TaskManager";
import TaskManagerForm from "../components/TaskManagerForm";
import "../css/App.css";

function App() {
  document.title ="Task Manager";
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "React",
      isCompleted: false,
    },
  ]);

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <TaskManager key={todo.id} todo={todo} />
        ))}
      </div>
      <TaskManagerForm />
    </div>
  );
}

export default App;
