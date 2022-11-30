import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import TablePage from './Pages/TablePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route exact path='/homepage' element={< HomePage />}></Route>
            <Route exact path='/homepagetable' element={< TablePage />}></Route>
        </Routes>
      </Router>
     
    </div>
   
  );
}

export default App;
