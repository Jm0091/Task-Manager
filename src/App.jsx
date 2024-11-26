import { useState } from "react";
import { TaskItem, TaskInput, TaskList } from "./components";

export default function App() {
  // Vars useState
  const [tasks, setTasks] = useState([]);

  // Handlers total: 3
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id == taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  // Return
  return (
    <div className="grid grid-rows-[auto_auto_1fr] m-4 p-4 place-items-center">
      <h1
        className="text-4xl md:text-6xl font-extrabold text-center 
               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
               text-transparent bg-clip-text tracking-wide drop-shadow-lg
               p-5 m-5"
      >
        Task Manager
      </h1>
      <TaskInput className="m-5 p-5" />
      <TaskList className="m-5" />
    </div>
  );
}
