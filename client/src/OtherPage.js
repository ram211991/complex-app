import React from 'react';
import { Link } from 'react-outer-dom';

export default() => {
    return (
        <div>
            In some other page!
            <Link to="/">Go Back to Home Page</Link>
        </div>
    );
};