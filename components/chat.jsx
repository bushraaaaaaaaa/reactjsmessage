import React, { useState } from 'react'
import FormPropsTextFields from './Searchbar'

const Chat = () => {
    const [inputvalue, setinputvalue] = useState(""); 
  
    const handleInputChange = (event) => {
      setinputvalue(event.target.value);
    };
  
    return (
      <>
        <div className="container">
          <div className="card">
            <div className="header">Messaging App</div>
            <div className="messagerow">
              <p>{inputvalue}</p>
            </div>
            <div className="content row">
              <div className="col">
                <FormPropsTextFields onChange={handleInputChange} value={inputvalue} />
              </div>
              <div className="col">
                <button className="button"><i className="bi bi-send-fill"></i></button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Chat