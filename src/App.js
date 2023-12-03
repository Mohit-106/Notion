import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Component/navbar';
import Body from './Component/body';
import Buttons from './Component/body2';
import Body3 from './Component/body3';
import Footer from './Component/footer';
function App() {
  return (
    <Router>
      <Navbar/>
      <Body/>
      <Buttons/>
      <Body3/>
      <Footer/>
    </Router>
  );
}

export default App;
