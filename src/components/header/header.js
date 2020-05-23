import React from 'react';
import { container } from "reactstrap";
import Iam from "../../components/iam/Iam";
import "./header.css"

function Header() {
    return (
        <container>
            <div className="header">
                <Iam />
            </div>
        </container>
    )
}

export default Header; 