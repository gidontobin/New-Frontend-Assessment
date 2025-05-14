
import { useState } from "react";
import { tasks as initialTasks, Task } from "@/data/mockData";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface TaskListProps {
  onTaskSelect: (task: Task) => void;
}

const TaskList = ({ onTaskSelect }: TaskListProps) => {
  const [tasks] = useState<Task[]>(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const handleTaskClick = (task: Task) => {
    setSelectedTaskId(task.id);
    onTaskSelect(task);
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'todo':
        return 'bg-gray-100 text-gray-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'done':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <div className="flex space-x-2">
          <span className="text-sm text-gray-500">
            Showing {tasks.length} tasks
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-12 gap-2 p-4 border-b border-gray-200 font-medium text-sm text-gray-500">
          <div className="col-span-5">Task</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-1">Assignee</div>
        </div>

        <div className="divide-y divide-gray-100">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "grid grid-cols-12 gap-2 p-4 hover:bg-gray-50 cursor-pointer transition-colors",
                selectedTaskId === task.id && "bg-gray-50"
              )}
              onClick={() => handleTaskClick(task)}
            >
              <div className="col-span-5">
                <p className="font-medium">{task.title}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {task.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {task.tags.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">
                      +{task.tags.length - 2}
                    </span>
                  )}
                </div>
              </div>
              <div className="col-span-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusClass(task.status)}`}>
                  {task.status === 'todo' ? 'To Do' : 
                   task.status === 'in-progress' ? 'In Progress' : 'Done'}
                </span>
              </div>
              <div className="col-span-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityClass(task.priority)}`}>
                  {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
              </div>
              <div className="col-span-2 text-sm">
                {format(new Date(task.dueDate), "MMM d, yyyy")}
              </div>
              <div className="col-span-1 text-sm truncate">
                {task.assignee.split(' ')[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
