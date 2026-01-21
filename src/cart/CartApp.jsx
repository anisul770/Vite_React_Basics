import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CartApp = () => {
  const {register,handleSubmit} = useForm();

  const [cart,setCart] = useState([]);

  /* const cart = [
    { name : "Laptop", price : 34000},
    { name : "Mobile Phone", price: 20000},
  ]; */ 

  // Add Item
  const addItem = (data) => {
    const existingItem = cart.find(item => item.name === data.name);
    if (existingItem) {
      setCart(cart.map( item => item.name === data.name ? {...item,quantity : item.quantity + 1 } : item));
    }
    else {
      setCart([...cart,{name : data.name , price : parseFloat(data.price) , quantity : 1}]);
    }
  }; 
  // Increase quantity
  const increaseQuantity = (name) => {
    setCart(cart.map(item => item.name===name ? {...item,quantity : item.quantity +1}:item));
  };
  // Decrease quantity
  const decreaseQuantity = (name) => {
    setCart(cart.map(item => item.name===name ? {...item,quantity : item.quantity -1}:item).filter(item => item.quantity>0));
  };
  // Remove Item
  const removeItem = (name) => {
    setCart(cart.filter(item => item.name!=name));
  };
  // Calculate Total price
  const totalPrice = cart.reduce(
    (total,item) => total + (item.price*item.quantity)
  ,0);
  return (
    <div className="w-1/2 mx-auto bg-gray-100 rounded-lg p-6 shadow-md">
      {/* Add Cart Item */}
      <form onSubmit={handleSubmit(addItem)} action="" className="mb-4 space-y-2">
        <input 
          {...register("name", {require:true})}
          type="text" 
          placeholder="Item Name" 
          className="border p-2 rounded w-full"/>
        <input 
          {...register('price',{require:true})}
          type="number" 
          placeholder="Item Price" 
          className="border p-2 rounded w-full"/>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">Add Item</button>
      </form>
      {/* Cart Item List */}
      {cart.length > 0 ? (
        // To show cart items
        <div>
          {cart.map(item => (
            <div key={item.name} className="flex justify-between items-center p-2 bg-white rounded mb-2">
              <p className="font-semibold">{item.name}</p>
              <p>{(item.price * item.quantity).toFixed(2)}</p>
              <div className="flex items-center">
                <button onClick={()=> decreaseQuantity(item.name)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={()=> increaseQuantity(item.name)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
                <button onClick={()=>removeItem(item.name)}>  
                  <Trash2/>
                </button>
              </div>
            </div>
          ))}
          {/* Total Price */}
          <div className="mt-4 font-bold text-lg">Total : ${totalPrice.toFixed(2)} </div>
        </div>
      ) : (  
        <p>No Cart Items</p> 
      )}
    </div>  
  );
};

export default CartApp; 