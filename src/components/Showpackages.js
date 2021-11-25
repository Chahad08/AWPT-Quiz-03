import React, { useState } from 'react';
import Packagedata from '../Data/Packagedata';
import Packages from './Packages';
const Showpackages = () => {
    const PD= Packagedata //The Values will come from Packagedata file
    const [packages]=useState(PD)
    
    return (
        <div>
            
            <div className="">
                <div className="title">
                    <h2>All Packages</h2>
                </div>
                    {
                        packages.map(key=><Packages show={key}></Packages>)
                    }
            </div>
        </div>
    );
    
};

export default Showpackages;