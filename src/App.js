import {useState} from 'react';
import './App.css';

function App() {
  const [val, setVal] = useState("");
  const [list, setlist] = useState(['Orange', 'Apple', 'Banana', 'Mango', 'Cherry'])
  const [list1, setList1] = useState(list)
  const filterEvent=(e)=>{
    console.log(e.target.value)
    setVal(e.target.value)
    if(e.target.value){
        let result = list1.filter((item)=> item.toLowerCase().includes(e.target.value.toLowerCase()))
        console.log("result", result)
        setlist(result)
    } 
    if(e.target.value === ""){
      setlist(list1)
    }
    // else{
    //   setlist(list1)
    // }
  }
  return (
    <div className="App">
        <input value={val} onChange={(e)=>filterEvent(e)}/>
        {
          list.map((item)=>{
            return(
              <div>{item}</div>
            )
          })
        }
    </div>
  );
}

export default App;
