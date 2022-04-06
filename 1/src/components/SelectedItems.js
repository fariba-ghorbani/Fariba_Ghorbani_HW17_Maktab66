import React, { useContext } from 'react'
import Item from './Item'
import { SelectContext } from '../context/context';

const SelectedItems = () => {
	const context = useContext(SelectContext)

	return (
		<div className='selected-items'>
			<h2>Selected Items</h2>
			{context.selectedItems.map(item => {
            return (
                <Item 
                isSelectable={false}
                title={item.name}
                id={+(item.id)}
                handleCheck={() => context.getSelectedItems(item)}
                />
            )})}
		
		</div>
	)
}

export default SelectedItems;
