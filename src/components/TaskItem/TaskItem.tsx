import { useState } from "react";
import { taskProps } from "../../App";

interface Props {
  id: string;
  name: string;
  isComplete: boolean;
  taskEdit: (id: string, newTaskName: string) => void;
  taskDelete: (id: string) => void;
}

const TaskItem = ({ id, name, isComplete, taskEdit, taskDelete }: Props) => {
  const [taskName, setTaskName] = useState(name);
  const [editOFF, setEditOFF] = useState(true);

  const handleEdit = (id: string, newTaskName: string) => {
    if (editOFF) setEditOFF(false);
    if (!editOFF) {
      taskEdit(id, newTaskName);
      setEditOFF(true);
    }
  };

  return (
    <form>
      <input type="checkbox" />
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        disabled={editOFF}
      />
      <button type="button" onClick={() => handleEdit(id, taskName)}>
        {editOFF ? "Edit" : "Save"}
      </button>
      <button type="button" onClick={() => taskDelete(id)}>
        Delete
      </button>
    </form>
  );
};

export default TaskItem;
