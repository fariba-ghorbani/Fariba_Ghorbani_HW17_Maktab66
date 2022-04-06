import React from 'react'
import PropTypes from 'prop-types';


const Item = (props) => {
  return (
        <React.Fragment>
        {props.isSelectable?
        <div className='item'>
            <input
            type="checkbox"
            id={props.id}
            name={props.title}
            onChange={props.handleCheck}
            />
            <label className='selectable' htmlFor={props.id}>{props.title}</label>
        </div>
        : <div className='item'>
            <label>{props.title}</label>
        </div>}
        </React.Fragment>
  )
}

export default Item;

Item.propTypes = {
    isSelectable: PropTypes.bool,
    title: PropTypes.string,
    id: PropTypes.number,
    handleCheck: PropTypes.func,
}
