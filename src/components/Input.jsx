import axios from "axios";
import { useState } from "react";
import Tasks from "./Tasks";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const Input = () => {
  const [input, setInput] = useState("");
  const handelPost = async () => {
    if (input === "") return;
    try {
      await axios
        .post("http://localhost:5000/task", { task: input })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      let n = "";
      setInput(n);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="grid grid-rows-1  justify-center mt-40 bg-gray-800 text-white w-96 mx-auto rounded-xl shadow-2xl shadow-blue-950 hover:shadow-blue-600 h-40 pt-2 pb-2">
        <label htmlFor="" className="text-3xl ">
          Enter your tasks
        </label>
        <input
          name="task"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here"
          className="input input-bordered w-full mt-2 text-black"
        />
        <AddCircleIcon
          className="mt-2 text-blue-600  cursor-pointer"
          onClick={() => handelPost()}
        />
      </div>
      <Tasks />
    </div>
  );
};

export default Input;
