import React from 'react';

const UserCaches = (props) => {
    return (
        <div className="userCacheDisplay">
            <div className="field" />
            USER PROFILE: {props.cache.name}
        </div>
    )
}

// class UserCaches extends Component {
//     render() {
//         return(
//             <div>
//                 USER PROFILE: CACHES card:
//                 list of caches 
//             </div>
//         )
//     }

// }
export default UserCaches;