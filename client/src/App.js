
import {BrowserRouter,Routes,Route} from "react-router-dom";
import  Signup from "./components/login";
function App() {
  return (
     
      <BrowserRouter>
       
      
        <Routes>
            <Route path="lo" element={<Signup/>} />
        </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
