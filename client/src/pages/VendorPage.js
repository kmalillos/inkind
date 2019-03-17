import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";
import API from "../utils/API";
import ContactInfo from "../components/VendorPage/ContactInfo";
import { DonationTable, DonationTableItem } from "../components/VendorPage/Donations";
// import AddDonation from "../components/VendorPage/AddDonation";



class VendorPage extends Component {
    state = {
        vendor: [],
        donations: [],
        // Add Donation Form
        VendorId: "",
        donationType: "",
        note: "",
        date: "",
        donationValue: ""
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
                    VendorId: this.props.match.params.id,
                    vendor: res.data,
                    donations: res.data.Donations,
                })
                // console.log(this.state);
            })
            .catch(err => console.log(err));
    };


    deleteDonation = (event) => {
        event.preventDefault();
        // console.log(event);
        // console.log("deleted: ", event.target.id);
        if (window.confirm("Are you sure you want to delete?")) {
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

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.createDonation();
    };

    createDonation = () => {
        // console.log(`Adding: ${this.state.VendorId} & ${this.state.donationType} & ${this.state.note}`)
        if (this.state.VendorId && this.state.donationType && this.state.note) {
            API.createDonation({
                VendorId: this.state.VendorId,
                donationType: this.state.donationType,
                note: this.state.note,
                date: this.state.date,
                donationValue: this.state.donationValue
            })
                .then(res => {
                    console.log("Created Donation: ", res.data);
                    this.findOneVendor();
                })
                .catch(err => console.log(err));
        } else {
            alert("Please enter required fields.")
        }
    }

    render() {
        // console.log("Vendor Page: ", this.props);

        return (
            <div>
                <h1>{this.state.vendor.vendorName}</h1>

                <br></br>

                <h3>Contact Information</h3>

                <ContactInfo
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

                <br></br>

                <h3>Add Donation</h3>


                {/* <Link to={`${this.props.match.url}/add`} role="button" className="btn">
                    Add Donation Form
                </Link>

                <Route exact path={`${this.props.match.url}/add`} component={AddDonation} /> */}

                <form>
                    <label>Donation Type (Required)</label>  <br></br>
                    <input
                        value={this.state.donationType}
                        onChange={this.handleInputChange}
                        name="donationType"
                        placeholder="Donation Type"
                    />

                    <br></br>

                    <label>Note (Required)</label>  <br></br>
                    <input
                        value={this.state.note}
                        onChange={this.handleInputChange}
                        name="note"
                        placeholder="Note"
                    />

                    <br></br>

                    <label>Date (Required)</label>  <br></br>
                    <input
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        name="date"
                        placeholder="YYYY-MM-DD"
                    />

                    <br></br>

                    <label>Donation Value</label>  <br></br>
                    <input
                        value={this.state.donationValue}
                        onChange={this.handleInputChange}
                        name="donationValue"
                        placeholder="Donation Value"
                    />

                    <br></br>

                    <button
                        onClick={this.handleFormSubmit}
                    >
                        Add Donation
                    </button>
                </form>

            </div>
        )
    }
}

export default VendorPage;