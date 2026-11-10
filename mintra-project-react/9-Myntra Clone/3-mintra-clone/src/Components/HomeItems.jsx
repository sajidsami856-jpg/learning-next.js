import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bagActions } from '../store/BagSlice';
import { IoMdAdd } from "react-icons/io";
import { MdOutlineRemove } from "react-icons/md";
function HomeItems({item}) {
  const bagItems=useSelector(store=> store.bag);
  const elementFound=bagItems.indexOf(item.id) >=0 ;
  console.log(elementFound,item.id);

  const dispatch=useDispatch();

  const handleAddToBag=()=>{
    dispatch(bagActions.addToBag(item.id));
  }
  const handleRemoveFromBag=()=>{
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="item-container">
      <img className="item-image" src={`/${item?.image}`} alt="item image"/>
      <div className="rating">
          {item?.rating?.stars} ⭐ | {item?.rating?.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {/* <button className="btn-add-bag" >Add to Bag</button> */}
      
      {elementFound ? <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemoveFromBag}><MdOutlineRemove />Remove from bag</button>:<button type="button" className="btn-add-bag btn btn-success" onClick={handleAddToBag}><IoMdAdd />Add to bag</button>
      }
    </div>
  )
}

export default HomeItems;