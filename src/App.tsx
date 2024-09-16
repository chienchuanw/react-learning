import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import DismissingAlert from './components/DismissingAlert';
import { useState } from 'react';

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
      <Button color='secondary' onClick={() => console.log("clicked")}>
        This is a button!
      </Button>
    </div>
  )
}

function AppButtonAlert() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <DismissingAlert onClose={() => setAlertVisibility(false)}>
        My Alert
      </DismissingAlert> }
      <Button onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  )
}

export default AppButtonAlert;