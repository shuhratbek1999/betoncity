import { useState } from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
