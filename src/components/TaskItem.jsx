import { useSelector, useDispatch } from "react-redux";
import { toggleTaskCompletion, deleteTask } from "../features/tasks/tasksSlice";

export default function Taskitem({ task }) {
  const dispatch = useDispatch();

  return (
    <li className="p-3 border-b border-gray-300">
      <table className="w-full border-spacing-5">
        <tbody>
          <tr className="flex items-center gap-5">
            {/* Column for task text (wide column) */}

            <td className="flex-1 text-lg text-white-800">
              <h3
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task?.text || "No text available"}
              </h3>
            </td>

            <td className="space-x-3">
              <button
                onClick={() => dispatch(toggleTaskCompletion(task.id))}
                className={`border rounded px-4 py-2  
                          ${
                            task.completed
                              ? "border-purple-500 text-purple-500 hover:border-purple-400 hover:text-purple-500"
                              : "border-green-500 text-green-500 hover:border-green-400 hover:text-green-500"
                          } 
                          transition duration-300 ease-in-out transform hover:scale-105`}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
            </td>

            <td>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="px-4 py-2 border border-red-500 text-red-500
                hover:text-red-600 hover:border-red-600
                transition duration-300 ease-in-out transform hover:scale-105"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  );
}

/**
 *  <li style={{ textDecoration: task.completed ? "line-through" : "none" }}
    className="flex items-center justify-between p-3 border-b border-gray-300">
     
     <span className="flex-1 text-lg text-gray-800">{task.text}</span>

      <button onClick={() => toggleTaskCompletion(task.id)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => deleteTask(task.id)}>Delete</button>

    </li>
 */
