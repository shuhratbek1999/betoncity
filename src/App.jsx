import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Calculator from "./components/Calculator";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
      </main>
    </>
  );
}

export default App;
