// import { useContext } from "react";
import { useTasks } from "../context/TaskContext";

export const useTasksHook = () => {
  const { tasks, addTask, updateTask } = useTasks();

  return { tasks, addTask, updateTask };
};
