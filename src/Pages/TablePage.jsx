import React, { Component } from 'react';
import Appbar from '../components/AppBar/Appbar';
import EmpCard2 from '../components/Card/EmpCard2';

class TablePage extends Component {
    render() {
        return (
            <div>
                <Appbar/>
                <EmpCard2/>
            </div>
        );
    }
}

export default TablePage;