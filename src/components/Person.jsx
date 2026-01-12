import { useState } from 'react';

const Person = () => {
  // state store data in a array like this with proper order
  // ["apadoto",false] 
  // const [person,setPerson] = useState("apadoto");
  // const [visible,setVisible] = useState(false);

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  
  const handleClick = ()=> {
    setFirstName("Mr");
    setLastName("X");
  };
  
  return (
    <div className='m-5'>
      <h1>{firstName} {lastName}</h1>
      <button onClick={handleClick} className='px-3 py-2 bg-blue-500 text-white rounded-sm'>Click Me</button>
    </div>
  );
};

export default Person;

// State works asynchronously