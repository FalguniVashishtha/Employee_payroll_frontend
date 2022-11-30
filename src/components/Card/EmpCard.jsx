// import React, { Component } from "react";
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import Checkbox from '@mui/material/Checkbox';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import TextareaAutosize from '@mui/material/TextareaAutosize';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import './EmpCard.css';
// import profile1 from '../../images/profile1.jpeg';
// import profile2 from '../../images/profile2.jpg';
// import profile3 from '../../images/profile3.jpg';


// class EmpCard extends Component {

//     render() {
//         return(
//             <Card className='form_card' variant="outlined">
//                 <CardContent>
//                 <Typography className="title" variant="h5" component="div">
//                     Employee Payroll Form
//                 </Typography>
//                 <div className='field_container'><div className='form_label'>Name</div> <TextField variant="outlined" size="small"/></div> 
//                 <div className='field_container'><div className='form_label'>Profile Image</div> 
//                     <RadioGroup
//                         row
//                         aria-labelledby="demo-row-radio-buttons-group-label"
//                         name="row-radio-buttons-group"
//                     >
//                         <FormControlLabel value="female" control={<Radio />} label={<Avatar className='profile_img' src={profile1} />} />
//                         <FormControlLabel value="male" control={<Radio />} label={<Avatar className='profile_img' src={profile2} />} />
//                         <FormControlLabel value="other" control={<Radio />} label={<Avatar className='profile_img' src={profile3} />} />
//                     </RadioGroup>
//                 </div>
//                 <div className='field_container'><div className='form_label'>Gender</div> 
//                     <RadioGroup
//                         row
//                         aria-labelledby="demo-row-radio-buttons-group-label"
//                         name="row-radio-buttons-group"
//                     >
//                         <FormControlLabel value="male" control={<Radio />} label="Male" />
//                         <FormControlLabel value="female" control={<Radio />} label="Female" />
//                     </RadioGroup>
//                 </div>
//                 <div className='field_container'><div className='form_label'>Department</div> 
//                     <div>
//                         <Checkbox /> HR
//                         <Checkbox /> Sales
//                         <Checkbox /> Finance
//                         <Checkbox /> Engineer
//                         <Checkbox /> Others
//                     </div>
//                 </div>
//                 <div className='field_container'><div className='form_label'>Salary</div> 
//                 <div>
//                     <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={1}
//                     label="Salary"
//                     >
//                         <MenuItem value={1}>20000</MenuItem>
//                         <MenuItem value={2}>30000</MenuItem>
//                         <MenuItem value={3}>50000</MenuItem>
//                     </Select>
//                 </div>
//                 </div>

//                 <div className='field_container'><div className='form_label'>Notes</div> 
//                     <div>
//                     <TextareaAutosize
//                         minRows={4}
//                         aria-label="maximum height"
//                         style={{ width: 500 }}
//                     />
                        
//                     </div>
//                 </div>

//                 </CardContent>
//                 <CardActions className="action_container">
//                     <div><Button variant="outlined" className="action_button">Cancel</Button></div>
//                     <div>
//                         <Button variant="outlined" className="action_button">Submit</Button>
//                         <Button variant="outlined" className="action_button">Reset</Button>
//                     </div>
//                 </CardActions>
//             </Card>  
//         )
//     }
// }

// export default EmpCard;

import React, { Component } from 'react';
import Card from '@mui/material/Card';
import './EmpCard.css';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import { Button, FormControl } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CardActions from '@mui/material/CardActions';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import profile1 from './profile1.jpeg';
import profile2 from './profile2.jpg';
import profile3 from './profile3.jpg';
import Stack from '@mui/material/Stack';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class EmpCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: '',
            profile_image: '',
            gender: '',
            department: '',
            salary: '',
            note: ''
            
        }

    }
    

    handleEmpName = (event) => {
        this.setState({
            employeeName: event.target.value
        })
    }

    handleProfile = (event) => {
        this.setState({
            profile_image: event.target.value
        })
    }

    handleGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleDepartment = (event) => {
        this.setState({
            department: event.target.value
        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleNote = (event) => {
        this.setState({
            note: event.target.value
        })
    }



    /*    handleEmp_Name = (event) => {
            console.log(event.target.value);
            let fnameError = 'Please enter your name'
            let fname = event.target.value
            let regx = RegExp("^[A-Z]{1}[A-Za-z]{2,}$")
            if (regx.test(fname)) {
                this.setState({
                    emp_name: fname,
                    empNameError: ""
                })
            }
            else {
                this.setState({
                    emp_name: fname,
                    empNameError: "please enter proper name"
                });
            }
            console.log(this.emp_name);
        }
    
    
        valid = () => {
            if (this.state.emp_name.length === 0) {
                this.setState({ nameError: "Enter Valid Name" })
            }
        }
    */
    handleSubmit = async (e) => {

        console.log(this.state);
        await axios.post("http://localhost:8080/registerEmployee", this.state)
        
    }
    notifyCancel = () => {
        toast('Cancel Form');

    }

    notifySubmit = () => {
        toast('Employee Added!!');
    }

    render() {
        return (
            <div>
                <Card className='EmpCard'>
                    <h2 className='FormName'>Employee Payroll Form</h2><br></br>
                    <div>
                        <form >
                            <div>
                                <label className='emp-name-field' > Name </label>
                                <div >
                                    <TextField required className='name-box' variant="outlined" onChange={(event)=>this.handleEmpName(event)} value={this.state.name} />
                                <p>{this.state.name}</p>
                                </div>
                            
                            </div>
                            <br />

                            <div>
                                <label className='emp-profile-field'>Profile Image </label>

                            </div>

                            <RadioGroup row>

                                <div className='emp-profile' onChange={(event) => this.handleProfile(event)}>

                                    <FormControlLabel value="profile1" control={<Radio />} label={<Avatar
                                        className='profile-img' src={profile1} />} />&nbsp;&nbsp;

                                    <FormControlLabel value="profile2" control={<Radio />} label={<Avatar
                                        className='profile-img' src={profile2} />} />&nbsp;&nbsp;

                                    <FormControlLabel value="profile3" control={<Radio />} label={<Avatar
                                        className='profile-img' src={profile3} />} />&nbsp;&nbsp;
                                        
                                </div>
                            </RadioGroup>
                            <br /><br />

                            <div >
                                <label className='emp-gender-field'> Gender </label>
                            </div>
                            <RadioGroup row>
                                <div className='emp-radio-button' onChange={(event) => this.handleGender(event)} >
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />&nbsp;&nbsp;
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />&nbsp;&nbsp;
                                    
                                </div>
                                
                            </RadioGroup>
                            <br />
                            <br />

                            <div>
                                <label className='emp-department-field'>Department </label>
                            </div>
                            <FormControl row>
                                <div className='emp-checkbox' onChange={this.handleDepartment} >
                                    <FormControlLabel value="HR" control={<Checkbox />} label="Hr" labelPlacement="end" />

                                    <FormControlLabel value="Sales" control={<Checkbox />} label="Sales" labelPlacement="end" />

                                    <FormControlLabel value="Finance" control={<Checkbox />} label="Finance" labelPlacement="end" />

                                    <FormControlLabel value="Engineer" control={<Checkbox />} label="Engineer" labelPlacement="end" />

                                    <FormControlLabel value="Other" control={<Checkbox />} label="Other" labelPlacement="end" />
                                        
                                </div>
                            </FormControl>
                            <br />
                            <br />


                            <div className='emp-salary-field'>
                                <label > Salary </label>
                            </div>
                            <div>
                                <Select className='emp-salary' value={this.state.salary} onChange={(event) => this.handleSalary(event)}>
                                    <MenuItem value="20000">20000</MenuItem>
                                    <MenuItem value="30000">30000</MenuItem>
                                    <MenuItem value="40000">40000</MenuItem>
                                    <MenuItem value="50000">50000</MenuItem>
                                    <MenuItem value="60000">60000</MenuItem>
                                </Select>
                                
                            </div>
                            <br />

                            <div className='emp-date-field'>
                                <label>Start Date </label>
                            </div>
                            <br />

                            <br />

                            <div >
                                <label className='emp-note-field'>Notes </label>
                            </div>
                            <div >
                                <TextField required className='emp-note-box' variant="outlined" onChange={(event) => this.handleNote(event)} value={this.state.note} />
                            </div>

                            <br />

                            {/* <CardActions className="action_container">
                     <div><Button variant="outlined" className="action_button">Cancel</Button></div>
                     <div>
                         <Button variant="outlined" className="action_button" onClick={this.handleSubmit}>Submit</Button>
                         <Button variant="outlined" className="action_button">Reset</Button>
                     </div>
                 </CardActions> */}

<                           Stack className='submit-reset-button' spacing={15} direction="row">
                                <Button variant="outlined" onClick={this.notifyCancel}>Cancel</Button>
                                <ToastContainer />
                                <Button type="submit" variant="outlined" onClick={this.handleSubmit}>Submit</Button>
                                <ToastContainer />
                                <Button variant="outlined">Reset</Button>
                            </Stack>
                        </form>
                    </div>
                </Card>
            </div>
        );
    }
}