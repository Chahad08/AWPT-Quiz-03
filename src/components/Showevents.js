import React, { useState } from 'react';
import Eventdata from '../Data/Eventdata';
import Events from './Events';
const Showevents = () => {
    const ED = Eventdata //The Values will come from Eventdata file
    const [Event]=useState(ED)
    
    return (
        <div>
            
            <div className="row">
                <div className="title">
                    <h2>All Events</h2>
                </div>
                {
                    Event.map(key=><Events show={key}></Events>)
                }
            </div>
        </div>
    );
};

export default Showevents;