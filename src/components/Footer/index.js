import { FiPhone, FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="bg-[#292828] text-slate-200 pt-10">
      <div className="container mx-auto ">
        <div className="flex flex-wrap justify-between items-center">

          <div className=" px-6 pt-8" >
            <h1 className="text-4xl font-semibold">Parabot</h1>
            <p className="text-slate-300 py-8">625 E Franklin Ave, Minneapolis, <br /> MN 55404, USA</p>
            <span className="text-slate-300">© 2022 Parabot. All rights reversed.</span>
          </div>

          <div className="flex px-6 pt-8 flex-col gap-2">
            <h1 className="text-2xl pb-2 font-semibold">About us</h1>
            <a className="text-slate-300" href="#!">Our Story</a>
            <a className="text-slate-300 " href="#!">Designer</a>
            <a className="text-slate-300" href="#!">Craftsmanship</a>
            <a className="text-slate-300" href="#!">Sustainability</a>
          </div>

          <div className="flex px-6  pt-8 flex-col  gap-2">
            <h1 className="text-2xl pb-2 font-semibold">Support</h1>
            <a className="text-slate-300" href="#!">FAQ's</a>
            <a className="text-slate-300" href="#!">Shipping & Returns</a>
            <a className="text-slate-300" href="#!">Care Guide</a>
            <a className="text-slate-300" href="#!">Warranty</a>
          </div>
          <div className="flex px-6 pt-8 flex-col gap-2">
            <h1 className="text-2xl pb-2 font-semibold">Contact us</h1>

            <div className="flex item-center gap-3">
              <span className="mt-[2px] "><FiPhone size={20} /></span>
              <a className="text-slate-300 inline" href="tel:+8801754807456"> +8801754807456</a>
            </div>

            <div className="flex item-center gap-3">
              <span className="mt-[2px] "><HiOutlineMail size={20} /></span>
              <a href="mailto:mosabbirahamed8@gmail.com" > mosabbirahamed8@gmail.com</a>
            </div>

            <div className="flex item-center pt-4 gap-4">
              <a className="hover:text-white" href="https://www.facebook.com/mosabbir.ahammed" target="_blank" rel="noopener noreferrer"><RiFacebookFill size={22} /></a>
              <a className="hover:text-white" href="https://www.instagram.com/mosabbir_ahamed/" target="_blank" rel="noopener noreferrer"><FiInstagram size={22} /></a>
              <a className="hover:text-white" href="https://twitter.com/ahamed_mosabbir" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter size={22} /></a>
            </div>
          </div>

        </div>
        <div className=" pt-6 flex justify-center gap-4">
          <a href="#!">Privacy Policy</a>| 
          <a href="#!">Term Of Usw</a>| 
          <a href="#!">California Code</a>
        </div>
        <div className="text-center pb-6 pt-4">
          <h1 className="text-slate-500 text-lg">Made by <span className="text-white font-semibold"><a  target="_blank" rel="noopener noreferrer" href="https://mosabbirahamed.github.io/Portfolio-/">Mosabbir Ahaemd</a></span> for Educational Purposes.</h1>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer