import { taskProps } from "../../App";
import TaskItem from "../TaskItem/TaskItem";

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
    <div>
      {tasks
        .filter((task) => task.isComplete === taskCategoryPending)
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
