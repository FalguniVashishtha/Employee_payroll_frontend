import React, { Component } from "react";
import Appbar from '../components/AppBar/Appbar';
import EmpCard from '../components/Card/EmpCard';


class HomePage extends Component {
    render() {
        return(
            <div>
                <Appbar />
                <EmpCard />
               
                {/* <AppBar sx={{height: '50px', color:'black', background:'white'}} position="static">Employee Payroll</AppBar> */}
                {/* <Card variant="outlined" sx={{width: 750, height: 450, margin: 10}}>
                    <CardContent>Hello</CardContent>
                </Card>        */}
            </div>
            
         )
    }
}

export default HomePage;