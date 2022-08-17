import React from 'react'

function Newsletter() {
  return (
    <>
    <center className="lg:w-[40%] md:w-[60%] w-100% mx-auto md:px-0 px-8 py-10">
        <h1 className="md:text-5xl text-3xl font-semibold ">Join our newsletter for $10 off</h1>
        <p className="text-slate-400 py-8">Lorem ipsum dolor sit amet consectetur adipiscing elit pharetra tristique, ridiculus vel habitant cras ligula aenean euismod est erat, ac mi duis venenatis et nascetur vivamus vestibulum.</p>
        <form action="">
            <input type="text" placeholder="Enter your email" className="w-[60%] border border-gray-500 text-sm p-2 md:p-3 outline-none"/>
            <button type="submit" className="bg-[#000] text-sm md:text-base text-white pt-[8px] pb-[8px] md:pt-[9px] md:pb-[11px]  px-3 md:px-8 hover:bg-white hover:text-black border border-black transition-all duration-300">Subscribe</button>
        </form>
    </center>
    </>
  )
}

export default Newsletter