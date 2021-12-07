import React, { useState, useEffect } from 'react'
import { Grid, GridListTileBar, makeStyles } from '@material-ui/core'
import { TextField, InputLabel, MenuItem, Button, Avatar } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { getData, postDataAndImage, postData } from '../FetchNodeService';
import swal from 'sweetalert';
import { isEmpty, errorMessage,checkError } from "../Checks";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Paper from '@material-ui/core/Paper';
import Header from '../userinterface/header';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',


  },
  subdiv: {
    width: 800,
    height: "auto",

    padding: 20,

    borderRadius: 5



  },
  input: {
    display: 'none',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),

  },



  heading: {
    fontWeight: 6,
    fontSize: 20,
    color: "#009688",
    display: 'flex',
    flexDirection: 'center',
    justifyContent: "center"
  }

}))



export default function Subcategory(props) {
  const classes = useStyle();
  const [SubCategoryName, SetSubCategoryName] = useState('')
  const [category, setCategory] = useState([])
  const [picture, setPicture] = useState({ filename: "", bytes: "" })
  const [categoryname, setcategoryname] = useState('')
  // const [categoryid,setcategoryid]=useState('')

  const handleSubmit = async () => {
    var err = false;
    if (isEmpty(categoryname)) {
      err = true;
      checkError("category Name should not be empty");

    }
    if (isEmpty(picture.filename)) {
      err = true;
      checkError("Please Add category Picture...");
    }
    if (!err) {
      var formData = new FormData();
      formData.append("categoryid", categoryname)
      formData.append("subcategoryname", SubCategoryName)
      formData.append("picture", picture.bytes)
      var config = { headers: { "content-type": "multipart/form-data" } };
      var result = await postDataAndImage("subcategory/insertsubcategories", formData, config);
      if (result) {
        swal({
          title: "Good job!",
          text: "Successfully Submited",
          icon: "success",
          button: "OK",
        });
      }
      else {
        swal({
          title: "!OOPS",
          text: "Something Wrong",
          icon: "error",
          button: "OK",
        });
      }
    }
  }



  useEffect(function () {
    fetchallcategories()
  }, [])

  const fetchallcategories = async () => {
    var list = await getData('categories/fetchallcategories')
    setCategory(list.data)
  }

  const fillcategories = () => {
    return category.map((item) => {
      return <MenuItem value={item.categoryid}>{item.categoriesname}</MenuItem>
    })
  }

  const handlePicture = (event) => {
    setPicture({
      filename: URL.createObjectURL(event.target.files[0]),
      bytes: event.target.files[0],
    })

  }
  const Subcategory = () => {
    return (

      <div className={classes.root} style={{ marginTop: 20 }}>
        <div className={classes.subdiv}>
          <Paper elevation={5} style={{ padding: 15 }}  >
            <div style={{
              fontWeight: 'bold',
              fontSize: 25,
              // color: "#90A4AE",
              display: 'flex',
              flexDirection: 'center',
              justifyContent: 'center',


              padding: 5
            }}>
              <span><img src="/logo.png" width='70' alt="" /></span> <span  >Sub Category </span>  </div><br />
            <Grid container spacing={2}>

              <Grid item xs={6}>

                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                  <InputLabel id="demo-simple-select-outlined-label">Categroy Name</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"

                    onChange={(event) => setcategoryname(event.target.value)}
                    label="Category Name"
                  >

                    {fillcategories()}

                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <TextField variant="outlined" label="Sub Category Name" onChange={(event) => SetSubCategoryName(event.target.value)} fullWidth />
              </Grid>




              <Grid item xs={6}>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="contained-button-file"
                  multiple
                  type="file"
                  onChange={(event) => handlePicture(event)}
                />
                <label htmlFor="contained-button-file">
                  <Button style={{ width: 250, height: 50 }} variant="contained" color="primary" component="span" >
                    Upload picture
                  </Button>
                </label>


              </Grid>

              <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={6}>
                <div style={{ padding: 5 }}>
                  <Avatar variant="rounded"  alt="Remy Sharp"
                    src={picture.filename} className={classes.large}
                  />
                </div>

              </Grid>


              <Grid item sm={12} style={{ padding: 10 }}>
                <div style={{ justifyContent: 'center', display: 'flex' }}><Button style={{ width: 250 }} onClick={(event) => handleSubmit()} variant="contained" color="primary" >ADD</Button></div>

              </Grid>
            </Grid>
            {/* <ToastContainer /> */}
          </Paper>
        </div>
      </div>

    )
  }

  return (




    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
      <div style={{ width: 1000, marginTop: 50, padding: 10 }}>
        {Subcategory()}
      </div>
    </div>
  )

}
