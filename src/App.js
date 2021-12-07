import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Header from './userinterface/header';
import AddCategories from './administration/AddCategories'
import DisplayAllCategories from './administration/DisplayAllCategories';
import Subcategory from "./administration/subcategory"
import DisplayallSubcategory from './administration/displayallSubcategory'
import { TRS } from './userinterface/TRS';
import { TRS_Intelligent_compund } from './userinterface/TRS_intelligent_compund';
import TRS_technology from './userinterface/TRS_technology'
import TRS_expertise from './userinterface/TRS_expertise'
import TRS_Register from './userinterface/TRS_Register'
import Benefits from './userinterface/benefits';
import Company from './userinterface/company';
import { Product_trs } from './userinterface/Product_trs';
import { Add_Products } from './administration/Add_Products';

function App(props) {
  return (
    <>
      <Router>

        <Route component={AddCategories} path="/addcategory" props={props.history} />
        <Route component={DisplayAllCategories} path="/displaycategory" props={props.history} />
        <Route component={DisplayallSubcategory} path="/displayallsubcategory" props={props.history} />
        <Route component={Subcategory} path="/addsubcategory" props={props.history} />
        <Route component={TRS} path="/home" props={props.history} />
        <Route component={TRS_Intelligent_compund} path="/intelligent-compounding" props={props.history} />
        <Route component={TRS_technology} path="/technology" props={props.history} />
        <Route component={TRS_expertise} path="/our-expertise" props={props.history} />
        <Route component={TRS_Register} path="/trs-register" props={props.history} />
        <Route component={Benefits} path="/benefits" props={props.history} />
        <Route component={Company} path="/company" props={props.history} />
        <Route component={Product_trs} path="/product" props={props.history} />
        <Route component={Add_Products} path="/addproducts" props={props.history} />
        
      </Router>

    </>
  );
}

export default App;
