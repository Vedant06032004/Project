import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length ,setlength]=useState(8)
  const [number,setnumber] = useState(false)
  const [SpecialChar,setSpecialCHar] = useState(false)
  const [password,setpassword] = useState("")

  const passwordRef = useRef(null)

  const PassGen = ()=>{
    let str = ""
    let char ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    let num  ="0123456789"
    let schar = "!@#$%^&*-_+=[]{}~`"
    if(number)char+=num
    if(SpecialChar)char+=schar

   
    for(let i=1;i<=length;i++)
    {
      let x = Math.floor(Math.random() * char.length + 1)
      str+=char.charAt(x)
    }
    setpassword(str)
    
  }

 
  
  useEffect(()=>PassGen,[length,number,SpecialChar])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type='text'
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        />
        <button
        onClick={()=>{window.navigator.clipboard.writeText(password)}}
        
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
          type='range'
          min={6}
          max ={40}
          value={length}
          className='cursor-pointer'
          onChange={e=>{setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={()=>{setnumber((prevnum)=>!prevnum)}}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
               type="checkbox"
               defaultChecked={SpecialChar}
               id="characterInput"
               onChange={()=>{setSpecialCHar((prevSpecialChar)=>!prevSpecialChar)}}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>

  )
}

export default App
