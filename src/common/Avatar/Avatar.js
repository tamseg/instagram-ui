import React from 'react';
import './Avatar.scss';

function Avatar(props) {
    return (
        <div className="Avatar">
            <img  src={props.image} alt="" className="Avatar__image" />
        </div>
    );
}

export default Avatar;