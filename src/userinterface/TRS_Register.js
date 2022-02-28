import { Avatar, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { postData } from '../FetchNodeService'
import Footer from './footer'
import Header from './header'
import { TRS_Header } from './TRS_Header'
import './TRS_Register.css'

const TRS_Register = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [addressone, setAddressOne] = useState('')
    const [addresstwo, setAddresstwo] = useState('')
    const [city, setCity] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [firmName, setFirmName] = useState('')
    const [website, setWebsite] = useState('')
    const [mobileno, setMobileno] = useState('')
    const [emailid, setEmailId] = useState('')
    // const [picture, setPicture] = useState({ filename: "", bytes: "" })




    const handleEnquire = async () => {


        var body = { text: 'Skylight Doors & Windows Pvt Ltd. Shop No-E-26/27, Kashivishweshwar Tower-7, Opp. Avdooth Hospital, Chikuwadi, Jetalpur Road, Vadodara-390007. www.skylightupvc.com 9327471921/22 Gst N24AAECM2747F1ZOIN', mobileno: mobileno, name: firstName + " " + lastName }

        var result = await postData("sendsms/senddata", body)
        alert(result)

        var userBody = {
            firstname:firstName,
            lastname:lastName,
            gender:gender,
            dob:dob,
            addressone:addressone,
            addresstwo:addresstwo,
            city:city,
            zipcode:zipCode,
            state:state,
            country:country,
            firmname:firmName,
            website:website,
            mobileno:mobileno,
            emailid:emailid
        }

        var userResult = await postData('users/insertuser',userBody)
        if(userResult){
            alert('Record Submitted')
        }
        else {
            alert('Record Not Submitted')
        }

    }

    // const handlePicture = (event) => {
    //     setPicture({
    //         filename: URL.createObjectURL(event.target.files[0]),
    //         bytes: event.target.files[0]
    //     })
    // }

    return (
        <>
            <Header history={props.history} />
            <div className="root">
                <div className="heading">Join Us, Become a partner</div>
                <Grid container spacing={3} xs={12} className="subdiv" style={{ width: 1000, padding: 30, marginBottom: 50 }}>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setFirstName(event.target.value)} variant="filled" fullWidth label="First Name" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setLastName(event.target.value)} variant="filled" fullWidth label="Last Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl variant="filled" fullWidth >
                            <InputLabel id="department">Gender</InputLabel>
                            <Select
                                labelId="department"
                                //value={department}
                                onChange={(event) => setGender(event.target.value)}
                            >
                                <MenuItem value="Male">Male</MenuItem>
                                <MenuItem value="Female">Female</MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setDob(event.target.value)} type="date" defaultValue={new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()} variant="filled" fullWidth label="DOB" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setAddressOne(event.target.value)} variant="filled" fullWidth label="Address 1" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setAddresstwo(event.target.value)} variant="filled" fullWidth label="Address 2" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setZipCode(event.target.value)} variant="filled" fullWidth label="Zip Code" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setCity(event.target.value)} variant="filled" fullWidth label="City" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setState(event.target.value)} variant="filled" fullWidth label="State" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setCountry(event.target.value)} variant="filled" fullWidth label="Country" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setFirmName(event.target.value)} variant="filled" fullWidth label="Firm Name" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setWebsite(event.target.value)} variant="filled" fullWidth label="Website" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setMobileno(event.target.value)} variant="filled" fullWidth label="Mobile Number" />
                    </Grid>
                    <Grid item xs={6} >
                        <TextField onChange={(event) => setEmailId(event.target.value)} variant="filled" fullWidth label="Email Address" />
                    </Grid>
                    
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', margin: 30 }}>
                        <button onClick={() => handleEnquire()} className="enq-button">Enquire Now</button>
                    </Grid>
                </Grid>

            </div>
            <Footer history={props.history} />
        </>
    )
}

export default TRS_Register;