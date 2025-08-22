// src/components/ActivityFeed.jsx
const activities = [
    {
      id: 1,
      user: 'Jeffie Lewzey',
      action: '새 프로젝트',
      target: 'Tabler React',
      verb: '생성했습니다',
      time: '10분 전',
      avatar: 'JL'
    },
    {
      id: 2,
      user: 'Mallory Hulme',
      action: '새 문서',
      target: 'API 가이드',
      verb: '업로드했습니다',
      time: '1시간 전',
      avatar: 'MH'
    },
    {
      id: 3,
      user: 'Dunn Slane',
      action: '프로젝트',
      target: 'Mobile App',
      verb: '업데이트했습니다',
      time: '2시간 전',
      avatar: 'DS'
    }
  ]
  
  function ActivityFeed() {
    return (
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">최근 활동</h3>
          </div>
          <div className="card-body">
            <div className="divide-y">
              {activities.map((activity) => (
                <div key={activity.id} className="row mb-3">
                  <div className="col-auto">
                    <span className="avatar">{activity.avatar}</span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>{activity.user}</strong>님이 {activity.action} <strong>{activity.target}</strong>를 {activity.verb}
                    </div>
                    <div className="text-muted">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default ActivityFeed