import { useEffect, useState } from "react";

const Effect = () => {
  const [users,setUsers] = useState([]);
  const [dependencyA,setDependencyA] = useState(0);
  const [dependencyB,setDependencyB] = useState(0);
  useEffect(() => {
    console.log("Effect Occurred");
    setUsers(["John"]);
  },[dependencyA,dependencyB]);
  return (
    <div>
      <h1>UserList</h1>
      <p>{dependencyA}</p>
      <button onClick={()=>setDependencyA(Math.random)} className="px-3 py-2 bg-blue-500 text-white me-2">Click me A</button>
      <button onClick={()=>setDependencyB(Math.random)} className="px-3 py-2 bg-blue-500 text-white">Click me B</button>
    </div>
  );
};

export default Effect;

/*
Side effects 
1. Manually modify the DOM
2. Store data in local storage
3. Call the/to fetch/save data
*/