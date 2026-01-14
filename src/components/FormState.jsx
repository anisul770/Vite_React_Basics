import { useState } from "react";

const FormState = () => {
  const personObj = {name: "", age: ""};
  const [person, setPerson] = useState(personObj);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(person)
  };

  return (
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="name">
            Name:
          </label>
          <input 
            onChange={event => setPerson({...person,name:event.target.value})} 
            value={person.name}
            id="name" 
            type="text" 
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        </div>
        <div className="mb-3">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="age">
            Age:
          </label>
          <input 
            onChange={event => setPerson({...person,age : event.target.value})} 
            value={person.age}
            id="age" 
            type="number" 
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        </div>
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormState;