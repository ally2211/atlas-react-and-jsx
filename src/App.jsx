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
      <Section title="Benefits of react">
      <ul>
        <li>Reusable components for efficient development</li>
        <li>Virtual DOM improves performance</li>
        <li>Strong community and ecosystem</li>
        <li>Seamless integration with other libraries</li>
        <li>Great for building dynamic single-page applications (SPAs)</li>
      </ul>
      </Section>
    </div>
    </div>

  );
}
export default App;



