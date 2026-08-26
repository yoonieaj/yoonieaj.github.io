import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import FunStuff from './FunStuff';
import HomePage from './HomePage';
import Navbar from './Navbar';

function App() {

  const location = useLocation();
  console.log("location", location);

  return (
    <div className="space-background">
        <Navbar />
        <div className="flex mx-20">
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/fun-stuff" element={<FunStuff />} />
            </Route>
          </Routes>
        </div>
    </div>
  )
}

export default App
