import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Button,TextField,Avatar } from '@material-ui/core'
import Swal from 'sweetalert2'
import { useState } from 'react';
import { postDataAndImage } from "../FetchNodeService";
import { isEmpty,checkError } from "../Checks";
import Paper from '@material-ui/core/Paper';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding:20
    },
    subdiv: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '600px',
      height: 'auto',
      marginTop:10,
      background:'#ecf0f1',
      padding:15,
      borderRadius:5,
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    input: {
      display: 'none',
    },
  }));
export const Add_Products = () => {
    const classes = useStyles();
    const [Productname, setProductname] = useState('')
    const [Description, setDescription] = useState('')
    const [Picture, setPicture] = useState({filename:"",bytes:""})
    const handleSubmit = async () =>{
        var err = false;
        if(isEmpty(Productname)){
          err = true;
          checkError("Product Name should not be empty");
          
        }
        if(isEmpty(Description)){
          err = true;
          checkError("Please Add Description..."); 
        }
        if(!err){
          var formData = new FormData();
          formData.append("productname",Productname)
          formData.append("discription",Description)
          formData.append("picture",Picture.bytes)
          var config = { headers: { "content-type": "multipart/form-data" } };
            var result = await postDataAndImage("product/insertproduct", formData, config);
            if (result) {
              Swal.fire({
                title: 'GlassKart.com',
                text: 'submitted ',
                imageUrl: '/glasskart.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            }
            else {
              Swal.fire({
                title: 'GlassKart.com',
                text: 'Error ',
                imageUrl: '/glasskart.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            }
          }
        }
         
      
    Add_Products.modules = {
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, 
           {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }
    Add_Products.formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]

      
      const handlePicture = (event)=>{
        setPicture({
          filename:URL.createObjectURL(event.target.files[0]),
          bytes:event.target.files[0]
        })
      }
    return (
        <div className={classes.root}>
        <div className={classes.subdiv}>
        <Paper elevation={5} style={{padding:15}}  >

       <Grid container xs={12} spacing={1} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
         <Grid item xs={12}><div
              style={{
                width: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 1,
              }}
            >
              <div
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  padding: 1,
                }}
              >
                <span>
                  <img alt="" src="/glasskart.png" width="40" />
                </span>{" "}
                <span>Add Products</span>
              </div>
            </div>
            </Grid>
         
        <Grid item xs={12}>
          <TextField variant="outlined" fullWidth label="Product Name"
          onChange={(event)=>setProductname(event.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
             
            <ReactQuill
            value={Description} 
            modules={Add_Products.modules}
            formats={Add_Products.formats}
            onChange={(txt)=>setDescription(txt)} />
             </Grid>

        <Grid item xs={6} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event)=>handlePicture(event)}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" style={{background:"#22a6b3"}} component="span">
          Upload
        </Button>
      </label>
        </Grid>

        <Grid item xs={6} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <Avatar alt="Remy Sharp" src={Picture.filename} variant="rounded" className={classes.large} />
        </Grid>

         <Grid item md={12}>
      <Button variant="contained" color="primary" style={{background:"#22a6b3" }} fullWidth onClick={()=>handleSubmit()} >Submit category</Button>
      </Grid>
       </Grid>
       </Paper>
        </div>
      </div>
   
    )
}
