import React from "react"
import './App.css';
import Main from "./components/Main";

function App() {

  const [data, setData] = React.useState([])

  React.useEffect( () => {
    fetch("http://universities.hipolabs.com/search?country=United+States")
    .then(res => res.json()).then(data => setData(data))
    .catch(error => console.error("Error  fetching data",error))
  }
    ,[]
  )
  

  return (
    <div className="App">
      
      <Main universities = {data}/>
    </div>
  );
}

export default App;
