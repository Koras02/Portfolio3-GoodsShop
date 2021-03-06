import './App.css';
import {BrowserRouter,  Route} from 'react-router-dom'; 
import Main from './MainPage/Main';
// import Page1 from './api/Form/Layout/page/Page1';
import SubRouter from './api/SubRouter';
import Page1 from './api/Form/Layout/page/Page1';
import Bong from './api/Form/Layout/page/Bong';
 
 
 
function App() {
     return (
      <BrowserRouter>
       <Route exact path="/Portfolio3-GoodsShop"  component={Main} /> 
       <Route 
       path="/Portfolio3-GoodsShop/:id/Amond" component={SubRouter} 
       />
       <Route 
        path="/Portfolio3-GoodsShop/:id/Sese" component={Page1}
       />
       <Route
        path="/Portfolio3-GoodsShop/:id/Bong" component={Bong} 
        />
     </BrowserRouter>
     )
 }


 export default App;