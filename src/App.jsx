import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import {Provider} from 'react-redux'
import store from './store/store'
function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <Provider store={store}>
   <BrowserRouter>
   <Navbar/>
   
   <Routes>
    {/* <h1>Hello redux</h1> */}
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    <br />
    <Footer/> 
    </BrowserRouter>
    </Provider>
  </>
  )
}

export default App
