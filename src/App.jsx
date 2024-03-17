import './App.css'
import Navbar from './components/header/Navbar'
import Banner from './components/header/Banner'
import CardHeader from './components/card/CardHeader'
import WannaCook from './components/WannaCook'
import CurrentlyCooking from './components/CurrentlyCooking'
// import Recipies from './components/Recipies'
import Recipes from './components/Recipes/Recipes'
import { useState } from 'react'

function App() {
  const [wannaCooks, setWannaCooks] = useState([]);

  const handleAddToWannaCook = item => {
    console.log(item);
    const newWannaCook = [...wannaCooks, item];
    setWannaCooks(newWannaCook);
  }

  // const deletingWannaCook = item =>{
  //   const newArray = wannaCooks.filter(item => item.id !== 2);
  // }
  const [currentlyCookings, setCorrentlyCookings] = useState([]);
  const handleAddToCurrentlyCooking = item2 => {
    console.log(item2);
    const newCurrentlyCooking = [...currentlyCookings, item2];
    setCorrentlyCookings(newCurrentlyCooking);
  }

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <CardHeader></CardHeader>

      <div className='md:flex'>
        <div className='md:w-2/3'>
          <Recipes handleAddToWannaCook={handleAddToWannaCook}></Recipes>
        </div>
        
        <div className='md:w-1/3 border rounded-2xl border-[#28282833] h-fit'>
          <WannaCook wannaCooks={wannaCooks} handleAddToCurrentlyCooking = {handleAddToCurrentlyCooking}></WannaCook>
          <CurrentlyCooking currentlyCookings = {currentlyCookings}></CurrentlyCooking>
        </div>
      </div>
     
      
    </div>
  )
}

export default App
