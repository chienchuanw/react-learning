import Message from './Message';
// By default, if we are referencing a folder instead of a file, it will look for a file called "index"
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import DismissingAlert from './components/DismissingAlert';
import { useState } from 'react';
import './App.css'

function AppMessage() {
  // We should always close our React component like the comment below. Otherwise, it will get a compilation error.
  // return <div><Message></Message></div>

  // We can also use self-closing syntax
  return <div><Message /></div>;
}

// Import icon from "react-icons"

import { BsArrowDownLeftCircle } from "react-icons/bs";

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
  const handleSelectItem = (item: string) => {
    console.log((item))
  }

  return (
    <>
      {/* Adding react-icon and configure its styles */}
      <BsArrowDownLeftCircle color='red' size='40' />
      <div><ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/></div>
      <Button onClick={() => {}}>
        My button
      </Button>
    </>
  )
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

import LikeButton from './components/LikeButton';


function AppLikeButton () {
  return (
    <LikeButton />
  )
}


export default AppLikeButton;