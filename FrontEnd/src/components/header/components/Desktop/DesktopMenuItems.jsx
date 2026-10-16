import React, { Component } from "react";
// import PropTypes from "prop-types";
import {HeaderItems}from '/constants/index.js'
function DesktopMenuItems (props){

    
      return (
        <ul className="hidden  md:flex  w-4/5 items-center justify-around text-sm text-subTitle md:text-xl light:light-utility">
          {HeaderItems.map( items => {
            return (
              <>
              
              <li className=" light:text-black light:hover:text-gray-400 hover:text-white">
                <a key={{items}} className="text-decoration-none p-0 m-0" href={`${items}`}>{items}</a>
                
              </li>
              </>
            )
          })}
        </ul>
      )
  }
export default DesktopMenuItems;
