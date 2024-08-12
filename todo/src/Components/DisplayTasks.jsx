import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";

function DisplayTasks() {
  const [tasks, setTasks] = useState([]);
  const context = useContext(Context);
  const tasksarr = [];
  useEffect(() => {
    const func = async () => {
      const data = await axios.get("http://localhost:3000/");
      setTasks(data.data);
    };
    func();
  }, [context.task, tasksarr]);
  for (let i = 0; i < tasks.length; i++) {
    tasksarr.push(
      <div className=" h-[15%] w-[95%] mt-[20px] flex items-center justify-between">
        <p className=" pl-4 pr-4 flex justify-center items-center  m-[20px] rounded-xl text-[2rem] bg-[white] max-sm:text-[1rem] max-sm:ml-[5px]">
          {" "}
          {i + 1}. {tasks[i].task}{" "}
        </p>
        <button
          className="bg-[#e63946] text-[2rem] pl-4 pr-4 rounded-xl hover:bg-[#d62828] max-sm:text-[1rem] font-bold"
          onClick={() => {
            // console.log(tasks[i]._id)
            axios.post("http://localhost:3000/delete", { id: tasks[i]._id });
          }}
        >
          Delete
        </button>
      </div>
    );
  }
  return (
    <div className="h-[100%] w-full flex flex-col flex justify-start items-start font-bold mt-[20px] max-sm:items-start">
      {tasksarr}
    </div>
  );
}

export default DisplayTasks;
