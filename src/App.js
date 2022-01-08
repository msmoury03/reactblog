import "./App.css";
import Header from "./componenets/Header";
import { NewsProvide } from "./componenets/NewsContext";
import Home from "./componenets/Home";
import Categorybi from "./componenets/Categorybi";
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Detailsn from "./componenets/Detailsn";


function App() {
  return (
    <NewsProvide>
      <Router>
      <div className="container">
        <Header />

        
        
        

        
          <Routes>
            
            <Route path='' element={<Home/>}/>
            <Route path='/category' element={<Categorybi/>}>
              <Route path=':ctname/' element={<Categorybi/>}>
                {/* <Route path=':id'element={<Detailsn/>}/> */}
              </Route>
              
            </Route>

            <Route path='news/:cate'element={<Detailsn/>}>
              <Route path=':id' element={<Detailsn/>} />
            </Route>


          </Routes>
        {/* <Detailsn/> */}

        

        



      </div>
      </Router>
    </NewsProvide>
  );
}

export default App;
