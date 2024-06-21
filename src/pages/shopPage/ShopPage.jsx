import React, { useState } from "react";
import styles from '../../style';
import { products } from '../../data/Data';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.data);
  
  const handleAddToCart = (product) => {
    const existingProductIndex = cartProducts.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedQuantity = cartProducts[existingProductIndex].quantity + qty;
      dispatch(updateQuantity({ id: product.id, quantity: updatedQuantity }));
    } else {
      const totalPrice = qty * product.price;
      const tempProduct = {
        ...product,
        quantity: qty,
        totalPrice,
      };
      dispatch(addToCart(tempProduct));
    }

    // navigate("/cart");
  }

  return (
    <div className={`bg-greyBg ${styles.padding}`}>
      <div className='flex flex-col gap-3'>
        <h1 className={`text-3xl font-semibold text-textGrey md:text-4xl lg:text-5xl`}>Best Products</h1>
        <div className='flex flex-col lg:flex-row gap-10'>
          <div className='flex flex-col gap-5 lg:w-1/4'>
            <div className='relative inputContainer flex border-green-500 rounded-lg'>
              <input type="search" name="search" id="search" className="p-3 w-full rounded-lg" placeholder="Search" />
              <div className='absolute right-0 top-0 flex justify-center items-center w-12 h-12 bg-greyCard rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search text-textGrey" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
              </div>
            </div>
            <h3 className={`text-2xl my-2 font-semibold text-textGrey`}>Category</h3>
            <div className='flex justify-between items-center'>
              <span className='text-green cursor-pointer'>All</span>
              <span>{products.length}</span>
            </div>
            <h3 className={`text-2xl mt-2 font-semibold text-textGrey`}>Price</h3>
            <input type="range" name="" id="" className="w-full" />
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-3/4`}>
            {products.map((item, index) => (
              <div key={index} className='flex flex-col gap-0 md:mt-10'>
                <div className='relative bg-greyCategorie justify-start items-start h-60 md:h-80'>
                  <img src={item.product_img} alt={item.product_img} className='absolute bottom-0 w-full h-full object-cover' />
                </div>
                <div className='bg-white w-full flex flex-col p-4 gap-1'>
                  <span className='text-textGrey'>{item.category}</span>
                  <h3 className='text-blue text-2xl font-semibold'>{item.product_name}</h3>
                  <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill text-orange" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    ))}
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <p className='text-textGrey'>{item.price}$</p>
                    <div onClick={() => handleAddToCart(item)} className='w-12 h-12 rounded-full bg-blue cursor-pointer flex justify-center items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus text-white" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
