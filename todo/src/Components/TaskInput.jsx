import { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import axios from "axios";
const TaskInput = () => {
  const context = useContext(Context);
  useEffect(() => {
    axios.post("http://localhost:3000/", { task: context.task });
  }, [context.task,context.setTask]);
  const enterToSubmit = (e) => {
    const submit = document.getElementById("submit");
    if (submit && e.key === "Enter") submit.click();
  };
  document.addEventListener("keydown", enterToSubmit);
  return (
    <div className="mt-[15px] h-[15%] w-full bg-[#fdf0d5] flex justify-center items-center max-sm:justify-center max-sm:flex-wrap p-2">
      <p className="font-bold text-[2rem] mr-[40px] max-sm:text-[1.3rem] max-sm:mr-[5px]">
        Enter Task :
      </p>
      <input
        type="textarea"
        placeholder="e.g. Purchasing Grocery..."
        className="border-2 border-black h-[50%] w-[50%] p-4 font-semibold text-[1.2rem] rounded-3xl max-sm:rounded-xl max-sm:h-[40%] max-sm:text-[1rem] max-sm:mr-[0px]"
        onChange={(e) => {
          context.setInput(e.target.value);
        }}
      />
      <button
        id="submit"
        className="ml-[10px] border-2 border-black p-2 text-[1.4rem] h-[37px] w-[7%] font-bold font-serif text-black flex justify-center items-center bg-[#e0e1dd] hover:bg-[#a3b18a] hover:text-black rounded-xl max-sm:text-[1rem] max-sm:mt-[10px] max-sm:ml-[60%] max-sm:h-[20%] max-sm:w-[20%]"
        onClick={() => {
          context.setTask(context.input);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default TaskInput;
