// first_component
// firstComponent  this is called PascalCasing
const FirstComponent = () => {
    const name = "Phitron";
    // const content = name?name:"World";

    const sum = (a,b) => a + b;


    return (
        <>
            <h1 className="text-xl font-bold text-red-500">Hello {name||"World"}</h1>
            <p>Ki Khobor?</p>
            <p>Your mark is {sum(5,34)}</p>
        </>
    );
};

export default FirstComponent;