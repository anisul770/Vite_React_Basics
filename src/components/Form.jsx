import { useRef } from "react";

const Form = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);

  const person = {name: "", age: 0};

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameRef.current != null) person.name = nameRef.current.value;
    if (ageRef.current != null) person.age = parseInt(ageRef.current.value);

    console.log(person);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
          <input ref={nameRef} id="name" type="text" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">Age:</label>
          <input ref={ageRef} id="age" type="number" className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        </div>
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default Form;