import EditableImage from "../layout/EditableImage";
import { useEffect, useState } from 'react';
import MenuItemPriceProps from "./MenuItemPriceProsp";

export default function MenuItemForm({onSubmit, menuItem}){

  const [image,setImage] = useState(menuItem?.image || '');
  const [name,setName] = useState(menuItem?.name || '');
  const [description,setDescription] = useState(menuItem?.description || '');
  const [basePrice,setBasePrice] = useState(menuItem?.basePrice || '');
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState(menuItem?.extraIngredientPrices || []);
  const [category, setCategory] = useState(menuItem?.category || '');
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch('/api/categories').then(res => {
      res.json().then(categories => {
        setCategories(categories);
      })
    })
  },[])

  console.log(category);

  return (
    <form onSubmit={ev =>
     onSubmit(ev, {
        image,name,description,basePrice,sizes, extraIngredientPrices, category
      })
      }
      className='mt-8 max-w-md mx-auto'>
        <div
         className='md:grid items-start  gap-4'
         style={{gridTemplateColumns:'.3fr .7fr'}}>
          <div>
            <EditableImage link={image} setLink={setImage} />
          </div>
          <div className='grow'>
            <label>Nazwa</label>
            <input
             type="text"
             value={name}
             onChange={ev => setName(ev.target.value)} />
            <label>Opis</label>
            <input
             type="text"
             value={description}
             onChange={ev => setDescription(ev.target.value)} />
            <label>Kategoria</label>
            <select name="category" value={category} onChange={ev => setCategory(ev.target.value)}>

              {categories?.length>0 && categories.map(c => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
            <label>Cena</label>
            <input
             type="text"
             value={basePrice}
             onChange={ev => setBasePrice(ev.target.value)} />
            <MenuItemPriceProps
             name={'Sizes'}
             addLabel={'Add item size'}
             props={sizes}
             setProps={setSizes}/>
            <MenuItemPriceProps
             name={'Extra ingredients'}
             addLabel={'Add ingredients prices'}
             props={extraIngredientPrices}
             setProps={setExtraIngredientPrices}/>
            <button type="submit">Zapisz</button>
          </div>
        </div>
      </form>
  )
};