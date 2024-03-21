import React from 'react'

const DisplayBoard = () => {
    return (
        <section className='w-full flex justify-center items-center p-5 h-[50%]'>

            <div className='w-full h-[200px] bg-Very-dark-cyan flex flex-col justify-between items-center p-5 rounded-xl md:h-[350px]'>
                <div className='flex flex-col justify-between items-center w-full h-24 md:w-full md:h-32 md:flex md:flex-col md:justify-between'>
                    <div className='w-full flex justify-between items-center mb-2'>
                        <div className='flex flex-col justify-between'>
                            <span className='text-white text-sm'>Tip Amount</span>
                            <span className='text-slate-400 text-xs'>/ person</span>
                        </div>
                        <h3 className='text-Amount-text-color text-2xl md:text-4xl'>$4.27</h3>
                    </div>

                    <div className='w-full flex justify-between items-center mb-2'>
                        <div className='flex flex-col justify-between'>
                            <span className='text-white text-sm'>Total</span>
                            <span className='text-slate-400 text-xs'>/ person</span>
                        </div>
                        <h3 className='text-Amount-text-color text-2xl md:text-4xl'>$32.79</h3>
                    </div>
                </div>
                <button className='w-full flex justify-center items-center text-Placeholder-text-color bg-Button-bg-color hover:bg-Hover-BG cursor-pointer h-9 uppercase rounded-md '>Reset</button>
            </div>
        </section>
    )
}

export default DisplayBoard