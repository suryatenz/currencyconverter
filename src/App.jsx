import { useState } from 'react'
import './App.css'
import { Inputbox } from './components/index'
import useCurrencyinfo from "./hooks/useCurrencyinfo"; 
// import { Gold } from './components/Gold';

function App() {

  const [amount,setAmount] = useState()
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount] = useState()
  const currencyInfo = useCurrencyinfo(from)
  const options = Object.keys(currencyInfo) 
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  // const convert = () => {
  //   if (!isNaN(amount)) { 
  //     setConvertedAmount(amount * currencyInfo[to]);
  //   } else {
  //     setConvertedAmount(); // Clear convertedAmount if amount is not a number
  //   }
  // };

  const swap=()=>{
    let tempFrom = from;
    setFrom(to)
    setTo(tempFrom)
    setAmount(0)
    setConvertedAmount(0)
    // setAmount(convertedAmount);
    // setConvertedAmount(amount); 
  }
  
  return (
    <>
    <div className="li w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm  bg-white/30">
          <form onSubmit={(e)=>{
            e.preventDefault()
            convert()
          }} >
            <div className="w-full mb-1">
            <Inputbox
            label='From'
            amount={amount}
            currencyOptions={options}
            onCurrrencyChange={(amount)=>setFrom(amount)}
            onAmountChange={(amount)=>setAmount(amount)}
            selectedCurrency={from}
            />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5">
              <button onClick={swap}>Swap </button>
            </div>
            <div className="w-full mb-1">
            <Inputbox
            label='To'
            currencyOptions={options}
            amount={convertedAmount}
            amountDisabled={true}
            selectedCurrency={to}
            />
            </div>
            <div className="mt-2">
              <button type='submit' className='w-full bg-blue-600 text-white px-2 py-0.5 rounded-md'>Convert</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* <Gold/> */}
    </>
  )
}

export default App
