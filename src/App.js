import logo from './logo.svg';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Pages/Navbar';
import Home from './Components/Pages/Home';
import University from './Components/Pages/University';
import Service from './Components/Pages/Service';
import Country from './Components/Pages/Country';
import Testimonial from './Components/Pages/Testimonial';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <University/>
     <Service/>
     <Country/>
     <Testimonial/>
     <Footer/>
    </div>
  );
}

export default App;
