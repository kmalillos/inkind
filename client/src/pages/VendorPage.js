import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import API from "../utils/API";
import ContactInfo from "../components/VendorPage/ContactInfo";
import { DonationTable, DonationTableItem } from "../components/VendorPage/Donations";


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
        this.setVendorId();
        this.findOneVendor();
    }

    setVendorId = () => {
        this.setState({
            VendorId: this.props.match.params.id
        })
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

    editVendor = (event, id) => {
        event.preventDefault();
        console.log("edit", id);
        alert("Function underconstruction...");
        this.findOneVendor();
    }

    deleteVendor = (event, id) => {
        event.preventDefault();
        console.log("delete", id);
        if (window.confirm("Are you sure you want to delete?")) {
            alert("Function underconstruction...");
            // API.deleteVendor(event.target.id)
            //     .then(res => {
            //         console.log("Deleted Donation");
            //         this.findOneVendor();
            //     })
            //     .catch(err => console.log(err));
        } else {
            alert("Function underconstruction...");
            this.findOneVendor();
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.resetForm();
        this.createDonation();
    };

    resetForm = () => {
        this.setState({
            donationType: "",
            note: "",
            date: "",
            donationValue: ""
        })
    }

    createDonation = () => {
        if (this.state.VendorId && this.state.donationType && this.state.note && this.state.date && this.state.donationValue) {
            API.createDonation({
                VendorId: this.state.VendorId,
                donationType: this.state.donationType,
                note: this.state.note,
                date: this.state.date,
                donationValue: this.state.donationValue
            })
                .then(res => {
                    console.log("Created Donation: ", res.data);
                    // alert("Donation added!");
                    this.reloadPage();
                })
                .catch(err => console.log(err));
        } else {
            alert("All fields are required.")
        }
    }

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

    reloadPage = () => {
        console.log("Page Reloaded");
        this.findOneVendor();
        // CODE TO RESET FORMS
    }

    render() {
        // console.log("Vendor Page: ", this.props);

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h1>{this.state.vendor.vendorName}</h1>

                            <Button className="btn-link float-right"
                                id={this.state.VendorId}
                                onClick={this.deleteVendor}
                            >
                                Delete Vendor
                            </Button>

                            <Button className="btn-link float-right"
                                id={this.state.VendorId}
                                onClick={this.editVendor}
                            >
                                Edit Vendor
                            </Button>

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
                        </Col>
                    </Row>
                </Container>


                <Container>
                    <Row>
                        <Col>
                            <h3>Add Donation</h3>

                            <Form>
                                <Form.Label>Donation Type (Required)</Form.Label>  <br></br>
                                <Form.Control as="select"
                                    value={this.state.donationType}
                                    onChange={this.handleChange}
                                    name="donationType"
                                    placeholder="Donation Type"
                                >
                                    <option value="" disabled>Select Donation Type</option>
                                    <option>Attraction</option>
                                    <option>Celebrity (non-sports)</option>
                                    <option>Hotel</option>
                                    <option>Meal</option>
                                    <option>Miscellaneous</option>
                                    <option>Performing Arts</option>
                                    <option>Photo and Video</option>
                                    <option>Professional Service</option>
                                    <option>Recreational Transportation</option>
                                    <option>Sports</option>
                                    <option>Travel and Transportation</option>
                                    <option>Wheelchair and Medical Equipment</option>
                                </Form.Control>

                                <Form.Label>Note (Required)</Form.Label>  <br></br>
                                <Form.Control as="textarea"
                                    value={this.state.note}
                                    onChange={this.handleChange}
                                    name="note"
                                    placeholder="Note"
                                />

                                <Form.Label>Date (Required)</Form.Label>  <br></br>
                                <Form.Control
                                    type="date"
                                    value={this.state.date}
                                    onChange={this.handleChange}
                                    name="date"
                                    placeholder="YYYY-MM-DD"
                                />

                                <Form.Label>Donation Value (Required)</Form.Label>  <br></br>
                                <Form.Control
                                    type="number"
                                    value={this.state.donationValue}
                                    onChange={this.handleChange}
                                    name="donationValue"
                                    placeholder="Donation Value"
                                />

                                <br></br>

                                <Button className="btn-info btn-block"
                                    onClick={this.handleFormSubmit}
                                >
                                    Add Donation
                                </Button>
                            </Form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default VendorPage;