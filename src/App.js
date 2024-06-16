import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './NavbarComponent';
import { HomePage } from './HomePage';
import { FormPage } from './FormPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/survey" element={<HomePage/>} />
        <Route path="/survey/form" element={<FormPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
