import "./taskCategory.scss";

interface Props {
  taskCategory: (category: string) => void;
  taskCategoryPending: boolean;
}

const TaskCategory = ({ taskCategory, taskCategoryPending }: Props) => {
  let pending = taskCategoryPending ? "Active" : "";
  let complete = taskCategoryPending ? "" : "Active";

  return (
    <div id="taskCategory">
      <button
        type="button"
        onClick={() => taskCategory("Pending")}
        className={pending}
      >
        Pending Tasks
      </button>
      <button
        type="button"
        onClick={() => taskCategory("Completed")}
        className={complete}
      >
        Completed Tasks
      </button>
    </div>
  );
};

export default TaskCategory;
