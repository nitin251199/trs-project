import React,{useEffect,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import { getData,ServerURL,postDataAndImage,postData } from "../FetchNodeService";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import { MenuItem } from "@material-ui/core";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid,Avatar,InputLabel } from '@material-ui/core'
import Swal from 'sweetalert2'
import Select from '@material-ui/core/Select';
import { isEmpty,checkError } from "../Checks";
import AddIcon from '@material-ui/icons/Add';
import Subcategory from "./subcategory"
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    subdiv: {
      width: 600,
      height: "auto",
      background: "#f1f2f6",
      marginTop: 5,
      padding: 15,
      borderRadius: 5,
    },
    droot: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    dsubdiv: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background:'#ecf0f1',
      padding:1,
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

  export default function DisplayallSubcategory(props)
  {
    const classes = useStyles();
    const [subcategoryList,setSubcategoryList] = useState([]);
    const [subcategoryId,setSubcategoryId] = useState("");
    const [categoryId,setCategoryid] = useState("");
    const [categoryName,setCategoryname] = useState('')
    const [subcategoryName,setSubcategoryName] = useState("")
    const [picture,setPicture] = useState({filename:"",bytes:""})
    const [open, setOpen] = React.useState(false);
    const [btnStatus,setBtnStatus] = useState(false)
    const [oldPicture,setOldPicture] = useState("")
    const [category,setCategory]=useState([])    




    useEffect(function(){
        fetchAllCategories()
        fetchAllSubcategories()
      },[])
    

    const fetchAllCategories = async()=>{
        var list = await getData('categories/fetchallcategories')
    
        setCategory(list.data)
    
      }

      const fetchAllSubcategories = async()=>{
        var list = await getData('subcategory/fetchallsubcategories')
    
        setSubcategoryList(list.data)

    
      }
      const fillcategories=()=>{
        return category.map((item)=>{
            return <MenuItem value={item.categoryid}>{item.categoriesname}</MenuItem>
          })
    }

    const fillsubcategories=()=>{
      return subcategoryList.map((item)=>{
          return <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
        })
  }

  
      const handleCancelPicture=async ()=>{
        setPicture({filename:oldPicture,bytes:""})
        setBtnStatus(false)
        }

        const handleSavePicture=async ()=>{
            var formData = new FormData();
            formData.append("picture",picture.bytes)
            formData.append("subcategoryid",subcategoryId)
            var config = { headers: { "content-type": "multipart/form-data" } };
              var result = await postDataAndImage("subcategory/editicon", formData, config);
              if(result)
              {
                Swal.fire({
                  title: 'psquare.com',
                  text: 'Your Picture has been updated successfully...',
                  imageUrl: '/logo.png',
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: 'Custom image',
                })
              }
              else
            {
              Swal.fire({
                title: 'psquare.com',
                text: 'Error in updating the picture...',
                imageUrl: '/logo.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            }
            setOpen(false);
            setBtnStatus(false);
            fetchAllSubcategories();
          }
          
          const handlePicture = (event)=>{
            setOldPicture(picture.filename)
            setPicture({
              filename:URL.createObjectURL(event.target.files[0]),
              bytes:event.target.files[0]
            })
            setBtnStatus(true);
          }
          
          const handleSubmit = async () =>{
          var err = false;
          if(isEmpty(categoryName)){
            err = true;
            checkError("Category Name should not be empty");
            
          }
          if(isEmpty(picture.filename)){
            err = true;
            checkError("Please Add Category Picture..."); 
          }
          if(!err){
            var body = {"subcategoryname":subcategoryName,"subcategoryid":subcategoryId}
              var result = await postData("subcategory/updatesubcategories",body);
              if(result)
              {
                Swal.fire({
                  title: 'psquare.com',
                  text: 'Your Record has been updated successfully...',
                  imageUrl: '/logo.png',
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: 'Custom image',
                })
              }
              else
            {
              Swal.fire({
                title: 'psquare.com',
                text: 'Error in updating the record...',
                imageUrl: '/logo.png',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
            }
            setOpen(false);
          }
          fetchAllSubcategories();
        }  
          
          
          const handleDeleteSubcategory = async (data) => {
            var body = { subcategoryid: data.subcategoryid };
            Swal.fire({
              imageUrl: "/logo.png",
              imageWidth: 200,
              title: "psquare.com",
              text: "Are u Sure to Delete Selected Record...",
              showCancelButton: true,
              confirmButtonText: "Yes, delete it!",
              cancelButtonText: "No, keep it",
            }).then(async (result) => {
              if (result.isConfirmed) {
                 result = await postData("subcategory/deletesubcategories", body);
                if (result){
                  Swal.fire("Deleted!", "Your record has been deleted.", "success");
                  fetchAllSubcategories();
                }
                else
                  Swal.fire("FAIL!!!!", "Server Error Fail to Delete Record", "error");
          
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire("Cancelled", "Your Record is safe :)", "error");
              }
            });
            fetchAllSubcategories();
          }
          
              const handleClickOpen = (data) => {
            
                setSubcategoryId(data.subcategoryid)
                // setCategoryId(data.categoryid)
                setCategoryname(data.categoryid)
                setSubcategoryName(data.subcategoryname)
                setPicture({ filename: `${ServerURL}/images/${data.picture}`, bytes: "" })
                setOpen(true);
               
                
              };
              
              const handleClose = () => {
                setOpen(false);
                setBtnStatus(false)
              };
          
              const storeDialog=()=>{
                return (
                  <div>
                   
                    <Dialog open={open} onClose={handleClose}  aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title"><div
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
                          <span>Edit Subcategory</span>
                        </div>
                      </div></DialogTitle>
                      <DialogContent>
                      <div className={classes.root} style={{ marginTop: 20 }}>
            <div className={classes.subdiv}>
            <Paper elevation={5} style={{padding:15}}  >
              <div style={{
                fontWeight: 'bold',
                fontSize: 25,
                // color: "#90A4AE",
                display: 'flex',
                flexDirection: 'center',
                justifyContent: 'center',
                
      
                padding: 5
              }}>
                <span><img src="/logo.png" width='70' alt="" /></span> <span  >Sub Category </span>  </div><br/>
              <Grid container spacing={2}>

              <Grid item xs={6}>
            

<FormControl variant="outlined" className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-outlined-label">Categroy Name</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
              
          onChange={(event)=>setCategoryname(event)}
          label="Category Name"
          value={categoryName}
        >
          
         {fillcategories()}
          
        </Select>
              </FormControl>
            </Grid>
               
            <Grid item xs={6}>
                <TextField variant="outlined" label="Sub Category Name" value={subcategoryName} onChange={(event) => setSubcategoryName(event.target.value)} fullWidth />
              </Grid>

                 
                
            
                <Grid item xs={6} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                  {!btnStatus?<>
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
                Edit picture
              </Button>
            </label></>:<></>}
           { btnStatus?
           <>
            <Button onClick={()=>handleSavePicture()}>Save</Button>
                <Button onClick={()=>handleCancelPicture()}>Cancel</Button>
             </>:<></>
           }
          </Grid>

          <Grid style={{display:'flex',alignItems:'center',justifyContent:'center'}} item xs={6}>
            <div style={{ padding: 5 }}>
              <Avatar variant="rounded"  alt="Remy Sharp" 
              src={picture.filename} className={classes.large}
               />
            </div>

          </Grid>
      
              
                <Grid item sm={12} style={{ padding: 10 }}>
                  <div style={{ justifyContent: 'center', display: 'flex' }}><Button style={{ width: 250 }} onClick={(event)=>handleSubmit()}  variant="contained" color="primary" >ADD</Button></div>
      
                </Grid>
              </Grid>
              {/* <ToastContainer /> */}
              </Paper>
            </div>
          </div>
             {/* </label></>:<></>}
                {btnStatus?<>
                <Button onClick={()=>handleSavePicture()}>Save</Button>
                <Button onClick={()=>handleCancelPicture()}>Cancel</Button></>:<></>}
                  </Grid>
          
                  <Grid item xs={6} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                  <Avatar alt="" src={picture.filename} variant="rounded" className={classes.large} />
                  </Grid>
          
                   <Grid item md={12}>
                <Button variant="contained" color="primary" style={{background:"#22a6b3" }} fullWidth onClick={()=>handleSubmit()} >Edit Category</Button>
                </Grid>
                 </Grid>
                  </div>
                </div> */}
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
          
                      </DialogActions>
                    </Dialog>
                  </div>
                );
            
              }
function SimpleAction() {
      
    return (
      <MaterialTable
        title={<Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={()=>props.setComponent(<Subcategory/>)}
        >
          Add SubCategory
        </Button>}
        columns={[
          { title: 'Id', field: 'subcategoryid' },
          { title: ' Subcategory Name',
          render: rowData =><div><b>{rowData.subcategoryname}</b></div>},
          { title: ' Category Name',
          render: rowData =><div><b>{rowData.categoriesname}</b></div>},
           {
            title: "Picture",
            render: (rowData) => (
              <img
                alt={rowData.picture}
                style={{ width: 50, height: 50, borderRadius: 10 }}
                src={`${ServerURL}/images/${rowData.picture}`}
              />
            ),
          },
        ]}
        data={subcategoryList}        
        actions={[
          {
            icon: 'edit',
            tooltip: 'Edit Store',
            onClick: (event, rowData) => handleClickOpen(rowData)
          },
          {
            icon: 'delete',
            tooltip: 'Delete Store',
            onClick: (event, rowData) => handleDeleteSubcategory(rowData)
          }
        ]}
       
      />
    )
  }

return(
  
    <div className={classes.root}>
    <div className={classes.subdiv}>
        {SimpleAction()}
        </div>
        {storeDialog()}
        </div>
)

}