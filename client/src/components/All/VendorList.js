import React, { Component } from "react";
import API from "../../utils/API";
import { VendorTable, VendorTableItem } from "./VendorTable";

class VendorList extends Component {
    state = {
        vendors: []
    };

    componentDidMount() {
        // this.resetPage();
        this.findAllVendors();
    };

    // resetPage = () => {
    //     this.setState({
    //         vendors: []
    //     })
    // }

    findAllVendors = () => {
        API.findAllVendors()
            // .then(res => console.log(res.data))
            .then(res => {
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

                <h1 className="text-center">All Vendors</h1>

                <VendorTable>
                    {this.state.vendors.map(vendor => {
                        // console.log(vendor);
                        return <VendorTableItem
                            key={vendor.id}
                            vendorID={vendor.id}
                            vendorName={vendor.vendorName}
                            city={vendor.city}
                            state={vendor.state}
                            phone={vendor.phone}
                            email={vendor.email}
                        />
                    })}
                </VendorTable>

            </div>
        );
    }
};

export default VendorList;