import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import ListEmployees from './component/ListEmployees'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element = {<ListEmployees />} ></Route>
        <Route path='/employees' element = {<ListEmployees />} ></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
