import { useState } from 'react';
import './Person.css';

function Person({person}) {
  const [isSelected, setIsSelected] = useState(false);

  let className = 'container';
  if (isSelected)
    className += ' selected';

  return (
    <div className={className} onClick={() => setIsSelected(!isSelected)}>
        <div style={{display: "flex"}}>
            <div style={{display: "inline-block"}}>
                {/* <img src={person.picture.medium} alt="" /> */}
                {/* <img style={{height: "70px"}} src="./user-pic.png" alt="" /> */}
            </div>
            <div style={{display: "inline-block", paddingLeft: "15px", paddingTop: "9px"}}>
                <strong>Name: {person.name.title} {person.name.first} {person.name.last}</strong>
                <div>Gender: {person.gender}</div>
                <div>Age: {person.dob.age}</div>    
            </div>
        </div>

        <div style={{paddingTop: "10px"}}>E-Mail: {person.email}</div>
        <div>Phone: {person.phone}</div>
    </div>
  );
}

export default Person;
