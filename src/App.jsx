import './App.css'
import Navbar from './components/header/Navbar'
import Banner from './components/header/Banner'
import CardHeader from './components/card/CardHeader'
import WannaCook from './components/WannaCook'
import CurrentlyCooking from './components/CurrentlyCooking'
// import Recipies from './components/Recipies'
import Recipes from './components/Recipes/Recipes'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <CardHeader></CardHeader>

      <div className='md:flex'>
        <div className='md:w-2/3'><Recipes></Recipes></div>
        
        <div className='md:w-1/3'>
          <WannaCook></WannaCook>
          <CurrentlyCooking></CurrentlyCooking>
        </div>
      </div>
     
      
    </>
  )
}

export default App
