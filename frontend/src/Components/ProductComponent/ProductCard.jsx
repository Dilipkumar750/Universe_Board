import { getImageUrl } from '../../slices/productSlice'

function ProductCard({product,setShowProductDetails}) {
    const imageUrl = getImageUrl(product.image);
  return (
    <>
         <div
                className="bg-white shadow-sm rounded-xl w-full md:w-60 border border-black-500 overflow-hidden transition-transform transform hover:scale-105">
                <div className="overflow-hidden rounded-t-xl h-64 group">
                  <img
                    src={imageUrl}
                    alt={product.title}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col justify-between h-60 p-4 bg-slate-800">
                  <div className="text-center flex-grow">
                    <h3 className="text-lg font-semibold text-white">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-200 mt-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="flex justify-center">
                      <button onClick={()=>setShowProductDetails(true)} className=" text-white px-4 py-2 rounded-lg bg-gray-600">
                        View
                      </button>
                  </div>
                </div>
              </div>
    </>
  )
}

export default ProductCard