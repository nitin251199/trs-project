import React,{useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid,Button,TextField,Avatar } from '@material-ui/core'
import Swal from 'sweetalert2'
import { getData, postDataAndImage } from "../FetchNodeService";
import { isEmpty,checkError } from "../Checks"
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    //   padding:20
    },
    subdiv: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 'auto',
      height: 'auto',
    //   marginTop:10,
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

  export default function AddHomepage(props) {
    const [description,setDescription] = useState("")
    const [sliderpic,setSliderpic] = useState({filename:"",bytes:""})
    

    const classes = useStyles();

    const handlePicture = (event)=>{
        setSliderpic({
          filename:URL.createObjectURL(event.target.files[0]),
          bytes:event.target.files[0]
        })
      }


      const handleSubmit = async () =>{
      var err = false;
      if(isEmpty(description)){
        err = true;
        checkError("description should not be empty");
        
      }
      if(isEmpty(sliderpic.filename)){
        err = true;
        checkError("Please Add Slider Picture..."); 
      }
      if(!err){
        var formData = new FormData();
        formData.append("description",description)
        formData.append("sliderpic",sliderpic.bytes)
        var config = { headers: { "content-type": "multipart/form-data" } };
          var result = await postDataAndImage("mainpage/insertmainslider", formData, config);
          if (result) {
            Swal.fire({
              title: 'psquare.com',
              text: 'submitted ',
              imageUrl: '/logo.png',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Custom image',
            })
          }
          else {
            Swal.fire({
              title: 'psquare.com',
              text: 'Error ',
              imageUrl: '/logo.png',
              imageWidth: 400,
              imageHeight: 200,
              imageAlt: 'Custom image',
            })
          }
        }
      }
       
    
      
      return(
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
                  <img alt="" src="/logo.png" width="40" />
                </span>{" "}
                <span>Add Slider Pictures</span>
              </div>
            </div>
            </Grid>
         
        <Grid item xs={12}>
          <TextField variant="outlined" fullWidth label="Description"
          onChange={(event)=>setDescription(event.target.value)}
          />
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
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
        </Grid>

        <Grid item xs={6} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        <Avatar alt="slider pic" src={sliderpic.filename} variant="rounded" className={classes.large} />
        </Grid>

         <Grid item md={12}>
      <Button variant="contained" color="primary" fullWidth onClick={()=>handleSubmit()} >Submit Slider</Button>
      </Grid>
       </Grid>
       </Paper>
        </div>
      </div>
      );
 
  }