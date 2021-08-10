import React, {useState, useContext} from 'react';
import { TextField } from '@material-ui/core';
import {linksContext} from '../../linksContext'

const UploadText = ()=>{
  const [localLinks, setLocalLinks] = useState('');
  const {links, setLinks} = useContext(linksContext);

  const handleSubmit =(e)=>{
    e.preventDefault();
    setLinks(localLinks);
  }

  return (
    <>
    <p>{localLinks}</p>
    <form className='textForm' noValidate autoComplete="off">
      <div>
        <TextField 
          id='textDropZone'
          lable='Paste Text here'
          multiline
          minRows={10}
          placeholder="Text Here"
          maxRows={25}
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