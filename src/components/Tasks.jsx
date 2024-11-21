import axios from "axios";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null); // Track the task being edited
  const [taskInput, setTaskInput] = useState(""); // To hold the input value for editing

  useEffect(() => {
    // Fetch all tasks on component mount
    axios
      .get("http://localhost:5000/tasks")
      .then((res) => {
        setTasks(res.data); // Set tasks from the response
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handelDelete = async (id) => {
    // Delete task function
    await axios
      .delete(`http://localhost:5000/task/${id}`)
      .then((res) => {
        setTasks(tasks.filter((task) => task._id !== id)); // Remove deleted task from UI
        console.log(`Task ${id} deleted`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelEdit = async (id) => {
    // Edit task function, send updated task to the server
    if (editTask) {
      await axios
        .put(`http://localhost:5000/task/${id}`, { task: taskInput })
        .then((res) => {
          // Update task list with the edited task
          setTasks(
            tasks.map((task) =>
              task._id === id ? { ...task, task: taskInput } : task
            )
          );
          setEditTask(null); // Reset editing mode
          setTaskInput(""); // Clear the input field
          console.log(`Task ${id} edited`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleEditClick = (task) => {
    setEditTask(task._id); // Set the task being edited
    setTaskInput(task.task); // Pre-fill the input field with the current task value
  };

  return (
    <div>
      <div className="grid grid-rows-1 justify-center mt-2">
        <div className="card text-white w-96 shadow-2xl bg-slate-800">
          <div className="card-body">
            <h2 className="card-title text-2xl ">Tasks</h2>
            {tasks.map((task) => {
              return (
                <div
                  key={task._id}
                  className="flow-root border border-slate-400 rounded hover:border-slate-600 hover:scale-105"
                >
                  <input
                    className="float-left px-3 text-white bg-slate-800 outline-none"
                    value={editTask === task._id ? taskInput : task.task} // Show input only for the task being edited
                    onChange={(e) => setTaskInput(e.target.value)} // Update task input
                    disabled={editTask !== task._id} // Disable input for tasks not being edited
                  />
                  <div className="float-right">
                    {editTask === task._id ? (
                      <>
                        <span
                          onClick={() => handelEdit(task._id)}
                          className="text-green-200 hover:text-green-500"
                        >
                          <CheckIcon />
                        </span>
                      </>
                    ) : (
                      <span
                        className="text-blue-600 hover:text-black"
                        onClick={() => handleEditClick(task)}
                      >
                        <EditIcon />
                      </span>
                    )}
                    <span
                      className="hover:text-red-600"
                      onClick={() => handelDelete(task._id)}
                    >
                      <DeleteIcon />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
