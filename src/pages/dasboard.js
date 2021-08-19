import React from 'react'
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Link className="button" to="/students">Students</Link>
            <Link to="/register">Register</Link>
        </div>
    );
}
