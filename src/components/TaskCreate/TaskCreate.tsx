import { useState } from "react";
import "./taskCreate.scss";

const TaskCreate = () => {
  const [taskCreateValue, setTaskCreateValue] = useState("");

  const handleTaskCreateValueClear = () => {
    setTaskCreateValue("");
  };

  return (
    <form id="taskCreate">
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
