import { Fragment } from "react/jsx-runtime";


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



export default ListGroup2;