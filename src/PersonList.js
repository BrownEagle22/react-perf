import { useEffect, useState } from "react";
import Person from "./Person";

import people1k from './testsets/people1k';
import people10k from './testsets/people10k';


function PersonList() {
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=1000").then(function(response) {
            return response.json();
          }).then((data) => {
            setPeople(data.results);
          });
        // let ppl = getPeople(1);
        // setPeople(ppl);
    }, []);

    let getPeople = (countInK) => {
        fetch(url).then(function(response) {
            return response.json();
          });
        // let ppl = JSON.parse(people10k).results.slice(0, countInK * 1000);
        // for (let idx in ppl) {
        //     ppl[idx].id = idx;
        // }
        // return ppl;
    }

    let onAddClick = () => {
        // setPeople([...people, ...getPeople(1)]);
        fetch("https://randomuser.me/api/?results=1000").then(function(response) {
            return response.json();
          }).then((data) => {
            setPeople(data.results);
          });
    }

    let onAdd10Click = () => {
        // setPeople([...people, ...getPeople(10)]);
        fetch("https://randomuser.me/api/?results=10000").then(function(response) {
            return response.json();
          }).then((data) => {
            setPeople(data.results);
          });
    }

    let onUpdateClick = () => {
        let counter = 1;
        for (let idx in people) {
            people[idx] = Object.assign({}, people[idx]);
            people[idx].name.first = counter.toString();
            people[idx].name.last = counter.toString();
            people[idx].email = counter.toString();
            people[idx].phone = counter.toString();
            counter++;
        }

        setPeople([...people]);
    }

    let onUpdate10Click = () => {
        let counter = 1;
        for (let idx in people) {
            if (counter % 10 === 0) {
                people[idx] = Object.assign({}, people[idx]);
                people[idx].name.first = counter.toString();
                people[idx].name.last = counter.toString();
                people[idx].email = counter.toString();
                people[idx].phone = counter.toString();                
            }
            counter++;
        }

        setPeople([...people]);
    }

    let onClearClick = () => {
        setPeople([]);
    }

    let swap2rows = () => {
        let i1 = 0;
        let i2 = 100;
    
        let newPeople = [...people];
        let temp = newPeople[i1];
        newPeople[i1] = newPeople[i2];
        newPeople[i2] = temp;

        setPeople(newPeople);
    }

    return (
      <>
        <button onClick={onAddClick}>Add 1k Rows</button>
        <button onClick={onAdd10Click}>Add 10k Rows</button>
        <button onClick={onUpdateClick}>Update All Rows</button>
        <button onClick={onUpdate10Click}>Update Every 10 Rows</button>
        <button onClick={onClearClick}>Clear All Rows</button>
        <br/>
        <button onClick={swap2rows}>Swap 2 Rows</button>
        <p>Rows: {people.length}</p>
        {people.map(person =>
            <div key={person.id}>
                <Person person={person}></Person>
                <hr />
            </div>            
        )}
      </>
    );
  }
  
  export default PersonList;
  