import React from "react";

export const ContactInfo = (props) => {

    if (props.address || props.city || props.state || props.zip || props.phone || props.email ) {
        return (

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
                        <td>{props.address}</td>
                        <td>{props.city}</td>
                        <td>{props.state}</td>
                        <td>{props.zip}</td>
                        <td>{props.phone}</td>
                        <td>{props.email}</td>
                    </tr>
                </tbody>
            </table>
    
        );
    } else {
        return (
            
            <p>No contact info.</p>

        )
    }


};

export default ContactInfo;