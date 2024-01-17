import React from 'react'

const Hello = () => {
  let currTime = new Date().getHours();
  let greeting = "";
  const cssStyle = {};

  if (currTime >= 1 && currTime < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  }

  else if (currTime >= 12 && currTime < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  }
  else {
    greeting = "Good Night";
    cssStyle.color = "brown";
  }

  console.log(greeting);
  return (
    <div className='css-greetings' >
      <h1>Hello Sir! <span style={cssStyle} > {greeting} </span> </h1>
    </div>
  )
}

export default Hello
