import React,{ useState,useEffect }  from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="http://127.0.0.1:8085/addUser" method="GET">
          <h1>随便输入：</h1>
          <input type="text" name="myinput"/>
          <input type="submit" value="Submit"/>
      </form>
      <Example/>
    </div>
  );
}
function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  console.log(0)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
function Example2() {
  // 声明一个叫 "count" 的 state 变量
  const [counts, setCounts] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${counts} times`;
    console.log("111")
  });
  console.log(2)
  return (
    <div>
      <p>You clicked {counts} times</p>
      <button onClick={() => setCounts(counts + 1)}>
        Click me
      </button>
    </div>
  );
}
export default App;
