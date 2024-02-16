"use client";
import { useEffect, useState } from 'react';
import UserTabs from '../../components/layout/UserTabs';
import {useProfile} from '@/components/UseProfile';
import {toast} from 'react-hot-toast';
import EditableImage from "../../components/layout/EditableImage";
import Link from 'next/link';
import Right from '@/components/icons/Right';
import Image from 'next/image';

export default function MenuItemsPage(){
    const {loading,data} = useProfile();
    const [menuItems, setMenuItems] = useState([]);
  useEffect(()=> {
    fetch('/api/menu-items').then(res => {
      res.json().then(menuItems => {
        setMenuItems(menuItems);
      })
    })
  },[])
  if(loading){
    return 'Loading user info ...'
  }
  if(!data.admin){
    return 'Not ad admin'
  }
  return (
    <section className='mt-8 max-w-2xl mx-auto'>
      <UserTabs isAdmin={true}/>
      <div className="mt-8">
        <Link
         className='button '
         href={'/menu-items/new'}>Create new menu item
         <Right/>
         </Link>
      </div>
      <div>
        <h2 className='text-sm text-gray-500 mt-4'>Edit menu item:</h2>
        <div className='grid grid-cols-3 gap-2'>
          {menuItems?.length>0 && menuItems.map(item=> (
            <Link href={'/menu-items/edit/' + item._id} className='bg-gray-200 rounded-lg p-4 ' key={item._id}>
              <div className='relative'>
                {item.image ? <Image
                 src={item.image}
                 className='rounded-md' alt={''} width={200} height={200}/> : <div className="flex justify-center align-middle h-25 w-25">Brak zdjęcia</div> }
              </div>
              <div className='text-center'>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}