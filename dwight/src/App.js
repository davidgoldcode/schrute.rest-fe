import { useEffect, useState } from "react";
import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const faq = [
  {
    q: "Can I use this in my project?",
    a: "Yes! Dwight's quotes are for the world to enjoy, do whatever",
  },
  {
    q: "Are there call limits?",
    a: "Not currently, but please be mindful of this",
  },
  {
    q: "Is it open source?",
    a: "Yes - contributions are greatly appreciated / encouraged",
    extra: {
      fe: "https://github.com/davidgoldcode/schrute.rest-fe",
      be: "https://github.com/davidgoldcode/schrute.rest",
    },
  },
];

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setQuote(res.data.quote);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col h-full w-9/12 mx-auto my-1.5 justify-between">
      <span className="fixed top-60 -left-40 transform -rotate-90">
        made by david gold{" "}
        <a href="https://github.com/davidgoldcode" className="text-purple-700">
          @davidgoldcode
        </a>{" "}
        🤙
      </span>
      <header className="flex flex-col">
        <h1 className="border-b-4 border-black text-left">Schrute.rest</h1>
        <h3 className="text-left">
          A free REST API to generate the best quotes that Scranton has ever
          seen
        </h3>
      </header>
      <main className="whitespace-pre-line m-6">
        <div className="border-4 border-black rounded-lg">
          <h3 className="border-b-4 border-black text-left uppercase">API</h3>
          <div className="flex justify-around">
            <span className="uppercase">
              GET &emsp;
              <a href="schrute.api" className="text-purple-700 lowercase">
                schrute.api
              </a>
            </span>
            <span>Tweet 🐦</span>
            <span>Refresh 🔁</span>
          </div>
          <div>
            <h3 className="text-left text-xl sm:ml-20	sm:text-3xl">{"{"}</h3>
            <h3 className="text-base sm:text-2xl p-4 mx-8">
              "quote" : "{quote}"
            </h3>
            <h3 className="text-left text-xl sm:ml-20 sm:text-3xl">{"}"}</h3>
          </div>
        </div>
      </main>
      <section className="border-4 border-black rounded-lg m-6 text-left">
        <h3 className="border-b-4 border-black uppercase">FAQ</h3>
        {faq.map((item) => (
          <>
            <h4 className="p-1 ml-2">‣{item.q}</h4>
            <p className="p-1 italic ml-4">&emsp;{item.a}</p>
          </>
        ))}
      </section>
    </div>
  );
}

export default App;
