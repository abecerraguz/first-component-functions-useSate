import React, { useState } from 'react'


const PersonCard = props => { 
  
  const [age, setAge] = useState(props.age);

  const handleIncrement = () => {
    setAge(age + 1)
  };


  
  return(   

    <div className="card">
     

      <h2 className="card__title">{props.firstName}, {props.lastName}</h2>
      <p className="card__description">Age:{age}</p>
      <p className="card__description">Air Color: {props.hairColor}</p>
      <button className="btn" onClick={handleIncrement}>Increment</button>
      {props.children}
      {/* <button className="btn" onClick={handleDecrement}>Decrement</button>
      <button className="btn" onClick={handleReset}>Reset</button> */}
    </div>  
  );

}
export default PersonCard;

