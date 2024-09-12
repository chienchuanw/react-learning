import { Fragment } from "react/jsx-runtime";

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

  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map(item => <li key={item}>{item}</li>)}
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


export default ListGroupWithTernaryImprove;