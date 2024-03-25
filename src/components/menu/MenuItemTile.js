import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item }) {

  const {image, description, name, basePrice,sizes, extraIngridentPrices, _id} = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngridentPrices?.length > 0;

  return (
     <div  className='bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all'>
      <div className='text-center '>
        <img src={image} className='max-h-[260px] block mx-auto' alt="pizza" />
      </div>
      <h4  className='font-semibold my-3 text-xl'>{name}</h4>
      <p className='text-gray-500 text-sm line-clamp-3 '>
        {description}
      </p>
      <AddToCartButton
       image={image}
       onClick={onAddToCart}
       hasSizesOrExtras={hasSizesOrExtras}
       basePrice={basePrice}
      />
    </div>
  )
}