import { useState } from "react"

export default function DeleteButton({label, onDelete}){
  const [showConfirm, setShowConfrim] = useState(false);
  if(showConfirm){
    return (
      <div className="fixed bg-black/80 flex items-center inset-0 h-full justify-center ">
        <div className="bg-white p-4 rounded-lg">
          <div>Are you sure you want to delete?</div>
          <div className="flex gap-2 mt-1">
            <button type="button" onClick={() => setShowConfrim(false)}>Cancel</button>
            <button type="button" className="primary" onClick={() => {
                onDelete();
                setShowConfrim(false);
              }}>Yes,&nbsp;delete!</button>
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