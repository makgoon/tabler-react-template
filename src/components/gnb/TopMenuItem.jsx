
function TopMenuItem({type, id, href, icon, title, active, dropdown}) {

    const Icon = icon;
    return (
        <li className={`nav-item ${active ? 'active' : ''}`}>
            <a className='nav-link' href={href}>
                <span className='nav-link-icon d-md-none d-lg-inline-block'>
                    <Icon />
                </span>
                <span className='nav-link-title'>{title}</span>

            </a>
        </li>
    )
}

export default TopMenuItem