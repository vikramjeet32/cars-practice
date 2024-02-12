import React from "react";

export type ButtonProps ={
    title : string;
    containerStyles? : string;
    handleClick?:()=>void;
    btnType ?: string;
}

export type Search_Manufacture_Props ={
    manufacturer : string;
    setManuFacturer:(manufacturer:string)=>void;

}