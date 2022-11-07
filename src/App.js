import { Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageSignup from './components/PageSignup';
import Review from './components/Review';
import Service from './components/Service';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<PageLogin />} /> 
          <Route path="/signup" element={<PageSignup />} /> 
          <Route path="/service" element={<Service />} /> 
          <Route path="/review" element={<Review />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
