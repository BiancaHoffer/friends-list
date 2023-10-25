import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { Contact } from './pages/Contact/index';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact/:id' element={<Contact />} />
    </Routes>
  );
}