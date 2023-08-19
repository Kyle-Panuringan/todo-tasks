import { useState } from "react";
import { AiFillSave, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import "./taskItem.scss";

interface Props {
  id: string;
  name: string;
  isComplete: boolean;
  taskEdit: (id: string, newTaskName: string) => void;
  taskDelete: (id: string) => void;
  taskIsComplete: (id: string) => void;
}

const TaskItem = ({
  id,
  name,
  isComplete,
  taskEdit,
  taskDelete,
  taskIsComplete,
}: Props) => {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      id="taskItem"
    >
      <button
        type="button"
        onClick={() => taskIsComplete(id)}
        className="left-buttons"
      >
        {isComplete ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        disabled={editOFF}
      />
      <button
        type="button"
        onClick={() => handleEdit(id, taskName)}
        className="right-buttons"
      >
        {editOFF ? <AiFillEdit /> : <AiFillSave />}
      </button>
      <button
        type="button"
        onClick={() => taskDelete(id)}
        className="right-buttons"
      >
        <AiFillDelete />
      </button>
    </form>
  );
};

export default TaskItem;
