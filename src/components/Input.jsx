import axios from "axios";
import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const handelPost = async () => {
    await axios.post("http://localhost:5000/tasks", { task: input });
  };

  return (
    <div>
      <div className="grid grid-rows-1  justify-center mt-40 bg-slate-200 ">
        <label htmlFor="" className="text-2xl ">
          task
        </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary size-min" onClick={handelPost}>
          Primary
        </button>
      </div>
    </div>
  );
};

export default Input;
