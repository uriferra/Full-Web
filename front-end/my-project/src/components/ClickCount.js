import React, { useState } from "react";

function ClickCount() {
  const [count, setCount] = useState(0);

  return (

      <div className="flex justify-center align-center pt-8">
        <div className=" bg-blue-100 p-4 border-solid border-2 border-gray-400 rounded-md">
          <p className=" bg-gray-100 p-4 rounded-xl text-gray-800 font-mono border-solid border-2">Você clicou {count} vezes</p>
          <div className="mt-1 text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount(count + 1)}>
              Clique aqui
            </button>
          </div>
        </div>
      </div>
    
  );
}

export default ClickCount;