

function FastItem({ title, dec, img }) {
  return (
    <>
      <div className="w-[80%] md:w-[24%] text-center">
        <div className="flex  justify-between md:flex-row flex-col items-center md:items-start gap-3">

          <div className="w-[90px] md:w-[150px] bg-slate-100 p-2 mx rounded-full" >
            <img className="" src={img} alt="Fast" />
          </div>

          <div className=' py-2 md:py-3 md:text-start md:px-4 px-2'>
            <h1 className="text-lg font-bold ">{title}</h1>
            <p className="text-sm pt-2 text-slate-400">{dec}</p>
          </div>

        </div>


      </div>
    </>
  )
}

export default FastItem