import Home from './components/Home'
import Footer from './components/Footer'
import NavegationMenu from './components/NavegationMenu'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import FormRecipes from './components/pages/FormRecipes'
import './App.css'
import Admin from './components/pages/Admin'
import Login from './components/pages/Login'
import Register from './components/pages/Register'

function App() {

  return (
    <BrowserRouter>
    <NavegationMenu></NavegationMenu>
      <main>
    <Routes>
    <Route exact path='/' element ={<Home/>}></Route>
    <Route exact path='/admin' element ={<Admin/>}></Route>
    <Route exact path='/admin/formrecipes' element ={<FormRecipes editar ={false} titulo='Recetas Nuevas'/>}></Route>
    <Route exact path='/admin/edit/:id' element ={<FormRecipes editar={true} titulo='Editar Receta'/>}></Route>
    <Route exact path='/login'element={ <Login/>}  />
    <Route exact path='/register'element={ <Register/>}  />
    </Routes>
      </main> 
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
