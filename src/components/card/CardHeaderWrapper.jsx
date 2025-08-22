import CardDropdown from '../common/Dropdown'
import { useState } from 'react'

function CardHeaderWrapper({ 
    // header title
    subHeaderTitle = null, 
    
    // dropdown
    dropdown = null,

    // children
    children 

}) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    
    return (
        <div className="d-flex align-items-center">
            {subHeaderTitle && (
                <div className="subheader">{subHeaderTitle}</div>
            )}
            {dropdown && (
                <div className="ms-auto lh-1">
                    <CardDropdown 
                        //value={dropdown.value}
                        items={dropdown.items}
                        selectedIndex={selectedIndex}
                        onSelect={dropdown.onSelect}
                    />
                </div>
            )}
        </div>
    )
}

export default CardHeaderWrapper