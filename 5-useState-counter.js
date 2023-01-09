import React, { useState } from 'react';


const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0)
  }

  return (
    <>
          <section style={ {margin: '4rem 0rem'}}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
      </section>
      <button className='btn' onClick={() => {setValue(value - 1)}}>Decrease</button>
      <button className='btn'onClick={reset}>Reset</button>
      <button className='btn'onClick={() => {setValue(value + 1)}}>Increase</button>
    </>
  )
};

export default UseStateCounter;
