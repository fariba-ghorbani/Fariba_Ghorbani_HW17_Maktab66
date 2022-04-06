import AllItems from './components/AllItems'
import { useEffect, useState } from 'react';
import { SelectContext } from './context/context';
import SelectedItems from './components/SelectedItems';

function App() {
    const [selectedItems, setSelectedItems] = useState([])
    
    const getSelectedItems = (item) => {
		setSelectedItems(prevState => {
			if (prevState.includes(item)) {
				return prevState.filter(obj => obj !== item)
			} else {
				return [...prevState, item]
			}
		})
    }

    
    return (
      <div className="App App-header">
		<SelectContext.Provider 
		value={{selectedItems: selectedItems, 
		getSelectedItems: getSelectedItems}}
		>
			<AllItems />
			<SelectedItems />
		</SelectContext.Provider>
      </div>
    );
}

export default App;
