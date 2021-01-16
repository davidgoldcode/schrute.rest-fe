import { useEffect, useState } from "react";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;
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
    <div className="flex flex-col h-full w-9/12 mx-auto my-8 justify-between">
      <header className="flex flex-col">
        <h1 className="border-b-4 border-black text-left">Schrute.rest</h1>
        <h3 className="text-left">
          A free REST API to generate the best quotes that Scranton has ever
          seen
        </h3>
      </header>
      <main className="whitespace-pre-line m-12">
        <div className="border-4 border-black rounded-lg">
          <div>
            <h3 className="border-b-4 border-black text-left">API</h3>
            <span>
              GET <a href=""></a>
            </span>
            <span>Tweet</span>
            <span>Refresh</span>
          </div>
          <h3 className="text-left">{"{"}</h3>
          <h3 className="">
            {'"quote"'} : {null}
          </h3>
          <h3 className="text-left">{"}"}</h3>
        </div>
      </main>
      <section className="border-4 border-black rounded-lg m-12">
        <h3 className="border-b-4 border-black text-left">FAQ</h3>
        {faq.map((item) => (
          <>
            <h4 className="p-1">{item.q}</h4>
            <p className="p-1">{item.a}</p>
          </>
        ))}
      </section>
    </div>
  );
}

export default App;
