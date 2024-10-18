import {Outlet} from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <>
     <Header/>  
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default App
