
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";


const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 p-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold">Task Manager</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline">Dashboard</Button>
        <Button variant="outline">Projects</Button>
        <Button variant="outline">Team</Button>
        <Button variant="outline">Settings</Button>
      </div>
      <div>
        <Button variant="default">Create Task</Button>
      </div>
    </nav>
  );
};

export default Navbar;
