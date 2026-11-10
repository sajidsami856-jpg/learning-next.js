import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { itmesActions } from '../store/ItemsSlice';

function FetchItems() {
    const fetchStatus=useSelector(store=> store.fetchStatus);
    const dispatch =useDispatch();

    useEffect(()=>{
        if(fetchStatus.fetchDone){
            return;
        }
         const controller =new AbortController();
         const signal = controller.signal;

        fetch("http://localhost:8080/items",{signal})
            .then((res)=> res.json())
                .then((items)=>{
                    console.log("item",items)
                    dispatch(itmesActions.addInitialItems(items.items[0]));
        })
        .catch((err)=>{
            if(err.name !== "AbortError") console.log(err);
        })
        
        return ()=>{
            controller.abort();
        }
    },[fetchStatus]);

  return (
    <>
    <div>
        fetch Done :{fetchStatus.fetchDone}
        currentlyFetching:{fetchStatus.currentlyFetching}
    </div>
    </>
  )
}

export default FetchItems;