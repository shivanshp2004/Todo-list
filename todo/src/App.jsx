import { useContext, useEffect } from "react";
import TaskInput from "./Components/TaskInput";
import { Context } from "./Components/Context";
import DisplayTasks from "./Components/DisplayTasks";
function App() {
  const context = useContext(Context);
  return (
    <div className="bg-[#003049] h-screen w-full">
      <div className="bg-[#003049] h-min w-full">
        <div className="bg-[#669bbc] h-[12%] w-full flex font-bold text-[4rem] justify-center items-center font-serif max-sm:text-[2.2rem]">
          Too Doo Too Too
        </div>
        <TaskInput />
        <DisplayTasks />
      </div>
    </div>
  );
}

export default App;
