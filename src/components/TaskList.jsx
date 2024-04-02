import { useSelector } from "react-redux";
import { todoSelectorData } from "../selector/todo.selector";
import { IoIosArrowForward } from "react-icons/io";
import { completeTask, removeTask } from "../actions/todoActions";
import { useDispatch } from "react-redux";
import React from "react";

const TaskList = (props) => {
  const todoItems = useSelector(todoSelectorData);

  const dispatch = useDispatch();

  const handleRemoveTask = (item) => {
    dispatch(removeTask(item));
  };

  const isCompleteTask = (item) => {
    dispatch(completeTask(item));
  };

  return (
    <div className="flex justify-center mt-5  h-[calc(100%-12rem)] overflow-y-scroll">
      <div className="flex flex-col content-center items-center w-[800px] ">
        {todoItems.length > 0 &&
          todoItems.map((data) => (
            <div
              className=" w-full flex items-center justify-between bg-slate-50 bg-opacity-20 mt-2 px-2"
              key={data.id}
            >
              <div className="flex items-center ">
                <div className="w-5">
                  <IoIosArrowForward className="" />
                </div>
                <input
                  type="checkbox"
                  onClick={(e) => isCompleteTask(data)}
                  defaultChecked={data.completed}
                  className="mx-2"
                  value={data.completed}
                />
                <div className="text 2xl sm:text-3xl md:text-5xl">
                  {data.name}
                </div>
              </div>
              <button
                onClick={(e) => handleRemoveTask(data.id)}
                className="bg-slate-200 bg-opacity-40 px-4"
              >
                Erase
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskList;
