import { useState } from "react"

export default function DeleteButton({label, onDelete}){
  const [showConfirm, setShowConfrim] = useState(false);
  if(showConfirm){
    return (
      <div className="fixed bg-black/80 flex items-center inset-0 h-full justify-center ">
        <div className="bg-white p-4 rounded-lg">
          <div>Czy jesteś pewny że chcesz usunąć?</div>
          <div className="flex gap-2 mt-1">
            <button type="button" onClick={() => setShowConfrim(false)}>Nie</button>
            <button type="button" className="primary" onClick={() => {
                onDelete();
                setShowConfrim(false);
              }}>Tak,&nbsp;usuń!</button>
          </div>
        </div>
      </div>
    )
  }
  return (
      <button type="button" onClick={() => setShowConfrim(true)}>
        {label}
      </button>
  )
}