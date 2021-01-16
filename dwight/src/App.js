import { useEffect, useState } from "react";
import axios from "axios";

const faq = [
  {
    q: "Can I use this in my project?",
    a: "Yes! Do whatever you'd like with this",
  },
  {
    q: "Can I use this in my project?",
    a: "Yes! Do whatever you'd like with this",
  },
  {
    q: "Can I use this in my project?",
    a: "Yes! Do whatever you'd like with this",
  },
];

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get("");
  }, []);

  return (
    <>
      <header>
        <h1>Schrute.rest</h1>
        <h3>
          A free REST API to generate the best quotes that Scranton has ever
          seen
        </h3>
      </header>
      <main>
        <div>
          <div>
            <h3>API</h3>
            <span>
              GET <a href=""></a>
            </span>
            <span>Tweet</span>
            <span>Refresh</span>
          </div>
          <h3>ttextetesljalsdjfl;kasd</h3>
        </div>
      </main>
      <section>
        <h3>FAQ</h3>
        {faq.map((item) => (
          <>
            <h4>{item.q}</h4>
            <p>{item.a}</p>
          </>
        ))}
      </section>
    </>
  );
}

export default App;
