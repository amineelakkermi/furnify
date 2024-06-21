import React, { useState } from 'react';
import styles from '../style';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { products, products1 } from '../data/Data';
import { canapé2, chaise, chaise1, chaise2, chaise3, lampe1 } from '../assets';

const Products = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const cartProducts = useSelector((state) => state.cart.data);

  const handleAddToCart = (product) => {
    // Vérifier si le produit existe déjà dans le panier
    const existingProductIndex = cartProducts.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Mettre à jour la quantité du produit existant dans le panier
      const updatedQuantity = cartProducts[existingProductIndex].quantity + qty;
      dispatch(updateQuantity({ id: product.id, quantity: updatedQuantity }));
    } else {
      // Ajouter un nouveau produit au panier
      let totalPrice = qty * product.price;
      const tempProduct = {
        ...product,
        quantity: qty,
        totalPrice,
      };
      dispatch(addToCart(tempProduct));
    }

    navigate("/cart"); // Redirection vers la page du panier
  };

  const [menuItems, setMenuItems] = useState(products);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(products);
    } else {
      const newItems = products.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <section id='products' className={`min-h-[100vh] bg-greyBg flex flex-col gap-10 ${styles.padding}`}>
    
    <h1 className={`text-[48px] md:mt-0 mt-10 text-center font-bold text-blue`}>Best Selling Products</h1>

    <div className='w-full flex justify-center items-center'>
    <ul className='md:bg-greyCategorie bg-transparent  md:p-4 p-2 flex-wrap  rounded-[50px] center  md:h-[80px] h-auto gap-[20px]'>
    <li className='w-[95px] h-[50px] md:bg-greyCategorie bg-greyCategorie rounded-[50px]  hover:bg-greyCategorieHover center'><a  className='text-blue text-[18px] font-medium' onClick={() => filterItems("chair")}>Chair</a></li>
    <li className='w-[95px] h-[50px] md:bg-greyCategorie bg-greyCategorie rounded-[50px]  hover:bg-greyCategorieHover center'><a  className='text-blue text-[18px] font-medium' onClick={() => filterItems("sofa")}>Sofa</a></li>
    <li className='w-[95px] h-[50px] md:bg-greyCategorie bg-greyCategorie rounded-[50px]  hover:bg-greyCategorieHover center'><a  className='text-blue text-[18px] font-medium' onClick={() => filterItems("beds")}>Beds</a></li>
    <li className='w-[95px] h-[50px] md:bg-greyCategorie bg-greyCategorie rounded-[50px]  hover:bg-greyCategorieHover center'><a  className='text-blue text-[18px] font-medium' onClick={() => filterItems("lamp")}>Lamp</a></li>
    <li className='w-[95px] h-[50px] md:bg-greyCategorie bg-greyCategorie rounded-[50px]  hover:bg-greyCategorieHover center'><a  className='text-blue text-[18px] font-medium' onClick={() => filterItems("all")}>All</a></li>
     </ul> 
    </div>

    <div className='w-full mt-24 mb-12 flex flex-wrap center sm:gap-x-16 gap-x-16 md:gap-y-48 gap-y-24'>
     
     {
      menuItems.map((item , index) => (
        <div key={index} className='flex flex-col md:w-[250px] w-[100%] gap-0 md:mt-0 mt-10'>
      {/* img div */}
      <div className='relative bg-greyCategorie justify-start items-start md:w-[250px] w-[100%] md:h-[220px] h-[300px]'>
      <img src={item.product_img} alt={item.product_img} className='absolute md:bottom-[15%] bottom-[0%] w-[100%] h-[100%]' />
      </div>
 
      <div className='bg-white w-[100%] flex flex-col p-4 gap-1'>
       <span className='text-textGrey'>{item.category}</span>
       <h3 className='text-blue text-[32px] font-semibold'>{item.product_name}</h3>
       <div className='flex items-center gap-1'>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill text-orange" viewBox="0 0 16 16">
       <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
       </svg>
       </div>
       <div className='w-full flex justify-between items-center'>
       <p className='text-textGrey'>{item.price}$</p>
      
      <div onClick={() => handleAddToCart(item)} className='plus-div w-[50px]  h-[50px] rounded-full center bg-blue cursor-pointer'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus text-white" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
      </svg>
      </div>
       </div>
      </div>




     </div>
      ))
     }

  

    

   
     
    
    
    
    </div>

    <div className='w-full center mb-10'>
    <button className={`buy-now flex gap-2 center bg-gold w-[200px] h-[70px] `}>
     <Link to="/shop" className='text-white font-semibold'>View All</Link>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short text-white" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
     </svg>
    </button>
    </div>
   
     
       

    
    </section>
  );
};

export default Products;
