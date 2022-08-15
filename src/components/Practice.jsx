import React from "react";
import fbb from "../assets/image/fbb.jpg"
//
function Practice(){
return (
    <div className="flex justify-center items-center h-5">
        <div className="w-96 shadow-md">
            <div className="h-60 overflow-hidden">
                <img src={fbb} alt="" />
            </div>
            <div className="p-5">
                <div className="flex justify-between">
                    <h3 className="font-bold capitalize">Laptop</h3>
                    <h6>Ghc5000</h6>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eaque necessitatibus beatae? Porro eum dolorum perferendis odit sed ducimus minus!</p>
            </div>
        </div>
    </div>
)
}

export default Practice;