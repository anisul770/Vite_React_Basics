import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const PlayWithButton = () => {
  const handleClick = () => console.log("Button Clicked")

  const [alertVisible,SetAlertVisible] = useState(false)

  return (
    <div>
      {alertVisible && (
        <Alert color="success" onClose={()=>SetAlertVisible(false)}>You have click the button</Alert>
      )}
      <Button className='font-bold' handleClick={()=> SetAlertVisible(true)}>Click Me</Button>
    </div>
  );
};

export default PlayWithButton;