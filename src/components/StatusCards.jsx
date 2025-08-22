// src/components/StatsCards.jsx
const statsData = [
    {
      title: '총 판매',
      value: '75%',
      subtitle: '전환율',
      change: '+7%',
      changeType: 'positive',
      progress: 75,
      progressColor: 'primary',
      period: '지난 7일'
    },
    {
      title: '수익',
      value: '$1,352',
      subtitle: '지난달 대비',
      change: '+2.9%',
      changeType: 'positive',
      progress: 84,
      progressColor: 'success'
    },
    {
      title: '신규 고객',
      value: '6,782',
      subtitle: '어제 대비',
      change: '-3%',
      changeType: 'negative',
      progress: 67,
      progressColor: 'warning'
    },
    {
      title: '온라인 방문자',
      value: '2,986',
      subtitle: '실시간',
      change: '+4.7%',
      changeType: 'positive',
      progress: 89,
      progressColor: 'info'
    }
  ]
  
  function StatsCards() {
    return (
      <>
        {statsData.map((stat, index) => (
          <div key={index} className="col-sm-6 col-lg-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="subheader">{stat.title}</div>
                  {stat.period && (
                    <div className="ms-auto lh-1">
                      <div className="dropdown">
                        <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown">
                          {stat.period}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div className="h1 mb-3">{stat.value}</div>
                <div className="d-flex mb-2">
                  <div>{stat.subtitle}</div>
                  <div className="ms-auto">
                    <span className={`text-${stat.changeType === 'positive' ? 'green' : 'red'} d-inline-flex align-items-center lh-1`}>
                      {stat.change} {stat.changeType === 'positive' ? '↗' : '↓'}
                    </span>
                  </div>
                </div>
                <div className="progress progress-sm">
                  <div 
                    className={`progress-bar bg-${stat.progressColor}`} 
                    style={{width: `${stat.progress}%`}} 
                    role="progressbar"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </>
    )
  }
  
  export default StatsCards