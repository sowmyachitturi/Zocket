export interface LatestTask {
  id: string;
  title: string;
  priority: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate: string;
  modified: string;
}

export interface Task {
  id: number;
  title: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "Low" | "Medium" | "High"; // New priority field
  dueDate: string; // New dueDate field (e.g., "MM/DD/YYYY")
}

export const tasks: Task[] = [
  { id: 1, title: "Build UI", description: "Create task UI", status: "Pending", priority: "Medium", dueDate: "03/01/2025" },
  { id: 2, title: "Integrate API", description: "Connect to backend", status: "In Progress", priority: "High", dueDate: "02/25/2025" },
  { id: 3, title: "Deploy", description: "Push to production", status: "Completed", priority: "High", dueDate: "02/20/2025" },
  { id: 4, title: "Write Docs", description: "Document features", status: "Pending", priority: "Low", dueDate: "03/10/2025" },
  { id: 5, title: "Fix Bugs", description: "Resolve reported issues", status: "In Progress", priority: "Medium", dueDate: "02/28/2025" },
  { id: 6, title: "Add Auth", description: "Implement login system", status: "Pending", priority: "High", dueDate: "03/05/2025" },
  { id: 7, title: "Optimize Code", description: "Refactor components", status: "Completed", priority: "Medium", dueDate: "02/15/2025" },
  { id: 8, title: "Design Logo", description: "Create branding", status: "Pending", priority: "Low", dueDate: "03/15/2025" },
  { id: 9, title: "Testing", description: "Write unit tests", status: "In Progress", priority: "Medium", dueDate: "02/27/2025" },
  { id: 10, title: "Dark Mode", description: "Implement theme toggle", status: "Completed", priority: "Low", dueDate: "02/18/2025" },
  { id: 11, title: "Add WebSocket", description: "Enable real-time updates", status: "Pending", priority: "High", dueDate: "03/08/2025" },
  { id: 12, title: "Mobile Responsiveness", description: "Optimize for mobile", status: "In Progress", priority: "Medium", dueDate: "03/02/2025" },
  { id: 13, title: "Database Schema", description: "Define DB structure", status: "Completed", priority: "High", dueDate: "02/19/2025" },
  { id: 14, title: "Notifications", description: "Push task updates", status: "Pending", priority: "Low", dueDate: "03/12/2025" },
  { id: 15, title: "Performance Tuning", description: "Improve load times", status: "In Progress", priority: "Medium", dueDate: "03/01/2025" },
];