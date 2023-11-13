const AdviseCard = () => {
  return (
    <div className="w-[343px] h-auto md:w-[540px] rounded-xl p-6 md:p-12 bg-drkGray flex flex-col items-center justify-center relative shadow-darkBlue shadow-sm">
      <p className="text-neon mb-6 font-medium">Advice #117</p>
      <p className="text-cyan quote-text text-center font-extrabold max-w-[444px]">
        &quot;It is easy to sit up and take notice, what&apos;s difficult is
        getting up and taking action&quot;
      </p>
      <div className="flex items-center justify-center mt-5 mb-10 gap-x-4">
        <span className="w-[122px] md:w-[196px] h-[1px] bg-cyan rounded-full z-10"></span>
        <img src="/pattern-divider-mobile.svg" alt="divider" />
        <span className="w-[122px] md:w-[196px] h-[1px] bg-cyan rounded-full z-10"></span>
      </div>
      <div className="absolute -bottom-8 rounded-full bg-neon flex items-center justify-center w-16 h-16 cursor-pointer">
        <img src="/icon-dice.svg" alt="dice icon" />
      </div>
    </div>
  )
}

export default AdviseCard
