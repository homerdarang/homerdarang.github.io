import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navigation/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route exact path='/' element={<Home />} />
          <Route path='/hire-me' element={<Contact />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App
