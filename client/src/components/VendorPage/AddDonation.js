// Component doesn't work because it needs to grab VendorId value;

import React, { Component } from "react";
import API from "../../utils/API";

class AddDonation extends Component {

    state = {
        VendorId: "",
        donationType: "",
        note: "",
        date: "",
        donationValue: ""
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
        console.log(`Submitting: ${this.state.VendorId} & ${this.state.donationType} & ${this.state.note}`)
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
                    })
                .catch(err => console.log(err));
        } else {
            alert("Please enter required fields.")
        }
    }

    render() {

        // console.log("Donation Form: ", this.props);

        return(
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
        )
    }

}

export default AddDonation;