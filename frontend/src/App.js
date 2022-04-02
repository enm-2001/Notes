import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

// function App() {
//   const hello = 1;
//   return (
//     //not html, this is jsx(html type syntax) used by react that  extends ECMAScript so that html type script can coexist with react code
//     <div className="App">  
//       Hello World {hello}
//     </div>
//   );
// }

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
        <Route path="/login" element={<LoginScreen />}>
        </Route>
        <Route path="/register" element={<RegisterScreen />}>
        </Route>

        <Route path="/mynotes" element={<MyNotes />}>
        </Route>
      
      </Routes>
     
    </main>
      
    
    <Footer />

  </BrowserRouter>
);
  


export default App;
