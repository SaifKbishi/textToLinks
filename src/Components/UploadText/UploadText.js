import React, {useState, useContext} from 'react';
import { TextField } from '@material-ui/core';
import {linksContext} from '../../linksContext'

const UploadText = ()=>{
  const [localLinks, setLocalLinks] = useState('');
  const {links, setLinks, clickableLinks, setClickableLinks} = useContext(linksContext);  
  const linebreak = '\n';
  const linksArray = [];

  const handleSubmit =(e)=>{
    e.preventDefault();
    setLinks(localLinks);  
    stringToArray(links);
  }

  const stringToArray= async (linksstring)=>{
    let stringsArray = linksstring.split(linebreak);
    
    await stringsArray.forEach(element => {
      if(element.length > 0){
        linksArray.push(element);
      }      
    });
    console.log('25',linksArray)
    setClickableLinks(linksArray);    
  }

  return (
    <>
    {/* <p>{localLinks}</p> */}
    <form className='textForm' noValidate autoComplete="off">
      <div>
        <TextField 
          id='textDropZone'
          lable='Paste Text here'
          multiline
          minRows={10}
          placeholder="Text Here"
          maxRows={10}
          value={localLinks}
          variant="outlined"
          fullWidth
          onChange = {(e)=>{setLocalLinks(e.target.value)}}
          />
          <br/>
      </div>
      <button onClick={handleSubmit }>Convert text</button>
    </form>
    </>
  );

} 
export default UploadText;