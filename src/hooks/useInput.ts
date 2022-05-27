import React,  {useState} from "react";

const useInput = (initialState : any) => {
    const [value, setValue] = useState(initialState);
    function onChange(e: React.ChangeEvent<HTMLInputElement>)  : void {
        setValue(e.target.value );
    }
    function clear() : void {
        setValue('')
    }
    return { bind: { value, onChange }, clear };
}

export default useInput;