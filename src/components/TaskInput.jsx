import { useState } from "react";
import { addList } from "../actions/todoActions";
import { useDispatch } from "react-redux";
import React from "react";

const TaskInput = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addNewTask = () => {
    if (text !== "") {
      dispatch(addList(text));
      setText("");
    }
  };

  return (
    <div className=" flex flex-col items-center sm:flex-row justify-center mt-3">
      <input
        type="text"
        className="mr-3 text-black w-64"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button className=" bg-slate-100 bg-opacity-20 px-3" onClick={addNewTask}>
        Add New Task
      </button>
    </div>
  );
};

export default TaskInput;
