import './App.css'
import Navbar from './components/header/Navbar'
import Banner from './components/header/Banner'
import CardHeader from './components/card/CardHeader'
import WannaCook from './components/WannaCook'
import CurrentlyCooking from './components/CurrentlyCooking'
// import Recipies from './components/Recipies'
import Recipes from './components/Recipes/Recipes'
import { useState } from 'react'
import Alert from './components/Alert'

function App() {
  const [wannaCooks, setWannaCooks] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleAddToWannaCook = item => {
    //console.log(item);
    const isPresent = wannaCooks.some(object => object.recipe_id === item.recipe_id);
    if (!isPresent) {
      const newWannaCook = [...wannaCooks, item];
      setWannaCooks(newWannaCook);
    }
    else {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }


  }

  const [currentlyCookings, setCorrentlyCookings] = useState([]);
  const handleAddToCurrentlyCooking = item2 => {
    console.log(item2);
    const oddNumbers = wannaCooks.filter(number => number.recipe_id !== item2.recipe_id);
    setWannaCooks(oddNumbers);
  
    const newCurrentlyCooking = [...currentlyCookings, item2];
    setCorrentlyCookings(newCurrentlyCooking);
  }

  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <CardHeader></CardHeader>
      {
        alert && <Alert></Alert>
      }
      <div className='flex flex-col lg:flex-row mt-20 gap-6'>
        <div className='lg:w-3/5'>
          <Recipes handleAddToWannaCook={handleAddToWannaCook}></Recipes>
        </div>

        <div className='lg:w-2/5 border rounded-2xl border-[#28282833] h-fit'>
          <WannaCook wannaCooks={wannaCooks} handleAddToCurrentlyCooking={handleAddToCurrentlyCooking}></WannaCook>
          <CurrentlyCooking currentlyCookings={currentlyCookings}></CurrentlyCooking>
        </div>
      </div>


    </div>
  )
}

export default App
