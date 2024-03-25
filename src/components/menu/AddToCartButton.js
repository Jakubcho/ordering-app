import FlyingButton from 'react-flying-item';

export default function AddToCartButton({
  hasSizesOrExtras,
  onClick,
  basePrice,
  image
}) {
  if(!hasSizesOrExtras){
    return (
      <div className='flying-button-parent mt-4'>
        <FlyingButton
         targetTop={'5%'}
         targetLeft={'95%'}
         src={image}

        >
          <div onClick={onClick}>
            Dodaj do koszyka  {basePrice} zł
          </div>
        </FlyingButton>
      </div>

    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      className='mt-4  bg-primary text-white rounded-full px-8 py-2'>
      <span>Dodaj do koszyka (od {basePrice} zł)</span>
    </button>
  )
}