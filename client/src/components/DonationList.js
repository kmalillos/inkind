import React, { Component } from "react";
import API from "../utils/API";
import { DonationTable, DonationTableItem } from "../components/DonationTable";

class DonationList extends Component {
    state = {
        donations: []
    };

    componentDidMount() {
        this.findAllDonations();
    };

    findAllDonations = () => {
        API.findAllDonations()
            // .then(res => console.log(res.data))
            .then(res =>{
                console.log(res.data);
                this.setState({
                    donations: res.data
                })
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>

                <h1>All Donations</h1>

                <DonationTable>
                    {this.state.donations.map(donation => {
                        // console.log(donation);
                        return <DonationTableItem 
                            key={donation.id}
                            // vendorName={donation.vendorName}
                            donationType={donation.donationType}
                            note={donation.note}
                            date={donation.date}
                            donationValue={donation.donationValue}
                        />
                    })}
                </DonationTable>

            </div>
        );
    }
};

export default DonationList;