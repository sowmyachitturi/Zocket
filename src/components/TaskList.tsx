"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./home.css";
import { tasks, Task } from "@/lib/tasks"; // Import from the new file

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Calculate task counts for summary cards and chart
const statusCounts = tasks.reduce(
  (acc, task: Task) => {
    acc[task.status]++;
    return acc;
  },
  { Pending: 0, "In Progress": 0, Completed: 0 }
);

const totalTasks = tasks.length;
const incompleteTasks = statusCounts.Pending + statusCounts["In Progress"];

// Calculate overdue and due today tasks based on dueDate
const today = new Date();
const overdueTasks = tasks.filter((task) => new Date(task.dueDate) < today && task.status !== "Completed").length;
const dueTodayTasks = tasks.filter((task) => {
  const due = new Date(task.dueDate);
  return due.toDateString() === today.toDateString() && task.status !== "Completed";
}).length;

// Sample latest tasks (now including priority and dueDate)
const latestTasks = tasks.slice(0, 5).map((task: Task) => ({
  id: `#TASK${task.id}`,
  title: task.title,
  description: task.description, // Include description if needed, or remove if not used
  priority: task.priority,
  status: task.status,
  dueDate: task.dueDate,
  modified: "Just now", // Add logic for modification time if needed
}));

const Home: React.FC = () => {
  // Donut chart data
  const chartData = {
    labels: ["Pending", "In Progress", "Completed"],
    datasets: [
      {
        data: [statusCounts.Pending, statusCounts["In Progress"], statusCounts.Completed],
        backgroundColor: ["#e5e7eb", "#3b82f6", "#22c55e"], // Gray, Blue, Green (matching image)
        hoverBackgroundColor: ["#d1d5db", "#2563eb", "#16a34a"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw} tasks`,
        },
      },
    },
    cutout: "60%", // Makes it a donut chart
  };

  return (
    <div className="home-container">
      <h1 className="home-title">AI Task Manager (Pro) Global Dashboard</h1>
      <div className="summary-cards">
        <div className="summary-card">
          <span className="card-icon">📋</span>
          <p className="card-number">{totalTasks}</p>
          <p className="card-label">All Tasks</p>
        </div>
        <div className="summary-card">
          <span className="card-icon">✍️</span>
          <p className="card-number">{incompleteTasks}</p>
          <p className="card-label">Incomplete</p>
        </div>
        <div className="summary-card">
          <span className="card-icon">⏰</span>
          <p className="card-number">{overdueTasks}</p>
          <p className="card-label">Overdue</p>
        </div>
        <div className="summary-card">
          <span className="card-icon">🔔</span>
          <p className="card-number">{dueTodayTasks}</p>
          <p className="card-label">Due Today</p>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="latest-tasks">
          <h2 className="section-title">Latest Tasks</h2>
          <table className="tasks-table">
            <thead>
              <tr>
                <th>Print/Edit/Delete</th>
                <th>Task ID</th>
                <th>Title</th>
                <th>Priority</th>
                <th>Task Status</th>
                <th>Due Date</th>
                <th>Modified</th>
                <th>Open</th>
              </tr>
            </thead>
            <tbody>
              {latestTasks.map((task, index) => (
                <tr key={task.id || index}>
                  <td>
                    <span className="action-icons">👁️ 🖋️ 🗑️</span>
                  </td>
                  <td>{task.id || "N/A"}</td>
                  <td>{task.title || "Untitled Task"}</td>
                  <td>
                    <span className="priority-dot">•</span> {task.priority || "Low"}
                  </td>
                  <td>
                    {task.status === "Pending" && (
                      <span className="status-tag bg-gray-200 text-gray-800">On Hold</span>
                    )}
                    {task.status === "In Progress" && (
                      <span className="status-tag bg-blue-100 text-blue-600">In Progress</span>
                    )}
                    {task.status === "Completed" && (
                      <span className="status-tag bg-green-100 text-green-600">Completed</span>
                    )}
                  </td>
                  <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No Due Date"}</td>
                  <td>{task.modified || "Unknown"}</td>
                  <td>
                    <span className="open-link">Open</span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
        <div className="task-stats">
          <h2 className="section-title">Task Statistics</h2>
          <div className="donut-chart">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;