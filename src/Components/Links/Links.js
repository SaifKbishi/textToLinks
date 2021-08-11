import React,{useContext} from 'react';
import {linksContext} from '../../linksContext';
import Link from '@material-ui/core/Link';

const Links = () =>{
  const {clickableLinks, setClickableLinks} = useContext(linksContext);
  const renderLinks = clickableLinks.map((lnk)=>{
    return(
      <>
      <Link key={lnk.index} href={lnk} target="_blank" rel="noopener">{lnk}</Link><br/>
      </>
    );
  });

  return (
    <div >
      the links are below: <br/>
      <p id="allLinks">
      {renderLinks}  
      </p>
    </div>
  );
  
}

export default Links