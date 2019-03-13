import React from "react";

function SearchAddress(props){
    const addressBook=[...props.address];
    if(props.ifFind){
        console.log("find")
    }
    console.log("not found")
  
}

export default SearchAddress; 