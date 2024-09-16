import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";
import { useState } from "react";
import './ListGroup.css'

function ListGroup() {
  const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* If we want to write JS expression in JSX, we have to add curly braces */}
        {/* Each child in a list should have a "key" property and it needs to be unique */}
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

// Using an extra element like <div> to wrap everything, but this will adds an extra element in DOM which is unnecessary.
function ListGroup1() {
  return (
    // Since "class" is a reserved keyword in JS and TS, we have to use className instead of class for our CSS style.
    <div>
      <h1>List 1</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
}

// Using Fragment to wrap everything. This will not add an extra element DOM compared to the solution above.
// Remember to import Fragment first before using it.
function ListGroup2() {
  return (
    <Fragment>
      <h1>List 2</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}

// Using empty angle brackets to wrap everything.
// This doesn't need to import anything compared to Fragment
function ListGroup3() {
  return (
    <>
      <h1>List 3</h1>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}

// # Conditional Rendering
// Add if statement in the component
function ListGroupWithIf() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    )

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

// Use ternary operator
function ListGroupWithTernary() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

// Improve ternary operator
function ListGroupWithTernaryImprove() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];



  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {/* Use onClick to listen to click event */}
        {items.map((item, index) => 
        <li 
          className="list-group-item" 
          key={item} onClick={() => console.log(item, index)}
        >
          {item}
        </li>)}
      </ul>
    </>
  )
}

function ListGroupWithOnClick() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  
  // The following function is call "Event Handler".
  // We have to specify the type of "event" parameter. Otherwise, we will get a warning.
  const handleClick = (event: MouseEvent) => console.log(event)


  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => 

        // Bootstrap can use "active" to highlight the element.
        <li 
          className="list-group-item active" 
          // Whenever user click on this event, handleClick function should be called. And it will be done later in runtime.
          // Noted that instead of calling this function, we are simply just referencing it.
          key={item} 
          onClick={handleClick}
        >
          {item}
        </li>)}
      </ul>
    </>
  )
}


// Extract the logic in a constant variable
function ListGroupWithConstant() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  items = [];

  const message = items.length === 0 ? <p>No item found</p> : null

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

// Extract the logic in a function
function ListGroupWithFunction() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  items = [];

  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null
  }
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </>
  )
}

function ListGroupWithActive() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  // Set the initial selectedIndex
  let selectedIndex = 0;

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => 

        <li 
          className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'
          } 
          key={item} 
          // This onClick will not work, because the variable in a component will not be updated in React. It will only be updated locally.
          // In this case, though selectedIndex will be updated with new index, React would not notice it.
          // Therefore, we have to use a hook call useState
          onClick={() => { selectedIndex = index }}
        >
          {item}
        </li>)}
      </ul>
    </>
  )
}

// By convention, we name interface to props.
// We can also prefix with the name of the component.
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// { items, heading } are destructed props.
// If we use "props" instead of destructing it, we have to write props.items and prop.heading underneath, which will be really repetitive and redundant.
function ListGroupWithState({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectIndex] = useState(-1)

  // Notice that "props" are immutable.
  // So assigning a value to a prop inside a component will not change anything.
  // Even if you can change props value, you should not do so.
  // heading = "Countries";

  return (
    <>
      <h1>{ heading }</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => 

        <li 
          className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'
          } 
          key={item} 
          onClick={() => { 
            setSelectIndex(index); 
            onSelectItem(item)
          }}
        >
          {item}
        </li>)}
      </ul>
    </>    
  )
}



export default ListGroupWithState;