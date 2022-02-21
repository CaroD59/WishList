import { Routes, Route } from 'react-router-dom';
import Wishlist from './components/WishList';
import Wish from './components/Wish';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className='App'>
      <main>
        <ToastContainer
          position='top-left'
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          theme='dark'
        />
        <Routes>
          <Route exact path='/wishlist' element={<Wishlist />} />
          <Route path='/wishlist/:idlist' element={<Wish />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
