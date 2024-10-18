import React, {useState, useEffect} from 'react'
import { products } from '../pages/products';
import { useDispatch } from 'react-redux';
import { changeQuantity } from '../stores/cart';

const CartItem = (props) => {
    const {productId, quantity} =props.data;
    const [detail, setDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
          const findDetail = products.filter (product => product.id === productId)[0];
          setDetail(findDetail);
    }, [productId])
    const handleMinusQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity - 1
      }));
    }
    const handlePlusQuantity = () => {
      dispatch(changeQuantity({
        productId: productId,
        quantity: quantity + 1
      }));
    }
  return (
    <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5'>
      <img src={detail.image} alt="" className='w-12'/>
      <h3>{detail.name}</h3>
      <p>${detail.price * quantity}</p>
      <div className='w-200 flex justify-between gap-1'>
      <span>{quantity}</span>
        <button className='bg-gray-200 text-black p-2 w-70 h-20 text-black text-md rounded-full' onClick={handleMinusQuantity}>🛒RemoveFromCart</button>
      </div>
    </div>
  )
}

export default CartItem