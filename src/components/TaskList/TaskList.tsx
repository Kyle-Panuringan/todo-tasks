import { taskProps } from "../../App";
import TaskItem from "../TaskItem/TaskItem";
import "./taskList.scss";
interface Props {
  tasks: taskProps[];
  taskCategoryPending: boolean;
  taskEdit: (id: string, newTaskName: string) => void;
  taskDelete: (id: string) => void;
  taskIsComplete: (id: string) => void;
}

const TaskList = ({
  tasks,
  taskCategoryPending,
  taskDelete,
  taskEdit,
  taskIsComplete,
}: Props) => {
  return (
    <div id="taskList">
      {tasks.filter((task) => task.isComplete !== taskCategoryPending)
        .length === 0 && <p>Empty</p>}
      {tasks
        .filter((task) => task.isComplete !== taskCategoryPending)
        .map((task) => (
          <TaskItem
            key={task.id}
            {...task}
            taskDelete={taskDelete}
            taskEdit={taskEdit}
            taskIsComplete={taskIsComplete}
          />
        ))}
    </div>
  );
};

export default TaskList;
