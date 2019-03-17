import React, { Component } from "react";
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

    componentDidMount() {
        // CODE HERE
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    searchByVendor = (event) => {
        event.preventDefault();
        // console.log(this.state.vendorName);
        API.searchByVendor(this.state.vendorName)
            .then(res => {
                // console.log(res.data);
                this.setState( { 
                    // vendors: res.data,
                    // donations: res.data[0].Donations
                    data: res.data
                });
                console.log(this.state.data);
            })
            .catch(err => console.log(err));
    };

    searchByCity = (event) => {
        event.preventDefault();
        // console.log(this.state.vendorName);
        API.searchByCity(this.state.city)
        .then(res => {
            // console.log(res.data);
            this.setState( { 
                data: res.data,
                // vendors: res.data,
                // donations: res.data[0].Donations
            })
            // console.log(this.state.data);
        })
        .catch(err => console.log(err));
    };


    render() {

        return (
            <div>
                <h1>Search</h1>

                <form>
                    <label>Search by Vendor Name</label> <br></br>
                    <input
                        value={this.state.vendorName}
                        onChange={this.handleInputChange}
                        name="vendorName"
                        placeholder="Vendor Name"
                    />
                    <button onClick={this.searchByVendor}>
                        Search
                    </button>
                </form>

                <br></br>

                <form>
                    <label>Search by City</label> <br></br>
                    <input
                        value={this.state.city}
                        onChange={this.handleInputChange}
                        name="city"
                        placeholder="City"
                    />
                    <button onClick={this.searchByCity}>
                        Search
                    </button>
                </form>

                {/* <br></br>

                <form>
                    <label>Search by State</label> <br></br>
                    <input
                        value={this.state.state}
                        onChange={this.handleInputChange}
                        name="state"
                        placeholder="State"
                    />
                    <button onClick={this.searchByState}>
                        Search
                    </button>
                </form>


                <br></br>

                <form>
                    <label>Search by Donation Type</label> <br></br>
                    <input
                        value={this.state.donationType}
                        onChange={this.handleInputChange}
                        name="donationType"
                        placeholder="Donation Type"
                    />
                    <button onClick={this.searchByType}>
                        Search
                    </button>
                </form> */}

                <p>
                    <br></br>
                </p>

                <h3>Search Results</h3>

                <Table>
                    {this.state.data.map ( data => {
                        // console.log("Data Map: ", data);
                        // console.log("Vendor ID: ", data.id);
                        // console.log("Vendor Name: ", data.vendorName);
                        // console.log("Type: ", data.Donations[0].donationType);
                        // console.log("Type: ", data.Donations[0].note);
                        return <TableItem 
                            key={data.id}
                            vendorID={data.id}
                            vendorName={data.vendorName}
                            donationType={data.Donations[0].donationType}
                            note={data.Donations[0].note}
                        />
                    })}
                </Table>

            </div>
        )
    };
};

export default Search;