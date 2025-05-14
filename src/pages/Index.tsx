
import { useState } from "react";
import Navbar from "@/components/Navbar";
import TaskList from "@/components/TaskList";
import { Task } from "@/data/mockData";

const Index = () => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);


  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
     {/* Render Left Sidebar here */}
        
        <main 
          className="flex-1 overflow-auto transition-all duration-300"

          //uncomment and update logic for left and right sidebar once implemented
          // style={{ 
          //   marginLeft: //addLogicForLeftSidebar ? '16rem' : '0',
          //   marginRight: //addLogicForRightSidebar ? '20rem' : '0'
          // }}
        >
          <TaskList onTaskSelect={handleTaskSelect} />
        </main>
        
        {/* Render Right Sidebar here */}
      </div>
    </div>
  );
};

export default Index;
