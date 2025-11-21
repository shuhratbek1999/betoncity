import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Calculator from "./components/Calculator";
import Experience from "./components/experience";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Experience />
      </main>
    </>
  );
}

export default App;
