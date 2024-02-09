
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Bios from './components/Bios';
import Navbar from './components/Navbar';
import Shows from './components/Shows';
import Samplers from './components/Samplers';
import Videos from './components/Videos';
import Layout from './components/Layout';
import Photos from './components/Photos';
import Music from './components/Music';



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="bios" element={<Bios />} />
              <Route path="shows" element={<Shows />} />
              <Route path="photos" element={<Photos />} />
              <Route path="music" element={<Music />} />
              <Route path="samplers" element={<Samplers />} />
              <Route path="videos" element={<Videos />} />
            </Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
