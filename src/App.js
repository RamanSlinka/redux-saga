import {useSelector} from "react-redux";


const  App = ()=> {

    const store = useSelector(state => state)
    console.log(store)
  return (
    <div className="App">
      Hello world!
    </div>
  );
}

export default App;
