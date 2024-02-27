import Home from './components/Home'
import Footer from './components/Footer'
import NavegationMenu from './components/NavegationMenu'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import FormRecipes from './components/pages/FormRecipes'
import './App.css'
import Admin from './components/pages/Admin'

function App() {

  return (
    <BrowserRouter>
    <NavegationMenu></NavegationMenu>
      <main>
    <Routes>
    <Route exact path='/' element ={<Home/>}></Route>
    <Route exact path='/admin' element ={<Admin/>}></Route>
    <Route exact path='/admin/formRecipes' element ={<FormRecipes/>}></Route>
    </Routes>
      </main> 
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
