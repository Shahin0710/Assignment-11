import { Route, Routes } from 'react-router-dom';
import AddReview from './components/AddReview';
import AllService from './components/AllService';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageSignup from './components/PageSignup';
import Review from './components/Review';
import SingleService from './components/SingleService';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<PageLogin />} /> 
          <Route path="/signup" element={<PageSignup />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/all_service" element={<AllService />} />
          <Route path="/single_service/:id" element={<SingleService />} />
          {/* ProtectedRoute */}
              <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} /> 
              <Route path="/add_review/:id" element={<ProtectedRoute><AddReview /></ProtectedRoute>} /> 
          {/* ProtectedRoute */} 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
