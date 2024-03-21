import React from 'react'
import dollar from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';

const Form = ({ bill, setBill, people, setPeople }) => {
    return (
        <section className='bg-white w-full p-5 h-[50%]'>
            <div className='flex flex-col justify-center'>
                <h4 className='text-slate-500 text-sm mb-2'> Bill</h4>
                <div className='bg-Input-bg flex justify-between items-center border-2 hover:border-Hover-border-cyan hover:cursor-pointer rounded-md'>
                    <img src={dollar} alt="" className='ml-1' />
                    <input type="number" value={bill} onInput={(e) => setBill(+e.target.value)} className='h-9 w-full bg-inherit focus:outline-none pl-2 pr-2 mr-1 text-right text-Placeholder-text-color' />
                </div>
            </div>
            <div className='flex flex-col mt-4 mb-4'>
                <h4 className='text-slate-500 text-sm mb-3'>Select Tip %</h4>
                <div className='flex flex-wrap items-center justify-evenly gap-3'>
                    <div className='bg-Very-dark-cyan hover:bg-Hover-BG cursor-pointer hover:text-Placeholder-text-color text-white w-[100px] h-9 flex justify-center items-center rounded-[4px]'>5%</div>
                    <div className='bg-Very-dark-cyan hover:bg-Hover-BG cursor-pointer hover:text-Placeholder-text-color text-white w-[100px] h-9 flex justify-center items-center rounded-[4px]'>10%</div>
                    <div className='bg-Very-dark-cyan hover:bg-Hover-BG cursor-pointer hover:text-Placeholder-text-color text-white w-[100px] h-9 flex justify-center items-center rounded-[4px]'>15%</div>
                    <div className='bg-Very-dark-cyan hover:bg-Hover-BG cursor-pointer hover:text-Placeholder-text-color text-white w-[100px] h-9 flex justify-center items-center rounded-[4px]'>25%</div>
                    <div className='bg-Very-dark-cyan hover:bg-Hover-BG cursor-pointer hover:text-Placeholder-text-color text-white w-[100px] h-9 flex justify-center items-center rounded-[4px]'>50%</div>
                    <input className='bg-Very-light-grayish-cyan border text-slate-500 w-[100px] h-9 flex justify-center items-center rounded-[4px] focus:outline-none cursor-pointer hover:border-Hover-border-cyan pl-1 pr-1 text-right' placeholder='Custom'></input>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-slate-500 text-sm mb-3'>Number of People</h4>
                <div className='border-2 hover:border-Hover-border-cyan bg-Input-bg flex justify-between items-center hover:cursor-pointer rounded-md'>
                    <img src={person} alt="" className='ml-1' />
                    <input type="number" value={people} onInput={(e) => setPeople(+e.target.value)} className='bg-Very-light-grayish-cyan focus:outline-none rounded-md h-9 w-full pl-2 pr-2 text-right text-Placeholder-text-color' />
                </div>
            </div>
        </section>
    )
}

export default Form;