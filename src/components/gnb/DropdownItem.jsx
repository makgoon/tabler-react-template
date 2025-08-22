function DropdownItem({ item, level = 0 }) {
    if (item.dropdown && item.children) {
        // 중첩 드롭다운인 경우
        return (
            <div className="dropend" key={item.id}>
                <a 
                    className="dropdown-item dropdown-toggle" 
                    href={item.href || `#sidebar-${item.id}`}
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    role="button"
                    aria-expanded="false"
                >
                    {item.title}
                    {item.badge && (
                        <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                            {item.badge}
                        </span>
                    )}
                </a>
                <div className="dropdown-menu">
                    {item.children.map((child, index) => (
                        <DropdownItem key={child.id || index} item={child} level={level + 1} />
                    ))}
                </div>
            </div>
        );
    } else {
        // 일반 링크인 경우
        return (
            <a className="dropdown-item" key={item.id} href={item.href}>
                {item.title}
                {item.badge && (
                    <span className="badge badge-sm bg-green-lt text-uppercase ms-auto">
                        {item.badge}
                    </span>
                )}
            </a>
        );
    }
}

export default DropdownItem;