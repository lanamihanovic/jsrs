import './App.css';
// import { Route,Routes,BrowserRouter as Router } from 'react-router-dom';
import Naslovna from './Components/Naslovna';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Vijesti from './Components/Vijesti';
// import Vinyl from './Components/Vinyl';
// import CD from './Components/CD';
// import {Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Naslovna/>
      {/* <Vijesti/>
      <Vinyl/>
      <CD/> */}

      {/* <nav>
      <ul>
        <li><a href="/">Naslovna</a></li>
        <li><a href="/Vijesti">Vijesti</a></li>
        <li><a href="/Vinyl">Ploće</a></li>
        <li><a href="/CD">CD</a></li>

      </ul>
    </nav> */}
      {/* <Router>
        <Routes>
           {/* <Route path='/' element={Naslovna}></Route> 
          <Route path='/Header' element={Header}></Route>
          <Route path='/Footer' element={Footer}></Route>
          <Route path='/Vijesti' element={Vijesti}></Route>
          <Route path='/Vinyl' element={Vinyl}></Route>
          <Route path='/CD' element={CD}></Route> 

        </Routes>
      </Router> */}
      {/* <Link to={Naslovna}>Naslovna</Link>
      <Link to={Vijesti}>Vijesti</Link>
      <Link to={Vinyl}>Ploće</Link>
      <Link to={CD}>CD</Link> */}

    </div>
  );
}

export default App;
