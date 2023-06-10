import './App.css';
import Naslovna from './Components/Naslovna';
 import Vijesti from './Components/Vijesti';
 import Vinyl from './Components/Vinyl';
 import CD from './Components/CD';
import Doli from './Components/Doli';
function App() {
  return (
    <div className="App">
      <Naslovna/>
      <Vijesti/>
      <Vinyl/>
      <CD/> 
      <Doli/>
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
