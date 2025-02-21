import TaskList from "../components/TaskList";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <TaskList />
    </div>
  );
}
