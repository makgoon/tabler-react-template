function PageHeader({ pretitle, title, actions = [] }) {
    return (
      <div className="page-header d-print-none">
        <div className="container-xl">
          <div className="row g-2 align-items-center">
            <div className="col">
              {pretitle && (
                <div className="page-pretitle">{pretitle}</div>
              )}
              <h2 className="page-title">{title}</h2>
            </div>
            
            {actions.length > 0 && (
              <div className="col-auto ms-auto d-print-none">
                <div className="btn-list">
                  {actions.map((action, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className={`btn btn-${action.variant} ${action.className || ''}`}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
  
  export default PageHeader