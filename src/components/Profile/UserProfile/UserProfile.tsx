import React from 'react';
import NumberOfCards from '../../NumberOfCards/NumberOfCards';
import PacksList from '../../Packs/PacksList/PacksList';
import "../../Registration/Registration.css"
import ProfileInfo from './ProfileInfo/ProfileInfo';
import "./UserProfile.css"

const UserProfile = () => {
    return (
        <div className="profileWrapper">
            <div className="left">
                <ProfileInfo/>
                <NumberOfCards/>
            </div>
            <div className="right">
                <PacksList/>
            </div>
        </div>
    );
};

export default UserProfile;