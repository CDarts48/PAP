import React from 'react';
import './homePageM.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tebo from "/Users/corey/Desktop/PAP/client/public/Tebo.png";

const HomePage = () => {
    return (
        <div className="over">
            <div className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="nav navbar-nav">
                            <div className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link" href="owner/home/about">About</a>
                            </div>
                            <div className="nav-item">
                                <a className="nav-link" href="owner/login">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron">
                <div className="contain text-center">
                    <img src={Tebo} alt="Tebo" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
            <div className="container" style={{ paddingLeft: '5px' }}>
                <a className="btn btn-outline-primary btn-lg" href="/home/tenantlist">Manage Tenants</a>
                <a className="btn btn-outline-primary btn-lg" href="/home/Tebo/propertylist">Manage Properties</a>
                <a className="btn btn-outline-primary btn-lg" href="/home/registrationlist">Registrations</a>
                <a className="btn btn-outline-primary btn-lg" href="/home/loanlist">Loans</a>
            </div>
        </div>
    );
};

export default HomePage;