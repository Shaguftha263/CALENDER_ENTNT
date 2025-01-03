
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Calendar App for ENTNT</h1>
            <p>Created by Shaguftha</p>
            <nav>
                <Link to="/admin">Admin</Link> | <Link to="/user">User</Link>
            </nav>
        </div>
    );
};

export default App;
