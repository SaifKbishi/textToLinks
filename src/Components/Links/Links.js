import React,{useContext} from 'react';
import {linksContext} from '../../linksContext'

const Links = () =>{
  const {links, setLinks} = useContext(linksContext);

  return (
    <div>
      hello links
      {links}
    </div>
  );
  
}

export default Links