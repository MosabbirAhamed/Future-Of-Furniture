import Btn from "../Btn/"

function Shop( {title , dec , img , derection } ) {
    return (
        <div className="bg-[#f6f6f6] ">
            <div className="container mx-auto py-7">
                <div className={`flex justify-center items-center md:flex-row flex-col gap-0 md:gap-4`}>
                    <div className="w-full lg:w-2/3 md:w-4/5">
                        <div className='p-2 md:p-4'>
                        <img src={img} alt="Shop" />
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 md:w-4/5 p-6">
                        <h1 className="font-bold text-4xl">{title}</h1>
                        <p className=" py-5  text-slate-400">{dec}</p>
                        <Btn title='Shop Now' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop