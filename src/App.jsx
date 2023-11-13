import AdviseCard from './components/AdviseCard'

function App() {
  return (
    <>
      <main className="bg-drkBlue">
        <div className="container mx-auto flex flex-col items-center justify-center p-8 w-full max-w-[1440px] min-h-screen">
          <AdviseCard />
        </div>
      </main>
      <footer className="text-center text-xs">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  )
}

export default App
