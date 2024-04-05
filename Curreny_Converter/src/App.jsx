import { useState } from 'react'
import InputBox from "./Components/InputBox"
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setamount]= useState(0)
  const [From ,setFrom]=useState("usd")
  const [To ,setTo]= useState("inr")
  const [ConveretedAmount,setConvertedAmount] =useState(0)

  const currencyinfo=useCurrencyInfo(From)

  const opitons = Object.keys(currencyinfo)

  const swap = () =>{
    setFrom(To)
    setTo(From)
    setConvertedAmount(amount)
    setamount(ConveretedAmount)
  }
  console.log(From)
  const convert = () =>{
    setConvertedAmount(amount * currencyinfo[To]);
  }
  const BackgroundImage ="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('${BackgroundImage}')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount ={amount}
                            currencyOptions ={opitons}
                            selectCurrency ={From}
                            
                            onCurrencyChange ={(currency) => setFrom(currency)}
                            onAmountChange={(amount)=>setamount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount ={ConveretedAmount}
                            currencyOptions ={opitons}
                            selectCurrency ={To}
                            onCurrencyChange ={(currency) => setTo(currency)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From} to {To}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
