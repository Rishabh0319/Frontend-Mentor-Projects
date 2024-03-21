import React, { useState } from 'react';
import Form from './components/Form';
import DisplayBoard from './components/DisplayBoard';

const App = () => {

  const [bill, setBill] = useState("");
  const [people, setPeople] = useState('');

  return (
    <div className='md:flex md:flex-col md:items-center'>
      <div className='flex flex-col justify-center items-center mt-6 mb-6'>
        <span className='tracking-[5px] text-slate-600 uppercase text-2xl'>SPLI</span>
        <span className='tracking-[5px] text-slate-600 uppercase text-2xl'>TTER</span>
      </div>

      <div className="flex flex-col items-center justify-center rounded-tr-2xl rounded-tl-2xl bg-white overflow-hidden md:flex md:flex-row md:justify-center md:items-center md:w-[60%] md:rounded-xl">

        <Form
          bill={bill}
          setBill={setBill}
          people={people}
          setPeople={setPeople}
        />

        <DisplayBoard />

      </div>

      <div className="attribution absolute bottom-1">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Rishabh Tripathi</a>.
      </div>
    </div>
  )
}

export default App 