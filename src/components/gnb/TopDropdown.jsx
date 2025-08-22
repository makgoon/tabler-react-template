import DropdownItem from './DropdownItem';

function TopDropdown({href, title, icon, active, children =[]}) {
    const Icon = icon;

        // 아이템들을 2개 컬럼으로 나누기
        const midPoint = Math.ceil(children.length / 2);
        const firstColumn = children.slice(0, midPoint);
        const secondColumn = children.slice(midPoint);

    return (
        <li className={`nav-item ${active ? 'active' : ''} dropdown`}>
            <a className='nav-link dropdown-toggle' href={href} data-bs-toggle="dropdown" data-bs-auto-close="outside" role="button" aria-expanded="false">
                <span className='nav-link-icon d-md-none d-lg-inline-block'>
                    <Icon />
                </span>
                <span className='nav-link-title'>{title}</span>

            </a>
            <div className="dropdown-menu">
                <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                        {firstColumn.map((item, index) => (
                            <DropdownItem key={item.id || index} item={item} />
                        ))}
                    </div>
                    {secondColumn.length > 0 && (
                        <div className="dropdown-menu-column">
                            {secondColumn.map((item, index) => (
                                <DropdownItem key={item.id || index} item={item} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </li>
    )
}

export default TopDropdown;