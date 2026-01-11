import { useState } from "react";


const List = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango', 'Pine Apple'];

  const [selectedIndex,setSelectedIndex] = useState(-1);
  // const [name,setName] = useState("");

  // let selectedIndex = -1;
  // const handleItemPrint = (index) => {
  //   selectedIndex = index;
  //   console.log(selectedIndex);
  // };

  return (
    <div>
      <h1 className="text-xl font-bold">Fruits</h1>
      <ul className="pl-6 list-disc text-xl">
        {fruits.map((fruit, index) => {
          return (
            <li className={
              selectedIndex === index ? "bg-blue-500 p-3 rounded-sm m-3" : ""
              } 
              onClick={() => setSelectedIndex(index)} 
              key={fruit}>
              {fruit}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;