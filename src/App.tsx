import { useEffect, useState } from "react";
import { v4 } from "uuid";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import TaskCategory from "./components/TaskCategory/TaskCategory";
import TaskList from "./components/TaskList/TaskList";

export interface taskProps {
  id: string;
  name: string;
  isComplete: boolean;
}

const getTasksInitialState = () => {
  const items = localStorage.getItem("tasks");
  return items ? JSON.parse(items) : [];
};

const App = () => {
  const [tasks, setTasks] = useState<taskProps[]>(getTasksInitialState);
  const [taskCategoryPending, setTaskCategoryPending] = useState(true);

  const taskCategory = (category: string) => {
    if (category === "Pending") {
      setTaskCategoryPending(true);
    } else {
      setTaskCategoryPending(false);
    }
  };

  const taskAdd = (data: string) => {
    setTasks([...tasks, { id: v4(), name: data, isComplete: false }]);
  };

  const taskEdit = (id: string, newTaskName: string) => {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.name = newTaskName;
      }
      return task;
    });
    setTasks(editedTasks);
  };

  const taskDelete = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const taskIsComplete = (id: string) => {
    const editedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(editedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskCreate taskAdd={taskAdd} />
      <TaskCategory taskCategory={taskCategory} />
      <TaskList
        tasks={tasks}
        taskCategoryPending={taskCategoryPending}
        taskDelete={taskDelete}
        taskEdit={taskEdit}
        taskIsComplete={taskIsComplete}
      />
    </>
  );
};

export default App;
