
import { Routes, Router, Route, BrowserRouter, Outlet, Link } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Bios from './components/Bios';
import Navbar from './components/Navbar';
import Songlist from './components/Songlist';
import Shows from './components/Shows';
import Samplers from './components/Samplers';
import Videos from './components/Videos';
import Layout from './components/Layout';



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
              <Route path="songlist" element={<Songlist />} />
              <Route path="samplers" element={<Samplers />} />
              <Route path="videos" element={<Videos />} />
            </Route>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
