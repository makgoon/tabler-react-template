import Button from './Button'
function PageHeader({ title, preTitle, button, buttons }) {
    const buttonList = buttons || (button ? [button]: [])
    return (
        <div className='page-header d-print-none' aria-label='Page header'>
            <div className='container-xl'>
                <div className='row g-2 align-items-center'>
                    <div className='col'>
                        {preTitle && <div className='page-pretitle'>{preTitle}</div>}
                        <h2 className='page-title'>{title}</h2>
                    </div>
                    {buttonList.length > 0 && 
                        <div className='col-auto ms-auto d-print-none'>
                            <div className='btn-list'>  
                                {buttonList.map((btn, index) => (
                                    <Button key={index} name={btn.name} className={btn.className} href={btn.href} />
                                ))}                
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}   

export default PageHeader