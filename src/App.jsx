import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import UserProfile from "./components/UserProfile";

function Greeting() {
  return "Heyho what's up?";
}

function App() {
  // [getter , setter] untuk penggunaan useState
  const [count, setCount] = useState(0);
  const [isOn, SetIsOn] = useState(false);
  const [name, setName] = useState("Doni");

  return (
    <>
      <h1>Data SDM</h1>
      <UserProfile name="Rijal Akbar" job_title="Fullstack Programmer" />
      <UserProfile name="Farji" job_title="Fullstack Bletek" />
      <h1>this is getter value: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Klik +</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Klik -</button>

      <br />
      <br />
      <h1>{isOn ? "Light On" : "Light Off"} </h1>
      <button onClick={() => SetIsOn(!isOn)}>Toggle</button>

      <br />
      <br />
      <h1>My name is : {name}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
}

export default App;
