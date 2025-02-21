"use client"; // Marks this as a Client Component

import React from "react";
import TaskCard from "@/components/TaskCard";
import "./tasks.css";
import Chatbot from "@/components/chatbot";
import { tasks } from "@/lib/tasks"; // Import from the new file

const Tasks: React.FC = () => {
  return (
    <div className="tasks-container">
      <h2>Tasks</h2>
      <p>Manage your tasks efficiently.</p>
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
      <Chatbot />
    </div>
  );
};

export default Tasks;