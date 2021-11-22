import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Avatar from '../../common/Avatar/Avatar';
import './HeaderProfile.scss';
import { Link } from 'react-router-dom';

function HeaderProfile() {

    const { user } = useContext(UserContext);

    return (
        <Link to={`/profile/${user.username}`}>
            <div className="HeaderProfile">
                <Avatar image="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" />
                <span className="headerUsername">
                    { user.username }
                </span>
            </div>
        </Link>
    );
};

export default HeaderProfile;