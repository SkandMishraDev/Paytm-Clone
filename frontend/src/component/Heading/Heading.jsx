import { Link } from "react-router-dom"

export function Heading({label}) {
    return <div className="font-bold text-4xl pt-6">
      {label}
    </div>
}

export function SubHeading({label}) {
    return <div className="text-slate-500 text-md pt-1 px-4 pb-4">
      {label}
    </div>
  }

  export function InputBox({label, placeholder, onChange}) {
    return <div>
      <div className="text-sm font-medium text-left py-2">
        {label}
      </div>
      <input 
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-2 py-1 border rounded border-slate-200" />
    </div>
  }

  
export function Button({label, onClick}) {
    return <button 
    onClick={onClick} 
    type="button" 
    className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
    {label}</button>
}



export function BottomWarning({label, buttonText, to}) {
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {label}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
      </Link>
    </div>
}
  