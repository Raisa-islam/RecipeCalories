import React from 'react';
import PropTypes from "prop-types";
const ListItem = ({list}) => {

    return (
        <div>
            <li className='text-[#878787] text-[16px] font-normal'>{list}</li>
        </div>
    );
};

ListItem.propTypes = {
    list: PropTypes.object.isRequired
}
export default ListItem;