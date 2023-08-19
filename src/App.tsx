import { useEffect, useState } from "react";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import { v4 } from "uuid";
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

  const taskAdd = (data: string) => {
    setTasks([...tasks, { id: v4(), name: data, isComplete: false }]);
  };
  console.log(tasks.map((task) => task.name));
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskCreate taskAdd={taskAdd} />
      <TaskCategory />
      <TaskList tasks={tasks} taskDelete={taskDelete} taskEdit={taskEdit} />
    </>
  );
};

export default App;
