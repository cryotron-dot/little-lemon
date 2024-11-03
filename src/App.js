import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './sections/Header';
import Footer from './sections/Footer';
function App() {
  console.log(Header);
  console.log(Footer);

  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;