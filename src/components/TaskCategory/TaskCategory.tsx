import "./taskCategory.scss";

interface Props {
  taskCount: { pending: number; completed: number };
  taskCategory: (category: string) => void;
  taskCategoryPending: boolean;
}

const TaskCategory = ({
  taskCategory,
  taskCategoryPending,
  taskCount,
}: Props) => {
  let pending = taskCategoryPending ? "" : "Active";
  let complete = taskCategoryPending ? "Active" : "";

  return (
    <div id="taskCategory">
      <button
        type="button"
        onClick={() => taskCategory("Pending")}
        className={pending}
      >
        Pending Tasks
        <span className="badge">
          {taskCount.pending > 99 ? "+99" : taskCount.pending}
        </span>
      </button>
      <button
        type="button"
        onClick={() => taskCategory("Completed")}
        className={complete}
      >
        Completed Tasks
        <span className="badge">
          {taskCount.completed > 99 ? "+99" : taskCount.completed}
        </span>
      </button>
    </div>
  );
};

export default TaskCategory;
