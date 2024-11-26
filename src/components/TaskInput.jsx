import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";

export default function TaskInput({ className }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask("");
    }
  };

  return (
    <div className={className}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="p-2 m-5"
      />
      <button
        onClick={handleAddTask}
        className="border border-blue-500 text-blue-500 px-4 py-2 rounded 
                             hover:border-fuchsia-400 hover:text-fuchsia-500
                             transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Task
      </button>
    </div>
  );
}
