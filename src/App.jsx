import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
   <div className='text-red-500'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos repellendus unde in minima ipsum cumque nihil blanditiis totam? Cupiditate totam necessitatibus iste quo numquam, ipsum libero voluptatum reprehenderit consequatur saepe sit labore accusantium ducimus pariatur quam aut ex assumenda consequuntur sequi eum deserunt suscipit velit quisquam! Veritatis, commodi sequi!
   </div>

   <div>
      <div>
        <button
        className='border-2 border-green-800 rounded-md text-white p-3 m-5 font-bold text-2xl bg-green-600'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className='font-bold text-4xl mx-3'>{count}</span>
        <button
        className='border-2 border-red-800 rounded-md text-white p-3 m-5 font-bold text-2xl bg-red-600'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </>
  )
}

export default App
