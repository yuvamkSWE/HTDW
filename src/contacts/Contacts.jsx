import React from "react";
import { SmallLogo } from "./SmallLogo";

import "./style.css";

export const Contacts = () => {
  return (
    
    <div className="contacts">
      <div className="div">
   
        <SmallLogo className="small-logo-instance" />
        <div className="text-wrapper-2">Contacts</div>
        <div className="name">
          <div className="frame">
            <div className="text-wrapper-3">Ann</div>
          </div>
        </div>
        <div className="frame-wrapper">
          <div className="frame">
            <div className="text-wrapper-3">Ben</div>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="frame">
            <div className="text-wrapper-3">Carson</div>
          </div>
        </div>
        <div className="name-2">
          <div className="frame">
            <div className="text-wrapper-3">Chris</div>
          </div>
        </div>
        <div className="name-3">
          <div className="frame">
            <div className="text-wrapper-3">Nathan</div>
          </div>
        </div>
        <div className="name-4">
          <div className="frame">
            <div className="text-wrapper-3">Naomi</div>
          </div>
        </div>
        <div className="name-5">
          <div className="frame">
            <div className="text-wrapper-3">Yuram</div>
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
};
