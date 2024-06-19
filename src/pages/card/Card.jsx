import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getCartTotal, updateQuantity, removeItem } from '../../store/cartSlice';
import styles from '../../style';
import { products, products1 } from '../../data/Data';

const Card = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount, deliverCharge } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  const increaseQty = (cartProductId, currentQty) => {
    dispatch(updateQuantity({ id: cartProductId, quantity: currentQty + 1 }));
  };

  const decreaseQty = (cartProductId, currentQty) => {
    if (currentQty > 1) {
      dispatch(updateQuantity({ id: cartProductId, quantity: currentQty - 1 }));
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='shopHeader w-full h-[250px] flex justify-center items-center'>
        <div className='flex flex-col gap-5'>
          <h3 className={`${styles.subtitle} font-semibold text-[36px] text-white text-center`}>Cart</h3>
          <div className='flex gap-3'>
            <Link to="/home" className='text-green'>Home /</Link>
            <p className='text-white'>Cart</p>
          </div>
        </div>
      </div>

      <div className={`${styles.padding} w-full flex flex-col gap-10`}>
        <h1 className={`text-[28px] font-semibold text-center text-textGrey`}>Your Cart</h1>

        <div className='mt-5'>
          <table className='flex flex-col justify-start items-center gap-5'>
            <thead className='w-full'>
              <tr className='flex justify-between'>
                <th className='md:text-[18px] text-[12px]'>Products</th>
                <th className='md:text-[18px] text-[12px]'>Name</th>
                <th className='md:text-[18px] text-[12px]'>Price</th>
                <th className='md:text-[18px] text-[12px]'>Quantity</th>
                <th className='md:text-[18px] text-[12px]'>Total</th>
                <th className='md:text-[18px] text-[12px]'>Handle</th>
              </tr>
            </thead>
            <hr className='my-3 bg-[grey]' />

            <tbody className='w-full'>
              {cartProducts.length === 0 ? (
                <tr><td colSpan="6" className="text-center">Your Cart is Empty</td></tr>
              ) : (
                cartProducts.map((product) => (
                  <tr key={product.id} className='flex justify-between items-center'>
                    <th>
                      <img src={product.product_img} alt={product.product_name} className='w-[100px] h-[100px]' />
                    </th>
                    <th><p>{product.product_name}</p></th>
                    <th><p>{product.price}</p></th>
                    <th>
                      <div className='flex justify-center items-center gap-1'>
                        <div 
                          className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-greyCard pointer' 
                          onClick={() => decreaseQty(product.id, product.quantity)}
                        >
                          <span>-</span>
                        </div>
                        <div className='w-[30px] h-[30px] flex justify-center items-center bg-greyCard'>
                          <span>{product.quantity}</span>
                        </div>
                        <div 
                          className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-greyCard pointer' 
                          onClick={() => increaseQty(product.id, product.quantity)}
                        >
                          <span>+</span>
                        </div>
                      </div>
                    </th>
                    <th>
                    <p>{(product.price * product.quantity).toFixed(2)}$</p>
                    </th>
                    <th>
                      <div className='flex justify-center items-center gap-1'>
                        <div 
                          className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-greyCard pointer' 
                          onClick={() => handleRemoveItem(product.id)}
                        >
                          <span>x</span>
                        </div>
                      </div>
                    </th>
                  </tr>
                ))
              )}
            </tbody>
            <hr className='my-3 w-full h-[2px] bg-[grey]' />
          </table>
        </div>

        <div className='relative flex justify-end w-full'>
          <div className='flex flex-col gap-5 px-8 py-6 w-[450px] bg-greyCard rounded-[10px]'>
            <h3 className={`${styles.subtitle} font-semibold text-[36px] text-textGrey text-center`}>
              Cart Total
            </h3>
            <div className='flex justify-between items-center'>
              <h4 className='text-textGrey'>Subtotal</h4>
              <p><span>{totalAmount.toFixed(2)}$</span></p>
            </div>
            <hr className='my-3 h-[2px] bg-[grey]' />
            <div className='flex justify-between items-center'>
              <h4 className='text-textGrey'>Shipping</h4>
              <p><span>{deliverCharge.toFixed(2)}$</span></p>
            </div>
            <hr className='my-3 h-[2px] bg-[grey]' />
            <div className='flex justify-between items-center'>
              <h4 className='text-textGrey'>Total</h4>
              <p><span>{(totalAmount + deliverCharge).toFixed(2)}$</span></p>
            </div>
            <hr className='my-3 h-[2px] bg-[grey]' />
            <div className='w-full center'>
    <button className={`buy-now flex gap-2 center bg-gold w-[100%] h-[70px] `}>
     <a href='#' className='text-white font-semibold'>Proceed to Checkout</a>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short text-white" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
     </svg>
    </button>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
