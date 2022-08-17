import { useEffect, useState  } from "react";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectItems } from "../../redux/slices/basketSlice";
import ProductItem from "./ProductItem/"

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItems);


  useEffect(() => {
    (
      async () => {
        setLoading(true)
        const response = await fetch("https://course-api.com/react-store-products").then(res => res.json());
        setProducts(response)
        setLoadedProducts(createPagination(response))
        setLoading(false)
      }
    )();
  },[])

  const createPagination = (items , limit = 8 , offset = 0) => {
    let arr =[];
    items.forEach((item , index ) => {
      if(index >= offset && index < offset + limit) {
        arr.push(item)
      }
    })
    return arr 
  }

  const loadMore = () => {
    if (loadedProducts.length === products.length) return
    const newProducts =createPagination(products , 8 , loadedProducts.length)
    setLoadedProducts([...loadedProducts , ...newProducts])
  }

  const addtoBasket = (product) => {
    dispatch(addItem({
      ...product,
      quantity: 1
    }))}
    const chekItemExist = (id) => {
      const find = cartItems.filter(item => id === item.id)
      return !!find.length
    }

  return (
    <section className="block h-auto">
      <div className="container mx-auto py-6">
      <h1 className="text-4xl pb-4 font-semibold">Shop by Product</h1>
      <div className="flex flex-wrap justify-center items-center">
        {loading && (
          <Bars
            height="60"
            width="60"
            color='#E1C8b4'
          />
        )}
        {!!loadedProducts.length && loadedProducts?.map(product => (
          <ProductItem
            key={product.id}
            {...product}
            onClick={() => addtoBasket(product)}
            exists = {chekItemExist}
         />
        ))}

      </div>
      {loadedProducts.length !== products.length &&(
        <div className="flex justify-center"> 
      <button onClick={loadMore} className="px-5 py-2 font-semibold text-sm bg-black text-white">Show More</button>
      </div>
      )}
      
    </div>
    </section>
  )
}

export default Products