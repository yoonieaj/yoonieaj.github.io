import { Route, Routes, useLocation } from 'react-router-dom';
import About from './About';
import Experience from './Experience';
import FunStuff from './FunStuff';
import HomePage from './HomePage';
import Navbar from './Navbar';

const PATH_TO_BACKGROUND_CLASS: Record<string, string> = {
  '/': 'space-background',
  '/about': 'jelly-background',
  '/experience': 'space-background',
  '/fun-stuff': 'space-background',
};

function App() {

  const location = useLocation(); // a surprise tool that will help us later
  console.log("location", location.pathname);

  const backgroundClass = PATH_TO_BACKGROUND_CLASS[location.pathname] || 'space-background';

  return (
    <div className={backgroundClass}>
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
