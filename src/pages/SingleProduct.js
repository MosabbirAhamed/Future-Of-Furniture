import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';
import { Bars } from "react-loader-spinner";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectItems } from "../redux/slices/basketSlice";

function SingleProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);


  useEffect(() => {
    (async () => {
      setLoading(true)
      const response = await fetch(`https://course-api.com/react-store-single-product?id=${id}`).then(res => res.json())
        .catch(err => console.error(err)).finally(() => setLoading(false));
      setProduct(response);
    })();
  }, [id]);


  useEffect(() => {
    if (product) {
      setImage(product?.images[0]?.thumbnails);
    }
  }, [product]);



  const addtoBasket = () => {
    dispatch(addItem({
      ...product,
      image: image?.large?.url,
      quantity: 1
    }))
  }
  const chekItemExist = (id) => {
    const find = cartItems.filter(item => id === item.id)
    return !!find.length
  }
  return (
    <>
      <div className="container mx-auto md:w-5/6 pt-5 pb-7 md:mx-0">
        {loading ? (
          <div className="flex justify-center w-full my-10">
            <Bars
              height="60"
              width="60"
              color='#E1C8b4'
            />
          </div>
        ) : (
          <>
            <div className="flex items-center text-sm">
              <Link className="text-[#bb8e1d]" to={"/"}>Home</Link>
              <span className="mx-2">/</span>
              <span>{product?.name}</span>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <div>
                  <InnerImageZoom src={image?.large?.url} zoomSrc={image?.full?.url} zoomType="hover" />
                </div>
                <div className="flex flex-wrap gap-2 mt-5 mx-4 md:mx-0">
                  {product?.images.map((image, index) => (
                    <img onClick={() => setImage(image?.thumbnails)} src={image?.thumbnails?.small.url} alt={product?.name} className="w-20  rounded cursor-pointer" key={index} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-5 capitalize md:mx-0 mx-4 pt-4 md:pt-0" >
                <h1 className="text-xl md:text-3xl font-semibold">{product?.name}</h1>
                <span className="text-sm text-gray-500 font-semibold">{product?.company}</span>

                <div className="flex flex-wrap mt-5">
                  {product?.colors.map(color => (
                    <div key={color} style={{ backgroundColor: color }} className="border-gray-200 border-2 rounded-full mr-2 h-6 w-6 flex items-center">
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <ReactStars
                    count={5}
                    value={product?.stars}
                    size={18}
                    activeColor="#ffd700"
                    edit={false}
                    isHalf={true}
                    emptyIcon={<BsStar />}
                    halfIcon={<BsStarHalf />}
                    filledIcon={<BsStarFill />}
                  />
                  ({product?.reviews})
                </div>

                <p className="text-md mt-3 md:text-xl text-[#bb8e1d]">${product?.price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <div className="md:block flex justify-center ">
                  {chekItemExist (id) ? (
                  <button className='mt-5 rounded block py-2 px-8 md:px-12 text-white font-semibold bg-black text-base'>Already Added</button>
                  ) : (
                  <button onClick={addtoBasket} className=' mt-5 rounded block py-2 px-8 md:px-12 text-white font-semibold bg-black text-base'>Add to Cart</button>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-5 mx-4 md:mx-0">
              <h4 className="text-lg font-bold border-b mb-3">Description</h4>
              <p className="text-gray-500">{product?.description}</p>
            </div>
          </>
        )}

      </div>
    </>
  )
}

export default SingleProduct