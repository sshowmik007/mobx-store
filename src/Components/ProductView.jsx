import { find } from "lodash";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

const ProductView = observer(() => {
    const {
        rootStore: { productsStore }
      } = useStore()

    const { productId } = useParams()

    const product = find(
        productsStore.getProducts,
        p => p.id.toString() === productId
      )

    const onClickBuyNow = () => {}

  return (
    <>
        
<div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src={product?.image} class="w-full relative z-10" alt=""/>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{product?.title}</h1>
                    <p class="text-sm">
                    {product?.description}
                        <a href="#" class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i class="mdi mdi-arrow-right"></i></a></p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="text-2xl leading-none align-baseline">$</span>
                        <span class="font-bold text-5xl leading-none align-baseline">{product?.price}</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button onClick={onClickBuyNow} class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    <div>
        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img class="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"/>
        </a>
    </div>
</div>
    
    </>
  )
})

export default ProductView