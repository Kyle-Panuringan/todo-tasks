import "./taskCategory.scss";

interface Props {
  taskCategory: (category: string) => void;
}

const TaskCategory = ({ taskCategory }: Props) => {
  return (
    <div id="taskCategory">
      <button type="button" onClick={() => taskCategory("Pending")}>
        Pending Tasks
      </button>
      <button type="button" onClick={() => taskCategory("Completed")}>
        Completed Tasks
      </button>
    </div>
  );
};

export default TaskCategory;
