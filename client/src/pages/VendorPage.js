import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import API from "../utils/API";
import VendorContactInfo from "../components/VendorContactInfo";
// import AddDonation from "../components/AddDonation";
import { DonationTable, DonationTableItem } from "../components/VendorDonations";

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

    addDonation = () => {
        console.log("go to add donation")
    };

    deleteDonation = (event) => {
        event.preventDefault();
        // console.log(event);
        console.log("deleted: ", event.target.id);
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
    };

    render() {

        return (
            <div>
                <h1>{this.state.vendor.vendorName}</h1>

                <br></br>

                <h3>Contact Information</h3>

                <VendorContactInfo
                    key={this.state.vendor.id}
                    address={this.state.vendor.address}
                    city={this.state.vendor.city}
                    state={this.state.vendor.state}
                    zip={this.state.vendor.zip}
                    phone={this.state.vendor.phone}
                    email={this.state.vendor.email}
                />

                <br></br>

                <h3>Donations</h3>

                <button onClick={this.addDonation}>
                    Add a Donation
                </button>

                <br></br>

                <DonationTable>
                    {this.state.donations.map(donation => {
                        return <DonationTableItem
                            key={donation.id}
                            donationType={donation.donationType}
                            note={donation.note}
                            date={donation.date}
                            donationValue={donation.donationValue}
                            id={donation.id}
                            onClick={this.deleteDonation}
                        />

                    })}
                </DonationTable>

            </div>
        )
    }
}

export default VendorPage;