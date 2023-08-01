import logo from './logo.svg';
import './App.css';
import Home from './Home';
import StudentsView from './component/student/StudentsView';
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from './component/student/AddStudent';
import EditStudent from './component/student/EditStudent';

function App() {
  return (
    <main className="container mt-5">
     <Router>
     <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/view-students" element={<StudentsView/>}/>
        <Route exact path="/add-student" element={<AddStudent/>}/>
        <Route exact path="/edit-student/:id" element={<EditStudent/>}/>
      </Routes>
     </Router>
    </main>
  );
}

export default App;
