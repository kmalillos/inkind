import React, { Component } from "react";
import API from "../../utils/API";
import { Table, TableItem } from "../Table";

class VendorList extends Component {
    state = {
        vendors: []
    };

    componentDidMount() {
        this.findAllVendors();
    };

    findAllVendors = () => {
        API.findAllVendors()
            // .then(res => console.log(res.data))
            .then(res =>{
                // console.log(res.data);
                this.setState({
                    vendors: res.data
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>

                <h1>All Vendors</h1>

                <Table>
                    {this.state.vendors.map(vendor => {
                        // console.log(vendor);
                        return <TableItem 
                            key={vendor.id}
                            vendorName={vendor.vendorName}
                            city={vendor.city}
                            state={vendor.state}
                            phone={vendor.phone}
                            email={vendor.email}
                        />
                    })}
                </Table>

            </div>
        );
    }
};

export default VendorList;