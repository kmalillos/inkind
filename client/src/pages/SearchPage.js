import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import API from "../utils/API";
import { Table, TableItem } from "../components/Search/SearchResults";

class Search extends Component {
    state = {
        // form inputs
        vendorName: "",
        city: "",
        state: "",
        donationType: "",
        // api results
        data: [],
        vendors: [],
        donations: [],
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchByVendor = (event) => {
        event.preventDefault();
        console.log(this.state.vendorName);
        API.searchByVendor(this.state.vendorName)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    data: res.data
                });
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
    };

    searchByCity = (event) => {
        event.preventDefault();
        console.log(this.state.city);
        API.searchByCity(this.state.city)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    data: res.data
                })
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
    };

    searchByState = (event) => {
        event.preventDefault();
        // console.log(this.state.vendorName);
        API.searchByState(this.state.state)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    data: res.data
                })
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
    };

    // *** NEED TO FIT WITH VENDOR TABLE OR TERNARY OPERATORS?
    searchByType = (event) => {
        event.preventDefault();
        // console.log(this.state.vendorName);
        API.searchByType(this.state.donationType)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    data: res.data
                })
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
    };


    render() {

        return (
            <div>

                <Container>
                    <Row>
                        <Col> </Col>
                        <Col><h1>Search</h1></Col>
                        <Col> </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col> </Col>
                        <Col xs={6}>

                            <Form>
                                <Form.Label>Search by Vendor Name</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            value={this.state.vendorName}
                                            onChange={this.handleChange}
                                            name="vendorName"
                                            placeholder="Vendor Name"
                                        />
                                    </Col>
                                    <Col>
                                        <Button className="btn-info" onClick={this.searchByVendor}>
                                            Search
                            </Button>
                                    </Col>
                                </Row>
                            </Form>

                            <br></br>

                            <Form>
                                <Form.Label>Search by City</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control
                                            value={this.state.city}
                                            onChange={this.handleChange}
                                            name="city"
                                            placeholder="City"
                                        />
                                    </Col>
                                    <Col>
                                        <Button className="btn-info" onClick={this.searchByCity}>
                                            Search
                            </Button>
                                    </Col>
                                </Row>
                            </Form>

                            <br></br>

                            <Form>
                                <Form.Label>Search By State</Form.Label>
                                <Row>
                                    <Col>
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
                                    </Col>
                                    <Col>
                                        <Button className="btn-info" onClick={this.searchByState}>
                                            Search
                            </Button>
                                    </Col>
                                </Row>
                            </Form>

                            <br></br>

                            <Form>
                                <Form.Label>Search by Donation Type</Form.Label>
                                <Row>
                                    <Col>
                                        <Form.Control as="select"
                                            value={this.state.donationType}
                                            onChange={this.handleChange}
                                            name="donationType"
                                            placeholder="Donation Type">
                                            >
                                <option value="" disabled>Select Donation Type</option>
                                            <option>Attraction</option>
                                            <option>Celebrity (non-sports)</option>
                                            <option>Hotel</option>
                                            <option>Meal</option>
                                            <option>Miscellaneous</option>
                                            <option>Performing Arts</option>
                                            <option>Photo/Video</option>
                                            <option>Professional Service</option>
                                            <option>Recreational Transportation</option>
                                            <option>Sports</option>
                                            <option>Travel/Transportation</option>
                                            <option>Wheelchair/Medical Equipment</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Button className="btn-info" onClick={this.searchByType}>
                                            Search
                            </Button>
                                    </Col>
                                </Row>
                            </Form>


                        </Col>
                        <Col> </Col>
                    </Row>
                </Container>

                <p>
                    <br></br>
                </p>

                <h3>Search Results</h3>

                <Table>
                    {this.state.data.map(data => {
                        console.log("Data Map: ", data);
                        console.log("Vendor ID: ", data.id);
                        console.log("Vendor Name: ", data.vendorName);
                        // console.log("Type: ", data.Donations[0].donationType);
                        // console.log("Type: ", data.Donations[0].note);
                        return <TableItem
                            key={data.id}
                            vendorID={data.id}
                            vendorName={data.vendorName}
                        // donationType={data.Donations[0].donationType}
                        // note={data.Donations[0].note}
                        />
                    })}
                </Table>

            </div>
        )
    };
};

export default Search;