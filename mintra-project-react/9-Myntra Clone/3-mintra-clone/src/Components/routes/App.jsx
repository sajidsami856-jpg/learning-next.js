import '../../App.css'
import Header from '../Header'
import Footer from '../Footer'
import HomeItem from '../HomeItems'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
