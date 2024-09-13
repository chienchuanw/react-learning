import Message from './Message'
import ListGroup from './components/ListGroup';

// function App() {
//   // We should always close our React component like the comment below. Otherwise, it will get a compilation error.
//   // return <div><Message></Message></div>

//   // We can also use self-closing syntax
//   return <div><Message /></div>;
// }

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

  return <div><ListGroup items={items} heading='Cities'/></div>
}

export default App;