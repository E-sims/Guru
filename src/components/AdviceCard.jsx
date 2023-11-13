import { useEffect, useState } from 'react'
const BASE_URL = 'https://api.adviceslip.com/advice'

// Get a new quote when the dice button is clicked

const AdviceCard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useState('')
  const [id, setId] = useState('')

  const getQuote = async () => {
    setIsLoading(true)
    const response = await fetch(BASE_URL)
    const quote = await response.json()
    setQuote(`"${quote.slip.advice}"`)
    setId(`Advice #${quote.slip.id}`)
    setIsLoading(false)
  }
  useEffect(() => {
    getQuote()
  }, [])

  if (isLoading) {
    return (
      <div className="w-[343px] h-auto md:w-[540px] rounded-xl p-6 md:p-12 bg-drkGray flex flex-col items-center justify-center relative shadow-darkBlue shadow-sm">
        <p id="quote-id" className="text-neon mb-6 font-medium">
          &quot;Advice&quot;
        </p>
        <p className="text-cyan quote-text text-center font-extrabold max-w-[444px]">
          &quot;Loading...Guru is thinking...&quot;
        </p>
        <div className="flex items-center justify-center mt-5 mb-10 gap-x-4">
          <span className="w-[122px] md:w-[196px] h-[1px] bg-cyan rounded-full z-10"></span>
          <img src="/pattern-divider-mobile.svg" alt="divider" />
          <span className="w-[122px] md:w-[196px] h-[1px] bg-cyan rounded-full z-10"></span>
        </div>
        <div
          className="absolute -bottom-8 rounded-full bg-neon flex items-center justify-center w-16 h-16 cursor-pointer"
          onClick={getQuote}
        >
          <img src="/icon-dice.svg" alt="dice icon" />
        </div>
      </div>
    )
  }

  return (
    <div className="w-[343px] h-auto md:w-[540px] rounded-xl p-6 md:p-12 bg-drkGray flex flex-col items-center justify-center relative shadow-darkBlue shadow-sm">
      <p id="quote-id" className="text-neon mb-6 font-medium">
        {id}
      </p>
      <p className="text-cyan quote-text text-center font-extrabold max-w-[444px]">
        {quote}
      </p>
      <div className="flex items-center justify-center mt-5 mb-10 gap-x-4">
        <span className="w-[122px] md:w-[196px] h-[1px] bg-cyan rounded-full z-10"></span>
        <img src="/pattern-divider-mobile.svg" alt="divider" />
        <span className="w-[122px] md:w-[196px] h-[1px] bg-cyan rounded-full z-10"></span>
      </div>
      <div
        className="absolute -bottom-8 rounded-full bg-neon flex items-center justify-center w-16 h-16 cursor-pointer"
        onClick={getQuote}
      >
        <img src="/icon-dice.svg" alt="dice icon" />
      </div>
    </div>
  )
}

export default AdviceCard
