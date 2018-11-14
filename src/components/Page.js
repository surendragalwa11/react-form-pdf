import React from 'react';

const Page = ({children, id}) => (<div
  id={id} className="bg-white shadow-1 center pa4" 
  style={{width: "210mm", height:  "297mm" }}
>
  {children}
</div>); 

export default Page;