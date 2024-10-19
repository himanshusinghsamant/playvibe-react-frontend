import React from "react";
import "./App.css";
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './features/counter/counterSlice'
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  return (
    <>
      <div>
        {/* <SignUp/> */}
        <SignIn/>
        {/* <div>
          <button
            className="border-2 border-green-800 rounded-md text-white p-3 m-5 font-bold text-2xl bg-green-600"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className="font-bold text-4xl mx-3">{count}</span>
          <button
            className="border-2 border-red-800 rounded-md text-white p-3 m-5 font-bold text-2xl bg-red-600"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button> */}
      </div>
    </>
  );
}

export default App;
