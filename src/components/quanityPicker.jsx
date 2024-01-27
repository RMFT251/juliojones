import "./quanityPicker.css";
import {useState} from "react";


function QuanityPicker ()
    {
        function decrease(){
            console.log("Decreasing");
        }
        //create the increase function
        function increase(){
            console.log("Increasing");
        }

        return (

            <div className="qaunityPicker">
                <button onclick={decrease}>-</button>
                <label>1</label>
            
            <button>+</button>
            </div>
        );
    }


    export default QaunityPicker;