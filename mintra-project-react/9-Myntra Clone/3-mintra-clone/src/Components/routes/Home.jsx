
import HomeItems from '../HomeItems';
import {useSelector} from 'react-redux'
function Home() {
  const items=useSelector(store=> store.items);
  // console.log(items);
  return (
    <main>
        <div className="items-container">
          {(items ).map((item,idx)=><HomeItems item={item} key={item.id || idx}></HomeItems>)}
          
        </div>
    </main>
  )
}

export default Home;
