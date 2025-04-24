import React from 'react';

const ErrorPage = () => {
    return (
        <div>
           <h1>No Doctor Found</h1>
           <p>No Doctor Found with this registration Number:</p>
           <Link to='/'><button className="btn btn-primary">Book an Appointment</button></Link>
        </div>
    );
};

export default ErrorPage;