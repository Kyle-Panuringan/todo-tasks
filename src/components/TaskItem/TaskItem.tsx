import { useState } from "react";
import { taskProps } from "../../App";

interface Props {
  id: string;
  name: string;
  isComplete: boolean;
  taskDelete: (id: string) => void;
}

const TaskItem = ({ id, name, isComplete, taskDelete }: Props) => {
  const [taskName, setTaskName] = useState(name);

  return (
    <form>
      <input type="checkbox" />
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button type="button">Edit</button>
      <button type="button" onClick={() => taskDelete(id)}>
        Delete
      </button>
    </form>
  );
};

export default TaskItem;
