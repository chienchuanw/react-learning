
// It's a convention to use Pascal Case in .tsx file
function Message() {
  // The following code is JSX, which stands for JavaScript XML
  const name = 'Frank';
  if (name)
    return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

// To use this Message function, we have to export it
export default Message;