import Btn from "../Btn/"

export default function Discover() {
    return (
        <div className="py-5">
            <div className="flex justify-start"><h1 className="text-6xl font-bold text-slate-200">spired</h1></div>
            
            <div className="container mx-auto">
                <div className="flex justify-evenly items-center flex-col md:flex-row flex-wrap">

                    <div className="md:w-[45%] w-[90%] h-fit py-6 md:py-0">
                        <div className="">
                        <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Discover " />                       
                        </div>
                    </div>

                    <div className="md:w-[45%] w-[100%] ">
                        <div className="flex flex-col justify-center">
                            <div className="p-3 md:p-4">
                                <h1 className="text-4xl font-bold">Discover the istercrior design of your dreams</h1>
                                <p className="text-slate-400 py-6">Lorem ipsum dolor sit amet consectetur adipiscing elit, nam dui tincidunt nunc nisl porttitor sem mauris, faucibus duis metus aliquam erat per. Sollicitudin convallis dignissim vehicula nunc augue scelerisque varius felis,</p>
                                <Btn title="Get Inspired"/>
                            </div>
                            
                            <div className="w-2/3 md:p-8 p-2 m-auto">
                                <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="dic" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
