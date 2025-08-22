// CardWrapper.jsx - Jekyll 스타일의 유연한 카드 래퍼
function CardWrapper({ 
    // 크기 관련
    size = 'lg-6', 
    
    // 카드 상태
    active = false,
    inactive = false,
    className = '',
    
    // 링크 기능
    link = false,
    href = '#',
    
    // 상태 바
    statusTop = null,
    statusBottom = null,
    statusLeft = null,
    
    // 헤더
    headerTitle = null,
    headerTabs = false,
    headerPills = false,
    headerActions = null,
    headerSubTitle = null,
    
    // 알림
    alert = null,
    alertType = 'success',
    
    // 푸터
    footer = null,
    footerButton = false,
    footerButtons = false,
    
    // 이미지
    imgTop = null,
    imgBottom = null,
    
    // 진행률
    progress = null,
    
    // 빈 카드
    empty = false,
    
    // 자식 컴포넌트
    children 
}) {
    // 크기 클래스 매핑
    const sizeClasses = {
        'lg-12': 'col-sm-12 col-lg-12',
        'lg-6': 'col-sm-12 col-lg-6',
        'lg-4': 'col-sm-12 col-lg-4',
        'lg-3': 'col-sm-12 col-lg-3'
    }
    
    // 카드 클래스 생성
    const cardClasses = [
        'card',
        active && 'card-active',
        inactive && 'card-inactive',
        className
    ].filter(Boolean).join(' ')
    
    // 상태 색상 매핑
    const getStatusClass = (status) => `card-status-${status.includes('-') ? status : `top bg-${status}`}`
    
    // 태그 선택 (링크 or div)
    const Tag = link ? 'a' : 'div'
    const tagProps = link ? { href } : {}
    
    return (
        <div className={sizeClasses[size]}>
            <Tag className={cardClasses} {...tagProps}>
                {/* 빈 카드 처리 */}
                {empty ? (
                    <div className="card-body text-center text-muted">
                        <p>Empty card</p>
                    </div>
                ) : (
                    <>
                        {/* 상단 이미지 */}
                        {imgTop && (
                            <img src={imgTop} className="card-img-top" alt="Card top" />
                        )}
                        
                        {/* 상태 바들 */}
                        {statusTop && (
                            <div className={`card-status-top bg-${statusTop}`}></div>
                        )}
                        {statusBottom && (
                            <div className={`card-status-bottom bg-${statusBottom}`}></div>
                        )}
                        {statusLeft && (
                            <div className={`card-status-start bg-${statusLeft}`}></div>
                        )}
                        
                        {/* 헤더 */}
                        {(headerTitle || headerTabs || headerPills || headerActions) && (
                            <div className="card-header">
                                {headerTabs ? (
                                    <ul className="nav nav-tabs card-header-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Tab 1</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Tab 2</a>
                                        </li>
                                    </ul>
                                ) : headerPills ? (
                                    <ul className="nav nav-pills card-header-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Pill 1</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Pill 2</a>
                                        </li>
                                    </ul>
                                ) : (
                                    <div>
                                        <h3 className="card-title">{headerTitle}</h3>
                                        {headerSubTitle && (
                                            <p className="card-subtitle">{headerSubTitle}</p>
                                        )}
                                        {headerActions && (
                                            <div className="card-actions ms-auto">
                                                {headerActions}
                                            </div>
                                        )}
                                    </div>
                                    
                                    
                                )}
                            </div>
                        )}
                        
                        {/* 알림 */}
                        {alert && (
                            <div className={`card-alert alert alert-${alertType} mb-0`}>
                                {alert}
                            </div>
                        )}
                        
                        {/* 카드 본문 */}
                        <div className="card-body">
                            {children}
                        </div>
                        
                        {/* 푸터 */}
                        {(footer || footerButton || footerButtons) && (
                            <div className="card-footer">
                                {footerButton ? (
                                    <button className="btn btn-primary">Go somewhere</button>
                                ) : footerButtons ? (
                                    <div className="d-flex">
                                        <button className="btn btn-link">Cancel</button>
                                        <button className="btn btn-primary ms-auto">Save</button>
                                    </div>
                                ) : (
                                    footer
                                )}
                            </div>
                        )}
                        
                        {/* 하단 이미지 */}
                        {imgBottom && (
                            <img src={imgBottom} className="card-img-bottom" alt="Card bottom" />
                        )}
                        
                        {/* 진행률 */}
                        {progress && (
                            <div className="progress progress-sm card-progress">
                                <div 
                                    className="progress-bar" 
                                    style={{width: `${progress}%`}}
                                    role="progressbar"
                                    aria-valuenow={progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                        )}
                    </>
                )}
            </Tag>
        </div>
    )
}

export default CardWrapper

// 사용 예시들
/*

// 기본 카드
<CardWrapper size="lg-4">
    <SalesCard />
</CardWrapper>

// 헤더와 액션이 있는 카드
<CardWrapper 
    size="lg-6" 
    headerTitle="Dashboard Stats"
    headerActions={<button className="btn btn-sm btn-primary">Refresh</button>}
>
    <SalesCard />
</CardWrapper>

// 상태바가 있는 활성 카드
<CardWrapper 
    size="lg-3" 
    statusTop="success" 
    active={true}
>
    <UsersCard />
</CardWrapper>

// 링크 카드
<CardWrapper 
    size="lg-4" 
    link={true} 
    href="/analytics"
>
    <RevenueCard />
</CardWrapper>

// 알림이 있는 카드
<CardWrapper 
    size="lg-6" 
    alert="Data updated successfully!"
    alertType="success"
>
    <MarketingCard />
</CardWrapper>

// 푸터 버튼이 있는 카드
<CardWrapper 
    size="lg-4" 
    footerButton={true}
>
    <OrdersCard />
</CardWrapper>

// 탭이 있는 카드
<CardWrapper 
    size="lg-12" 
    headerTabs={true}
>
    <AnalyticsChart />
</CardWrapper>

*/