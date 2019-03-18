import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {

    render() {
        return (
            <div>
                <h1>In-Kind Collector</h1>

                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">All</h5>
                            <p className="card-text">List all vendors and donations.</p>
                            <Link to="/all" class="btn btn-primary">Go to All</Link>
                        </div>
                </div>

                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Search</h5>
                            <p className="card-text">Search by vendor, location, or donation type.</p>
                            <Link to="/all" class="btn btn-primary">Go to All</Link>
                        </div>
                </div>

                <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">Add</h5>
                            <p className="card-text">Add a new vendor.</p>
                            <Link to="/all" class="btn btn-primary">Go to All</Link>
                        </div>
                </div>

            </div>
        )
    }
}
        
export default Home;