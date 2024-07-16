import React from "react";

function App() {
  return (
    <div className="border-4 border-amber-600 flex flex-col bg-black max-w-[300px] w-full h-[500px] rounded-2xl m-[50px]">
      <div className="text-white p-5 text-5xl text-right">0</div>
      <div className="grid grid-cols-4 gap-5 p-5">
        <button className="bg-stone-500 font-bold w-14 text-[20px] h-14 rounded-full">
          AC
        </button>
        <button className="bg-stone-500 font-bold w-14 text-[20px] h-14 rounded-full">
          +/-
        </button>
        <button className="bg-stone-500 font-bold w-14 text-[20px] h-14 rounded-full">
          %
        </button>
        <button className="bg-amber-600 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          /
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          7
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          8
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          9
        </button>
        <button className="bg-amber-600 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          x
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          4
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          5
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          6
        </button>
        <button className="bg-amber-600 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          -
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          1
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          2
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          3
        </button>
        <button className="bg-amber-600 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          +
        </button>
        <button className="bg-stone-800 text-white font-bold col-span-2 text-[20px] h-14 rounded-full">
          0
        </button>
        <button className="bg-stone-800 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          .
        </button>
        <button className="bg-amber-600 text-white font-bold w-14 text-[20px] h-14 rounded-full">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
