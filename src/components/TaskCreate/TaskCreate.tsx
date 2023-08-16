import "./taskCreate.scss";

const TaskCreate = () => {
  return (
    <form id="taskCreate">
      <div id="taskCreateInputBox">
        <input type="text" name="taskInputSearch" id="taskInputSearch" />
        <button type="button">X</button>
      </div>
      <button type="submit" id="taskAddCreateButton">
        Add
      </button>
    </form>
  );
};

export default TaskCreate;
