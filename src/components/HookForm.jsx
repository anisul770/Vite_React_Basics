import { useForm } from "react-hook-form";

const HookForm = () => {
  const {register,handleSubmit,formState:{errors}} = useForm();
  console.log(errors)
  const onSubmit = (data) => {
    // console.log(register);
    console.log(data);
  }
  console.log(errors);
  return (
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mb-3">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="name">
            Name:
          </label>
          <input 
            {...register('name',{required:true,minLength:5})}
            id="name" 
            type="text" 
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {errors.name?.type === 'required' && <span>This field is required</span>}
            {errors.name?.type === 'minLength' && <span>Minimum length is 5</span>}
        </div>
        <div className="mb-3">
          <label 
            className="block text-gray-700 text-sm font-bold mb-2" 
            htmlFor="age">
            Age:
          </label>
          <input 
            {...register('age',{required:true,min: 18})}
            id="age" 
            type="number" 
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            {errors.age?.type ==='required' && <span>This field is required</span>}
            {errors.age?.type === 'min' && <span>Minimum age is 18</span>}
        </div>
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HookForm;