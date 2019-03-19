import React, { Component } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import API from "../utils/API";
import addvendor from "../assets/imgs/addvendor.jpg";
import { Redirect } from 'react-router-dom';

class AddVendor extends Component {
    state = {
        vendorID: "",
        vendorName: undefined,
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: "",
        redirect: false
    };

    componentDidMount() {
        // CODE HERE
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.createVendor();
    };

    createVendor = () => {
        if (this.state.vendorName) {
            API.createVendor({
                vendorName: this.state.vendorName,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                phone: this.state.phone,
                email: this.state.email
            })
                .then(res => {
                    console.log("Created Vendor: ", res.data);
                    this.setState({ vendorID: res.data.id });
                    this.setRedirect();
                })
                .catch(err => console.log(err));
        } else {
            alert("Please enter required field: Vendor Name.");
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    }

    redirectPage = () => {
        if (this.state.redirect) {
            return <Redirect to={`/vendor/${this.state.vendorID}`} />
        }
    }

    render() {

        return (
            <div>
                <h1 className="text-center">Add Vendor</h1>

                <p className="text-center">Donations can be added on Vendor Pages.</p>
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={addvendor} />
                            </Card>
                        </Col>
                        <Col>
                            <Form>

                                <Form.Label>Vendor Name (Required)</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.vendorName}
                                    onChange={this.handleChange}
                                    name="vendorName"
                                    placeholder="Vendor Name"
                                />

                                <Form.Label>Address</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.address}
                                    onChange={this.handleChange}
                                    name="address"
                                    placeholder="Address"
                                />

                                <Form.Label>City</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                    name="city"
                                    placeholder="City"
                                />

                                <Form.Label>State</Form.Label>  <br></br>
                                <Form.Control as="select"
                                    value={this.state.state}
                                    onChange={this.handleChange}
                                    name="state"
                                    placeholder="State"
                                >
                                    <option value="" disabled>Select State</option>
                                    <option value="AL">AL</option>
                                    <option value="AK">AK</option>
                                    <option value="AR">AR</option>
                                    <option value="AZ">AZ</option>
                                    <option value="CA">CA</option>
                                    <option value="CO">CO</option>
                                    <option value="CT">CT</option>
                                    <option value="DC">DC</option>
                                    <option value="DE">DE</option>
                                    <option value="FL">FL</option>
                                    <option value="GA">GA</option>
                                    <option value="HI">HI</option>
                                    <option value="IA">IA</option>
                                    <option value="ID">ID</option>
                                    <option value="IL">IL</option>
                                    <option value="IN">IN</option>
                                    <option value="KS">KS</option>
                                    <option value="KY">KY</option>
                                    <option value="LA">LA</option>
                                    <option value="MA">MA</option>
                                    <option value="MD">MD</option>
                                    <option value="ME">ME</option>
                                    <option value="MI">MI</option>
                                    <option value="MN">MN</option>
                                    <option value="MO">MO</option>
                                    <option value="MS">MS</option>
                                    <option value="MT">MT</option>
                                    <option value="NC">NC</option>
                                    <option value="NE">NE</option>
                                    <option value="NH">NH</option>
                                    <option value="NJ">NJ</option>
                                    <option value="NM">NM</option>
                                    <option value="NV">NV</option>
                                    <option value="NY">NY</option>
                                    <option value="ND">ND</option>
                                    <option value="OH">OH</option>
                                    <option value="OK">OK</option>
                                    <option value="OR">OR</option>
                                    <option value="PA">PA</option>
                                    <option value="RI">RI</option>
                                    <option value="SC">SC</option>
                                    <option value="SD">SD</option>
                                    <option value="TN">TN</option>
                                    <option value="TX">TX</option>
                                    <option value="UT">UT</option>
                                    <option value="VT">VT</option>
                                    <option value="VA">VA</option>
                                    <option value="WA">WA</option>
                                    <option>Washington DC</option>
                                    <option value="WI">WI</option>
                                    <option value="WV">WV</option>
                                    <option value="WY">WY</option>
                                </Form.Control>

                                <Form.Label>Zip Code</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.zip}
                                    onChange={this.handleChange}
                                    name="zip"
                                    placeholder="Zip Code"
                                />

                                <Form.Label>Phone Number</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    name="phone"
                                    placeholder="Phone Number"
                                />

                                <Form.Label>Email</Form.Label> <br></br>
                                <Form.Control
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    name="email"
                                    placeholder="Email"
                                />


                                <br></br>

                                {this.redirectPage()}
                                <Button className="btn-info"
                                    onClick={this.handleFormSubmit}
                                >
                                    Add Vendor
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>

            </div >
        )
    };
};

export default AddVendor;