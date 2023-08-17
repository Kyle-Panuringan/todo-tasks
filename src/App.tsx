import { useEffect, useState } from "react";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import { v4 } from "uuid";

interface taskProps {
  id: string;
  name: string;
  isComplete: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<taskProps[]>([]);

  const taskAdd = (data: string) => {
    setTasks([...tasks, { id: v4(), name: data, isComplete: false }]);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("tasks") || "");
    if (items) setTasks(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskCreate taskAdd={taskAdd} />
    </>
  );
};

export default App;
