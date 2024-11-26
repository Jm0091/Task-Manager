import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

const TaskList = ({ className }) => {
 
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className={className}>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
