function CardDropdown({ 
    // basic props
    value = null,
    label = 'Select option',
    
    // dropdown items
    items = [],
    selectedIndex = 0,
    onSelect = () => {},
    
    // style props
    className = ''

 }) {

        // selected item
        const selectedItem = items[selectedIndex]
        const displayValue = value || selectedItem?.text || 'Current month'
        
        const handleItemClick = (item, index, event) => {
            event.preventDefault()
            onSelect(item, index)
        }

    return (
        <div className={`dropdown${className ? ` ${className}` : ''}`}>
            <a 
                className="dropdown-toggle text-secondary"
                href="#" 
                data-bs-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
                aria-label={label}
            >
                {displayValue}
            </a>
            <div className="dropdown-menu dropdown-menu-end">
                {items.map((item, index) => (
                    <a 
                        key={index}
                        className={`dropdown-item${index === selectedIndex ? ' active' : ''}`}
                        href="#"
                        aria-current={index === selectedIndex ? 'true' : undefined}
                        onClick={(e) => handleItemClick(item, index, e)}
                    >
                        {item.text || item}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default CardDropdown