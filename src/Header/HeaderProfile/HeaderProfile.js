import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Avatar from '../../common/Avatar/Avatar';
import './HeaderProfile.scss';

function HeaderProfile() {

    const { user } = useContext(UserContext);

    return (
        <div className="HeaderProfile">
            <Avatar image="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" />
            <span className="headerUsername">
                { user.username }
            </span>
        </div>
    );
};

export default HeaderProfile;