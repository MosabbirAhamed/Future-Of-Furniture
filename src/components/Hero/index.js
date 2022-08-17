import './hero.css'

const Hero = () => {
    return (
        <>
            <div className=" bg-[#fefcf9] ">
                <div className="flex items-center gap-1 md:flex-row flex-col h-[90vh]">
                    <div className="w-full h-full md:w-2/5">
                        <div className="md:pl-[120px] md:pl[0px] px-4 md:px-0 mt-8 md:mt-[30%]">
                        <h1 className="md:text-7xl text-5xl font-bold pb-8">Future <br/> Of furniture</h1>
                        <p className="md:text-lg text-[16px] text-slate-400">Find an Elegant and luxurious interior <br/> designed by a professional interior designer.</p>
                        <form action="" className="md:mt-12 mt-6 flex w-[80%]">
                            <input type="text" placeholder="Search your product here" className="w-full border border-gray-500 text-sm p-2 md:p-3 outline-none"/>
                                <button type="submit" className="bg-black text-sm md:text-base text-white px-3 md:px-8 hover:bg-white hover:text-black border border-black transition-all duration-300">Search</button>
                                </form>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 flex px-2 md:px-0 h-full gap-1 lg:gap-4 order-1 sm:order-2">

                        <div className="heroImg heroImg1 h-full transition-all duration-500  relative">
                            <img className="h-full object-cover" src="https://rashadstack-parabot.netlify.app/static/media/MOLMD159WALSET1_zm.f79a8d337f0028b36cb0.jpg" alt="Hero 1" />
                            </div>

                        <div className="heroImg2 heroImg h-full transition-all duration-500  relative">
                            <img className="h-full object-cover" src="https://images.unsplash.com/photo-1614461059234-a26df6cb9ab8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="Hero 2" />
                        </div>

                        <div className="heroImg3 heroImg h-full  transition-all duration-500  relative">
                            <img className="h-full object-cover" src="https://images.unsplash.com/photo-1585264550248-1778be3b6368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80" alt="Hero 3" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;