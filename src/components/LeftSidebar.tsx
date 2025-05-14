
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";



const LeftSidebar = ({ replaceThis }) => {
  const menuItems = [
    { label: "All Tasks", count: 8 },
    { label: "To Do", count: 3 },
    { label: "In Progress", count: 3 },
    { label: "Done", count: 2 }
  ];

  const tags = [
    { name: "frontend", color: "bg-blue-100 text-blue-800" },
    { name: "backend", color: "bg-green-100 text-green-800" },
    { name: "design", color: "bg-purple-100 text-purple-800" },
    { name: "bug", color: "bg-red-100 text-red-800" },
    { name: "documentation", color: "bg-yellow-100 text-yellow-800" }
  ];

  return (
    <div
      className={cn(
        "fixed top-[61px] left-0 h-[calc(100vh-61px)] bg-sidebar border-r border-gray-200 w-64 transition-transform duration-300 ease-in-out z-20",
        //add logic here ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="font-semibold">Filters</h2>
        <Button variant="ghost" size="icon" onClick={replaceThis}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium mb-2 text-gray-500">Status</h3>
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Button
                variant="ghost"
                className="w-full justify-between"
              >
                <span>{item.label}</span>
                <span className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs">
                  {item.count}
                </span>
              </Button>
            </li>
          ))}
        </ul>
        
        <h3 className="text-sm font-medium mt-6 mb-2 text-gray-500">Priority</h3>
        <ul className="space-y-1">
          <li><Button variant="ghost" className="w-full justify-start">High</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Medium</Button></li>
          <li><Button variant="ghost" className="w-full justify-start">Low</Button></li>
        </ul>
        
        <h3 className="text-sm font-medium mt-6 mb-2 text-gray-500">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag.name}
              className={`${tag.color} px-2 py-1 rounded-md text-xs font-medium cursor-pointer`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
