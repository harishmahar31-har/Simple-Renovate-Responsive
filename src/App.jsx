import Navbar1 from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Sectionfooter from './components/Sectionfooter/Sectionfooter';

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Sectionfooter />
    </div>
  );
}

export default App;
