import { useState, useEffect } from 'react'
import { InputBox } from './Componnents'


function App() {
  const options = ["usd", "inr"]
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState("usd")
  const [toCurrency, setToCurrency] = useState("inr")
  const [conversionRate, setConversionRate] = useState(0)

  // async function convertAmt() {
  //   let convertedAmount = fromAmount * conversionRate[toCurrency];
  //   setToAmount(convertedAmount)
  // }

 useEffect (()=>{
  async function convertAmt(){
    const convertedAmount = fromAmount * conversionRate[toCurrency];
    setToAmount(convertedAmount)

  }
  convertAmt() 
 },[fromAmount, fromCurrency, toAmount, toCurrency])

  useEffect(() => {
    async function fetchCurrency() {
      setConversionRate(
        await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`)
          .then(res => res.json())
          .then(data => data[fromCurrency])
      );
    }
    fetchCurrency();
  }, [fromCurrency]);


  return (
    <>
      <div>
        <InputBox
          label="From"
          Currencies={options}
          amount={fromAmount}
          setAmount={setFromAmount} 
          selectedValue={fromCurrency}
          setSelectedValue={setFromCurrency}


        />
      </div>
      <div>
        <InputBox
          label="To"
          Currencies={options}
          amount={toAmount}
          selectedValue={toCurrency}
          setSelectedValue={setToCurrency}
        />
      </div>

      <div>
        <button>Convert Amount</button>
      </div>

    </>
  )
}

export default App
