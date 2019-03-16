import React, { Component } from "react";
import API from "../utils/API";
import { DonationTable, DonationTableItem } from "../components/VendorDonations"

class VendorPage extends Component {
    state = {
        vendor: [],
        donations: []
    };

    componentDidMount() {
        this.forceUpdate();
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
                console.log(res.data.Donations)
            })
            .catch(err => console.log(err));
    };

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

                <DonationTable>
                    {this.state.donations.map(donation => {
                        // console.log("this.state.donations.map: ", donation);
                        return <DonationTableItem
                            key={donation.id}
                            donationType={donation.donationType}
                            note={donation.note}
                            date={donation.date}
                            donationValue={donation.donationValue}
                        />
                    })}
                </DonationTable>

            </div>
        )
    }
}

export default VendorPage;