import React from "react"

const Square=(props)=>{
  return (
    <div
    style={
      {
        border:"6px solid red",
        height:"150px",
        width:"2400px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }
    }
    onClick={props.onClick}
     className="Square">
     <h5>{props.value}</h5>
    </div>
  );
};

export default Square;