import React from 'react';
import PropTypes from "prop-types";
const ListItem = ({list}) => {

    return (
        <div>
            <li>{list}</li>
        </div>
    );
};

ListItem.propTypes = {
    list: PropTypes.object.isRequired
}
export default ListItem;