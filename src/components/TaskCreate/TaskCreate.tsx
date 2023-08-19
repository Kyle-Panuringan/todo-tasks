import { useState } from "react";
import "./taskCreate.scss";

interface Props {
  taskAdd: (data: string) => void;
}

const TaskCreate = ({ taskAdd }: Props) => {
  const [taskCreateValue, setTaskCreateValue] = useState("");

  const handleTaskCreateValueClear = () => {
    setTaskCreateValue("");
  };

  const handleTaskCreateValue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    taskAdd(taskCreateValue);
  };

  return (
    <form id="taskCreate" onSubmit={handleTaskCreateValue}>
      <div id="taskCreateInputBox">
        <input
          type="text"
          name="taskInputSearch"
          id="taskInputSearch"
          placeholder="Enter Task..."
          value={taskCreateValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTaskCreateValue(e.target.value)
          }
          required
        />
        <button
          type="button"
          style={{ visibility: `${taskCreateValue ? "visible" : "hidden"}` }}
          onClick={handleTaskCreateValueClear}
        >
          X
        </button>
      </div>
      <button type="submit" id="taskAddCreateButton">
        Add
      </button>
    </form>
  );
};

export default TaskCreate;
