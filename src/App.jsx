import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

const App = () => {
  return (
    <div className="p-5 h-screen bg-gray-400 bg-[url('/public/wood-board.jpg')] ">
      <div className="p-5 h-full bg-red-200 bg-[url('/public/board.jpg')] bg-no-repeat  bg-cover font-poppins text-sky-50 text-2xl">
        <Header />
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
