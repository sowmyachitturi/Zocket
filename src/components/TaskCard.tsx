import React from "react";
import "./TaskCard.css";

interface TaskCardProps {
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
}

const TaskCard: React.FC<TaskCardProps> = ({ title, description, status }) => {
  return (
    <div className={`task-card ${status.toLowerCase()}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="status">{status}</span>
    </div>
  );
};

export default TaskCard;