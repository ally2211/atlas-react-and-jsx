import Section from "./components/Section.jsx";
import Greeting from "./components/Greeting";
import Header from "./components/Header.jsx";
import HelpfulResource from "./components/HelpfulResource.jsx";
import AboutMe from "./components/AboutMe.jsx";
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
      <Section title="Helpful resources">
        <HelpfulResource
          label="React Official Docs: Learn React"
          link="https://react.dev/learn"
        />
        <HelpfulResource
          label="React Tutorial by freeCodeCamp (YouTube)"
          link="https://www.youtube.com/watch?v=bMknfKXIFA8"
        />
        <HelpfulResource
          label="React Fundamentals on Scrimba"
          link="https://scrimba.com/learn/learnreact"
        />
      </Section>
    </div>
    <AboutMe />
    </div>

  );
}
export default App;



