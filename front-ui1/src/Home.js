import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="Home">
      <h1>Hello home</h1>
      <JsonForm />
    </div>
  );
}

export default Home;

class JsonForm extends React.Component{
  constructor(props) {
    super (props);
  }
   render() {
     return(
      <div>
        <form>
          <input type ='text'></input>
          <input type = "submit"></input>
        </form>
      </div>

     );

   }
}