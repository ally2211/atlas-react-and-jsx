import Section from "./components/Section.jsx";
import Greeting from "./components/Greeting";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div>
    <div>
      <Header />
    </div>
     <div id="section">
      <Section title="What is react?">
        <p>
          React is a JavaScript library for building user interfaces. It allows
          developers to create reusable UI components and manage dynamic data
          efficiently using a virtual DOM.
        </p>
      </Section>
    </div>
    </div>

  );
}
export default App;



