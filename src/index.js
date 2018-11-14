import React from 'react';
import { render } from 'react-dom';
//import Form from './components/SinglePage';
import PrintButton from "./components/PrintButton";
import SinglePage from './components/PdfText';

const App = () => (
 <div className="bg-black-80 w-100 pv5">

   <PrintButton id={"singlePage"} label={"Print Form"} /> 
  <SinglePage id={"singlePage"}/> 
  
 
 </div>
);

render(<App />, document.getElementById('root'));
