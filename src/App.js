import Home from './pages/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SearchPage from './SearchPage';

function App() {
  return (

    <div className="app">

      <Router>
        <Routes>
          <Route path="/search" element={<SearchPage/>}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
