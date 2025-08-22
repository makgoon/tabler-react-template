function Button({ name, className, href }) {
    return (
        <button className={`btn ${className}`} href={href}>
            {name}
        </button>
    )
}

export default Button
