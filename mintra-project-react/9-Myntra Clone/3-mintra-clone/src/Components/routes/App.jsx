import '../../App.css'
import Header from '../Header'
import Footer from '../Footer'
import HomeItem from '../HomeItems'
import { Outlet } from 'react-router-dom'
import FetchItems from '../FetchItems'

function App() {
  return (
    <>
      <Header/>
      <FetchItems/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App;
