// It's a convention to use Pascal Case in .tsx file
function Message() {
  // The following code is JSX, which stands for JavaScript XML
  // JSX allows us to easily create dynamic content
  // We can use Babel to see how JSX code gets converted to JS codes
  const name = 'Frank';
  if (name)
    // We can write any JS expression inside the braces
    // An expression is a piece of code that produces or returns a value.
    return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

// To use this Message function, we have to export it
export default Message;