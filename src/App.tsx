import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';

function AppMessage() {
  // We should always close our React component like the comment below. Otherwise, it will get a compilation error.
  // return <div><Message></Message></div>

  // We can also use self-closing syntax
  return <div><Message /></div>;
}

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log((item))
  }

  return <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
}

function AppAlert() {
  return (
    <div>
      <Alert>
        Hello <strong>World</strong>
      </Alert>
    </div>
  )
}

function AppButton() {
  return (
    <div>
      <Button>
        This is a button!
      </Button>
    </div>
  )
}

export default AppButton;