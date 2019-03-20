import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import API from "../utils/API";
import { ResultsWrapper, VendorResults, DonationResults } from "../components/Search/SearchResults";
import search from "../assets/imgs/search.jpg";

class Search extends Component {
    state = {
        // form inputs
        vendorName: "",
        city: "",
        state: "",
        donationType: "",
        // api results
        vendorData: [],
        donationData: [],
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    resetForm = () => {
        this.setState({
            vendorName: "",
            city: "",
            state: "",
            donationType: "",
        })
    }

    reloadPage = () => {
        // reload page code
    }

    searchByVendor = (event) => {
        event.preventDefault();
        console.log("Search: ", this.state.vendorName);
        API.searchByVendor(this.state.vendorName)
            .then(res => {
                this.resetForm();
                // console.log(res.data);
                this.setState({
                    vendorData: res.data
                });
            })
            .catch(err => console.log(err));
    };

    searchByCity = (event) => {
        event.preventDefault();
        console.log("Search: ", this.state.city);
        API.searchByCity(this.state.city)
            .then(res => {
                this.resetForm();
                // console.log(res.data);
                this.setState({
                    vendorData: res.data
                })
            })
            .catch(err => console.log(err));
    };

    searchByState = (event) => {
        event.preventDefault();
        console.log("Search: ", this.state.state);
        API.searchByState(this.state.state)
            .then(res => {
                this.resetForm();
                // console.log(res.data);
                this.setState({
                    vendorData: res.data
                })
            })
            .catch(err => console.log(err));
    };

    searchByType = (event) => {
        event.preventDefault();
        console.log("Search: ", this.state.donationType);
        API.searchByType(this.state.donationType)
            .then(res => {
                this.resetForm();
                // console.log("Res: ", res.data);
                this.setState({
                    donationData: res.data
                })
                // console.log("Returned Data: ", this.state.donationData);
            })
            .catch(err => console.log(err));
    };


    render() {

        return (
            <div>

                <h1 className="text-center">Search</h1>

                <Container>
                    <Row>
                        <Col>
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
                                            <option>Photo and Video</option>
                                            <option>Professional Service</option>
                                            <option>Recreational Transportation</option>
                                            <option>Sports</option>
                                            <option>Travel and Transportation</option>
                                            <option>Wheelchair and Medical Equipment</option>
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
                        <Col>

                            <Card>
                                <Card.Img variant="top" src={search} />
                            </Card>

                        </Col>
                    </Row>

                    <br></br>
                    <ResultsWrapper>
                        {this.state.vendorData.map(data => {
                            // console.log("Vendor Data: ", data)
                            return <VendorResults
                                key={data.id}
                                vendorID={data.id}
                                vendorName={data.vendorName}
                            />
                        }
                        )}

                        {this.state.donationData.map(data => {
                            // console.log("Donation Data: ", data)
                            return <DonationResults
                                key={data.VendorId}
                                vendorID={data.VendorId}
                                vendorName={data.Vendor.vendorName}
                            />
                        }
                        )}
                    </ResultsWrapper>

                </Container>

                <p>
                    <br></br>
                </p>

            </div>
        )
    };
};

export default Search;