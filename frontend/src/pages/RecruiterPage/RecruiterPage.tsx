import {FiEdit2} from "react-icons/fi"
import {LiaTimesSolid} from "react-icons/lia"

const RecruiterPage = () => {
  return (
    <div className='p-10 px-20'>
    <div className='bg-lightColor p-8 grid grid-cols-4'>
        <div>
            Company name
        </div>
        <div>
            date d'envoie 
        </div>
        <div>
            date limite 
        </div>
        <div className="flex gap-4 justify-end">
            <h1 className="border-2 p-2 py-1 w-fit rounded-md bg-red-500 text-white cursor-pointer">
            Cloturer
          </h1>
            <h1 className="border-2 p-2 w-fit rounded-full bg-slate-100 cursor-pointer">
            <FiEdit2 />
            </h1>
            <h1 className="border-2 p-2 w-fit rounded-full bg-slate-100 cursor-pointer">
            <LiaTimesSolid />
            </h1>
        </div>
        
    </div>
    </div>
  )
}

export default RecruiterPage
