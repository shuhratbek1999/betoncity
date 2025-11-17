import { useState } from "react";
import Form from "./components/Form.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Lorem ipsum dolor sit amet.</div>
      <Form />
    </>
  );
}

export default App;
