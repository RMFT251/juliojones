import "./quanityPicker.css";
import {useState} from "react";


function QuanityPicker (props)
    {
        const [quanity,setQuanity] = useState(1);
        //quanity=10; this is what we dont want to do
        function decrease(){
            let value= quanity -1;
            setQuanity(value)
            console.log("Decreasing");
            props.onQuantityChange(value);
        }
        //create the increase function
        //please use same logic but for the increasing
        function increase(){
            let value= quanity + 1;
            setQuanity(value);
            console.log("Increasing");
            props.onQuantityChange(value);
        }

        return (

            <div className="qaunityPicker">
                <button onClick={decrease}>-</button>
                <label>{quanity}</label>
            
            <button onClick={increase}>+</button>
            </div>
        );
    }


    export default QuanityPicker;