import WordSingle from "./WordSingle/"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Words() {
    return (
        <div className="bg-[#F6F6F6] py-12">
            <div className="container mx-auto">
                <h1 className="text-5xl font-semibold px-3 pb-12 leading-tight">Words from our <br /> customers</h1>
                <div className="">
                    <Carousel 
                        autoPlay={true}
                        infinite={true}
                        autoPlaySpeed={3000}
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        keyBoardControl={true}
                        responsive={responsive}>

                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                        <WordSingle />
                    </Carousel>;
                </div>
            </div>

        </div>
    )
}

export default Words