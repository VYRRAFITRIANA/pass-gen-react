import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

 

function App() {
  const [username, setUsername] = useState("");

  const [generatePassword,  setgeneratePassword] = useState("");

  function generateRandom() {
    let r = (Math.random() + 1).toString(36).substring(7);
    return r;

  
  }

  function handlegeneratePassword() {
    if (!username) {
      alert("Username harus diisi");
    } else {
      setgeneratePassword(`${username}_${generateRandom()}`);
    }
  }
  return (
    <div class="flex h-screen bg-slate-30 justify-center items-center">
     <div className="box-border w-80 h-auto shadow-black shadow-md p-5 rounded-lg">
      <div className=""> 
        <div className="border-solid mt-4">
        <h1 class="text-xl font-bold text-center mb-8 text-slate-800 ">
          React Password Generator
        </h1>
        <form className="w-full  text-slate-800">
          <label className="">Username</label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                className="text-center block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="masukan username anda!"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
        </form>
        <button
          onClick={handlegeneratePassword}
          className="mt-4 w-full bg-violet-700 p-0.5 rounded text-slate-50 mb-4"
        >
          Generate
        </button>

        <h6 className=" text-slate-800 text-xs font-bold text-center mb-4">
          We'd suggest you to use this password :{" "}
        </h6>
        <p
          className="  text-slate-800 items-center  text-center h-8 w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300  "
          
        >
          {generatePassword}
        </p>
      </div>
    </div>
    </div></div>
  );
}

export default App;
