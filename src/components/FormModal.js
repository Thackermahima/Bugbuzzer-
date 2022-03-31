import React, {useState} from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import {  Button} from '@mui/material'
import { Field } from 'formik';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material'

const FormModal = ({fieldName}) => {
  const formStyle = { height: '60vh', marginTop:'200px'}
  let tagInput;
  const [tags, setTags] = React.useState([
    'Tags',
    'Input'
  ]);
  
  const removeTag = (i) => {
    const newTags = [ ...tags ];
    newTags.splice(i, 1);

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags);
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === 'Enter' && val) {
      if (tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      tagInput.value = null;
    } else if (e.key === 'Backspace' && !val) {
      removeTag(tags.length - 1);
    }
  };

  return(
  <div style={formStyle}>
      <Formik
        initialValues={{
          Question: "", 
        }}
      
         validationSchema={Yup.object({
         
          Question: Yup.string()
            .max(70, "Must be 20 characters or less")
            .required("Required"),
    
                   })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
 <Form>
 <TextField fullWidth style={{ marginTop:'100px'}} id="outlined-basic" label="Enter your question" variant="outlined" />

         
            </Form>
        </Formik>
        <div className="input-tag">
     <ul className="input-tag__tags">
                { tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button type="button" onClick={() => { removeTag(i); }}>+</button>
          </li>
        ))}
        <li className="input-tag__tags__input"><input type="text" onKeyDown={inputKeyDown} ref={c => { tagInput = c; }} /></li>
      </ul>
    </div>
    <Grid align='center'>

       <Button variant="contained" size='small' type="submit" style={{backgroundColor:"#D82148",textTransform:'capitalize',border:'2px solid #D82148', marginRight:'18px', fontWeight:'bold'}} sx={{borderRadius:2, mt:5}}>Submit</Button>
       </Grid>

    </div>
  );
};

export default FormModal