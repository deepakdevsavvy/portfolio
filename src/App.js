
import './App.css';
import Header from './components/Header/Header.js'
import Projectcontainer from './components/projectcontainer/Projectcontainer.js';
import Skilcontainer from './components/skillcontainer/Skilcontainer.js';
import Topcontainer from './components/top_container/Topcontainer.js';
import Topcontent from './components/top_container/Topcontent/Topcontent.js';
import Experience from './components/experienceContainer/Experience.js';
import Contact from './components/contact/Contact.js';
function App() {
  return (
    <div className="App">
         <Header />
         <Topcontainer />
         <Skilcontainer />
         <Projectcontainer />
         <Experience />
         <Contact />
      </div>
  );
}

export default App;
