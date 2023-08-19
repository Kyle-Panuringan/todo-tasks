import { taskProps } from "../../App";
import TaskItem from "../TaskItem/TaskItem";

interface Props {
  tasks: taskProps[];
  taskDelete: (id: string) => void;
}

const TaskList = ({ tasks, taskDelete }: Props) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} {...task} taskDelete={taskDelete} />
      ))}
    </div>
  );
};

export default TaskList;
