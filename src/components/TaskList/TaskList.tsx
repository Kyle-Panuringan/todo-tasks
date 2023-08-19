import { taskProps } from "../../App";
import TaskItem from "../TaskItem/TaskItem";

interface Props {
  tasks: taskProps[];
  taskEdit: (id: string, newTaskName: string) => void;
  taskDelete: (id: string) => void;
}

const TaskList = ({ tasks, taskDelete, taskEdit }: Props) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
          taskDelete={taskDelete}
          taskEdit={taskEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
