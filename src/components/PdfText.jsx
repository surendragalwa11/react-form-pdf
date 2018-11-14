import React from 'react';
import Page from './Page';



const SinglePage = ({id}) => (<Page  id={id}>
  
  
   <label> Name: <input type="text" id='name' /> </label> <br /> <br />
     <label> Fathers name: <input type="text" id='fname' /> </label> <br /><br />
     <label> Occupation: <input type="text" id="occupation" /> </label>  <br /><br />
     <label> Organistaion: <input type="text" id="organisation" /> </label>  <br /><br />
     <label> Address: <input type="text"  id="address" /> </label> <br/> <br/>
     
     <button 
     id="create"
     onClick= { () => {
                       var textFile = null,
                       makeTextFile = function(text) 
                                      {
                                        var data = new Blob( [text] , { type: 'text/plain'} );
      
                                        // If we are replacing a previously generated file we need to
                                        // manually revoke the object URL to avoid memory leaks.
                                         if (textFile !== null) 
                                         {
                                           window.URL.revokeObjectURL(textFile);
                                         }
      
                                        textFile = window.URL.createObjectURL(data);
      
                                        return textFile;
                                      };
      
      
                      
                        const textbox = `Name:           ${document.getElementById('name').value} 
                                        Father's name :  ${document.getElementById('fname').value} 
                                        Occupation:      ${document.getElementById('occupation').value} 
                                        Organisation:    ${document.getElementById('organisation').value} 
                                        Address:         ${document.getElementById('address').value} `;  
                                        
      
        
                       var link = document.getElementById('downloadlink');
                       link.href = makeTextFile(textbox);
                       link.style.display = 'block';
        
      } 
    } 
    >Create file</button>
     
     <a download="RawData.txt" id="downloadlink" style={{display:"none"}} >Download</a>



    
    <div className="serif black-50 tc f6 mt2">
        Form to pdf converter| By Surendra Galwa 
        <a href="https://sigmainfo.net"> @Sigma Info</a>
    </div>
 
  
</Page>);

export default SinglePage;