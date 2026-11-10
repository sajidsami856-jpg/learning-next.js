import '../../App.css'
import Header from '../Header'
import Footer from '../Footer'
import "bootstrap/dist/css/bootstrap.min.css"
import HomeItem from '../HomeItems'
import { Outlet } from 'react-router-dom'
import FetchItems from '../FetchItems'
import LoadingSpinner from "../LoadingSpinner"
import { useSelector } from 'react-redux'

function App() {

  const fetchStatus =useSelector((store)=> store.fetchStatus);

  return (
    <>
      <Header/>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet/>}
      <FetchItems/>
      {/* <Outlet/> */}
      <Footer/>
    </>
  )
}

export default App;
