import './App.css'
import Footer from './components/Footer'
import FreeTrial from './components/FreeTrial'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Pricing from './components/Pricing'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Header />
      <HeroSection />
      <Pricing/>    
      <FreeTrial/>
      <Footer/>
    </div>
  )
}

export default App
