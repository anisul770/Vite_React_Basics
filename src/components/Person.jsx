import { useState } from 'react';

const Person = () => {
  // state store data in a array like this with proper order
  // ["apadoto",false] 
  // const [person,setPerson] = useState("apadoto");
  // const [visible,setVisible] = useState(false);
  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState("");
  
  // const personObj = {
  //   firstName: "as",
  //   lastName: "asd",
  //   email: "mail@gmail.com",
  // };
  // const [person,setPerson] = useState(personObj);
  const [person,setPerson] = useState({
    firstName: "as",
    lastName: "asd",
    email: "mail@gmail.com",
    address : {
      city: "Mirpur",
      state : "Dhaka",
    },
  });

  const handleClick = ()=> {
    // setFirstName("Mr");
    // setLastName("X");

    // const newPerson = {
    //   firstName: "Mr.",
    //   lastName: "X",
    //   email: "mail@gmail.com",
    // };

    // ... this is spread operator
    const newPerson = {
      ...person,
      // firstName : "John",
      // lastName : "Doe",
      address : {
        ...person.address , city : "Dhanmondi"
      }
    };
    setPerson(newPerson);
  };
  
  return (
    <div className='m-5'>
      <h1>
        {person.firstName} {person.lastName} {person.email}
      </h1>
      <p>
        {person.address.city} {person.address.state}
      </p>
      <button onClick={handleClick} className='px-3 py-2 bg-blue-500 text-white rounded-sm'>Click Me</button>
    </div>
  );
};

export default Person;

// State works asynchronously