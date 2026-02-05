import { useState } from "react";

const useForm = (defaultValues)=>{
    const [values, setValues] = useState(defaultValues);

    const handleChange = (evt) =>{
        const {name, value} = evt.target;
        setValues({...values, [name]: value});
    }

    const handleReset = () => {
       setValues(defaultValues);
    };

    return {values, setValues, handleChange, handleReset};
};

export default useForm;