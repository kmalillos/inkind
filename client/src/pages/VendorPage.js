import React, { Component } from "react";
import API from "../utils/API";

class VendorPage extends Component {
    state = {
        vendor: [],
        donations: [],
        // donationID: ""
    };

    componentDidMount() {
        this.findOneVendor();
    }

    findOneVendor = () => {
        API.findOneVendor(this.props.match.params.id)
            // .then(res => console.log(res.data))
            .then(res => {
                // console.log("findOneVendor():", res.data);
                this.setState({
                    vendor: res.data,
                    donations: res.data.Donations
                })
                // console.log(res.data.Donations)
            })
            .catch(err => console.log(err));
    };

    deleteDonation = (event) => {
        event.preventDefault();
        // console.log(event.target.id);
        // console.log("deleted: ", event.target.id);
        if (window.confirm("Are you sure you want to delete this donation?")) {
            API.deleteDonation(event.target.id)
            .then(res => {
                console.log("Deleted Donation");
                this.findOneVendor();
            })
            .catch(err => console.log(err));
        } else {
            this.findOneVendor();
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.vendor.vendorName}</h1>

                <br></br>

                <h3>Contact Information</h3>


                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">City:</th>
                            <th scope="col">State:</th>
                            <th scope="col">Zip:</th>
                            <th scope="col">Phone:</th>
                            <th scope="col">Email:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.vendor.address}</td>
                            <td>{this.state.vendor.city}</td>
                            <td>{this.state.vendor.state}</td>
                            <td>{this.state.vendor.zip}</td>
                            <td>{this.state.vendor.phone}</td>
                            <td>{this.state.vendor.email}</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Donations</h3>

                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Donation Type</th>
                                <th scope="col">Note</th>
                                <th scope="col">When</th>
                                <th scope="col">Value</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.donations.map(donation => {
                                
                                return (
                                    <tr key={donation.id}>
                                        <td>{donation.donationType}</td>
                                        <td>{donation.note}</td>
                                        <td>{donation.date}</td>
                                        <td>${donation.donationValue}</td>
                                        <td>
                                            <button onClick={this.deleteDonation} id={donation.id}>
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>



            </div>
        )
    }
}

export default VendorPage;