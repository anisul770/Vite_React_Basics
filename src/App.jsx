import APIFetch from './components/APIFetch';

function App() {
  // const [cartItems, setCartItems] = useState([
  //   "Product 1", 
  //   "Product 2",
  //   "Product 3",
  //   "Product 4",
  // ]);

  // const handleProductRemove = (item) => {
  //   setCartItems(cartItems.filter(product => product != item));
  // }

  return (
    <div className='m-5'>
      {/* <Navbar cartItemsCount={cartItems.length} />
      <Cart 
        cartItems= {cartItems} 
        onClear={() => setCartItems([])} 
        onRemove={handleProductRemove}
      /> */}
      {/* <Effect/> */}
      <APIFetch/>
    </div>
  );
};

export default App
