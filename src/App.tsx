import { useEffect, useState } from "react";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import { v4 } from "uuid";
import TaskCategory from "./components/TaskCategory/TaskCategory";

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

  const taskAdd = (data: string) => {
    setTasks([...tasks, { id: v4(), name: data, isComplete: false }]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskCreate taskAdd={taskAdd} />
      <TaskCategory />
    </>
  );
};

export default App;
