import { 
    IconBrandGithub, 
    IconHeart, 
    IconMoon, 
    IconSun, 
    IconBell, 
    IconApps,
    IconSettings,
    IconStar
  } from '@tabler/icons-react'
  import ThemeToggle from '../dark-mode/ThemeToggle'
  
  function Header() {
    const brands = [
      { name: 'Amazon', icon: 'amazon.svg' },
      { name: 'Android', icon: 'android.svg' },
      { name: 'Apple App Store', icon: 'app-store.svg' },
      { name: 'Apple Podcast', icon: 'apple-podcast.svg' },
      { name: 'Apple', icon: 'apple.svg' },
      { name: 'Behance', icon: 'behance.svg' },
      { name: 'Discord', icon: 'discord.svg' },
      { name: 'Dribbble', icon: 'dribbble.svg' },
      // 필요한 만큼 추가...
    ]
  
    const notifications = [
      {
        id: 1,
        title: 'Example 1',
        description: 'Change deprecated html tags to text decoration classes (#29604)',
        status: 'red',
        starred: false
      },
      {
        id: 2,
        title: 'Example 2', 
        description: 'justify-content:between ⇒ justify-content:space-between (#29734)',
        status: 'default',
        starred: true
      },
      {
        id: 3,
        title: 'Example 3',
        description: 'Update change-version.js (#29736)',
        status: 'default',
        starred: false
      },
      {
        id: 4,
        title: 'Example 4',
        description: 'Regenerate package-lock.json (#29730)',
        status: 'green',
        starred: false
      }
    ]
  
    return (
      <header className="navbar navbar-expand-md d-print-none">
        <div className="container-xl">
          
          {/* 네비게이션 토글 버튼 */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbar-menu" 
            aria-controls="navbar-menu" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* 로고 */}
          <div className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <a href="." aria-label="Tabler">
              <svg xmlns="http://www.w3.org/2000/svg" width="110" height="32" viewBox="0 0 232 68" className="navbar-brand-image">
                <path d="M64.6 16.2C63 9.9 58.1 5 51.8 3.4 40 1.5 28 1.5 16.2 3.4 9.9 5 5 9.9 3.4 16.2 1.5 28 1.5 40 3.4 51.8 5 58.1 9.9 63 16.2 64.6c11.8 1.9 23.8 1.9 35.6 0C58.1 63 63 58.1 64.6 51.8c1.9-11.8 1.9-23.8 0-35.6zM33.3 36.3c-2.8 4.4-6.6 8.2-11.1 11-1.5.9-3.3.9-4.8.1s-2.4-2.3-2.5-4c0-1.7.9-3.3 2.4-4.1 2.3-1.4 4.4-3.2 6.1-5.3-1.8-2.1-3.8-3.8-6.1-5.3-2.3-1.3-3-4.2-1.7-6.4s4.3-2.9 6.5-1.6c4.5 2.8 8.2 6.5 11.1 10.9 1 1.4 1 3.3.1 4.7zM49.2 46H37.8c-2.1 0-3.8-1-3.8-3s1.7-3 3.8-3h11.4c2.1 0 3.8 1 3.8 3s-1.7 3-3.8 3z" fill="#066fd1" style={{fill: 'var(--tblr-primary, #066fd1)'}} />
                <path d="M105.8 46.1c.4 0 .9.2 1.2.6s.6 1 .6 1.7c0 .9-.5 1.6-1.4 2.2s-2 .9-3.2.9c-2 0-3.7-.4-5-1.3s-2-2.6-2-5.4V31.6h-2.2c-.8 0-1.4-.3-1.9-.8s-.9-1.1-.9-1.9c0-.7.3-1.4.8-1.8s1.2-.7 1.9-.7h2.2v-3.1c0-.8.3-1.5.8-2.1s1.3-.8 2.1-.8 1.5.3 2 .8.8 1.3.8 2.1v3.1h3.4c.8 0 1.4.3 1.9.8s.8 1.2.8 1.9-.3 1.4-.8 1.8-1.2.7-1.9.7h-3.4v13c0 .7.2 1.2.5 1.5s.8.5 1.4.5c.3 0 .6-.1 1.1-.2.5-.2.8-.3 1.2-.3zm28-20.7c.8 0 1.5.3 2.1.8.5.5.8 1.2.8 2.1v20.3c0 .8-.3 1.5-.8 2.1-.5.6-1.2.8-2.1.8s-1.5-.3-2-.8-.8-1.2-.8-2.1c-.8.9-1.9 1.7-3.2 2.4-1.3.7-2.8 1-4.3 1-2.2 0-4.2-.6-6-1.7-1.8-1.1-3.2-2.7-4.2-4.7s-1.6-4.3-1.6-6.9c0-2.6.5-4.9 1.5-6.9s2.4-3.6 4.2-4.8c1.8-1.1 3.7-1.7 5.9-1.7 1.5 0 3 .3 4.3.8 1.3.6 2.5 1.3 3.4 2.1 0-.8.3-1.5.8-2.1.5-.5 1.2-.7 2-.7zm-9.7 21.3c2.1 0 3.8-.8 5.1-2.3s2-3.4 2-5.7-.7-4.2-2-5.8c-1.3-1.5-3-2.3-5.1-2.3-2 0-3.7.8-5 2.3-1.3 1.5-2 3.5-2 5.8s.6 4.2 1.9 5.7 3 2.3 5.1 2.3zm32.1-21.3c2.2 0 4.2.6 6 1.7 1.8 1.1 3.2 2.7 4.2 4.7s1.6 4.3 1.6 6.9-.5 4.9-1.5 6.9-2.4 3.6-4.2 4.8c-1.8 1.1-3.7 1.7-5.9 1.7-1.5 0-3-.3-4.3-.9s-2.5-1.4-3.4-2.3v.3c0 .8-.3 1.5-.8 2.1-.5.6-1.2.8-2.1.8s-1.5-.3-2.1-.8c-.5-.5-.8-1.2-.8-2.1V18.9c0-.8.3-1.5.8-2.1.5-.6 1.2-.8 2.1-.8s1.5.3 2.1.8c.5.6.8 1.3.8 2.1v10c.8-1 1.8-1.8 3.2-2.5 1.3-.7 2.8-1 4.3-1zm-.7 21.3c2 0 3.7-.8 5-2.3s2-3.5 2-5.8-.6-4.2-1.9-5.7-3-2.3-5.1-2.3-3.8.8-5.1 2.3-2 3.4-2 5.7.7 4.2 2 5.8c1.3 1.6 3 2.3 5.1 2.3zm23.6 1.9c0 .8-.3 1.5-.8 2.1s-1.3.8-2.1.8-1.5-.3-2-.8-.8-1.3-.8-2.1V18.9c0-.8.3-1.5.8-2.1s1.3-.8 2.1-.8 1.5.3 2 .8.8 1.3.8 2.1v29.7zm29.3-10.5c0 .8-.3 1.4-.9 1.9-.6.5-1.2.7-2 .7h-15.8c.4 1.9 1.3 3.4 2.6 4.4 1.4 1.1 2.9 1.6 4.7 1.6 1.3 0 2.3-.1 3.1-.4.7-.2 1.3-.5 1.8-.8.4-.3.7-.5.9-.6.6-.3 1.1-.4 1.6-.4.7 0 1.2.2 1.7.7s.7 1 .7 1.7c0 .9-.4 1.6-1.3 2.4-.9.7-2.1 1.4-3.6 1.9s-3 .8-4.6.8c-2.7 0-5-.6-7-1.7s-3.5-2.7-4.6-4.6-1.6-4.2-1.6-6.6c0-2.8.6-5.2 1.7-7.2s2.7-3.7 4.6-4.8 3.9-1.7 6-1.7 4.1.6 6 1.7 3.4 2.7 4.5 4.7c.9 1.9 1.5 4.1 1.5 6.3zm-12.2-7.5c-3.7 0-5.9 1.7-6.6 5.2h12.6v-.3c-.1-1.3-.8-2.5-2-3.5s-2.5-1.4-4-1.4zm30.3-5.2c1 0 1.8.3 2.4.8.7.5 1 1.2 1 1.9 0 1-.3 1.7-.8 2.2-.5.5-1.1.8-1.8.7-.5 0-1-.1-1.6-.3-.2-.1-.4-.1-.6-.2-.4-.1-.7-.1-1.1-.1-.8 0-1.6.3-2.4.8s-1.4 1.3-1.9 2.3-.7 2.3-.7 3.7v11.4c0 .8-.3 1.5-.8 2.1-.5.6-1.2.8-2.1.8s-1.5-.3-2.1-.8c-.5-.6-.8-1.3-.8-2.1V28.8c0-.8.3-1.5.8-2.1.5-.6 1.2-.8 2.1-.8s1.5.3 2.1.8c.5.6.8 1.3.8 2.1v.6c.7-1.3 1.8-2.3 3.2-3 1.3-.7 2.8-1 4.3-1z" fillRule="evenodd" clipRule="evenodd" fill="#4a4a4a"/>
              </svg>
            </a>
          </div>
  
          {/* 우측 네비게이션 */}
          <div className="navbar-nav flex-row order-md-last">
            
            {/* 액션 버튼들 */}
            <div className="nav-item d-none d-md-flex me-3">
              <div className="btn-list">
                <a href="https://github.com/tabler/tabler" className="btn btn-5" target="_blank" rel="noreferrer">
                  <IconBrandGithub className="icon icon-2" size={16} />
                  Source code
                </a>
                <a href="https://github.com/sponsors/codecalm" className="btn btn-6" target="_blank" rel="noreferrer">
                  <IconHeart className="icon text-pink icon-2" size={16} />
                  Sponsor
                </a>
              </div>
            </div>
  
            {/* 테마 토글 */}
            <div className="d-none d-md-flex">
              <ThemeToggle />
              {/* <div className="nav-item">
                <a href="?theme=dark" className="nav-link px-0 hide-theme-dark" title="Enable dark mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
                  <IconMoon size={24} />
                </a>
                <a href="?theme=light" className="nav-link px-0 hide-theme-light" title="Enable light mode" data-bs-toggle="tooltip" data-bs-placement="bottom">
                  <IconSun size={24} />
                </a>
              </div> */}
  
              {/* 알림 드롭다운 */}
              <div className="nav-item dropdown d-none d-md-flex">
                <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show notifications">
                  <IconBell size={24} />
                  <span className="badge bg-red"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                  <div className="card">
                    <div className="card-header d-flex">
                      <h3 className="card-title">Notifications</h3>
                      <div className="btn-close ms-auto" data-bs-dismiss="dropdown"></div>
                    </div>
                    <div className="list-group list-group-flush list-group-hoverable">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="list-group-item">
                          <div className="row align-items-center">
                            <div className="col-auto">
                              <span className={`status-dot ${notification.status === 'red' ? 'status-dot-animated bg-red' : notification.status === 'green' ? 'status-dot-animated bg-green' : ''} d-block`}></span>
                            </div>
                            <div className="col text-truncate">
                              <a href="#" className="text-body d-block">{notification.title}</a>
                              <div className="d-block text-secondary text-truncate mt-n1">
                                {notification.description}
                              </div>
                            </div>
                            <div className="col-auto">
                              <a href="#" className={`list-group-item-actions ${notification.starred ? 'show' : ''}`}>
                                <IconStar size={16} className={`icon ${notification.starred ? 'text-yellow' : 'text-muted'}`} />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <a href="#" className="btn btn-outline-primary w-100">Archive all</a>
                        </div>
                        <div className="col">
                          <a href="#" className="btn btn-outline-primary w-100">Mark all as read</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* 앱 메뉴 드롭다운 */}
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex="-1" aria-label="Show app menu">
                  <IconApps size={24} />
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                  <div className="card">
                    <div className="card-header">
                      <div className="card-title">My Apps</div>
                      <div className="card-actions btn-actions">
                        <a href="#" className="btn-action">
                          <IconSettings size={16} />
                        </a>
                      </div>
                    </div>
                    <div className="card-body scroll-y p-2" style={{maxHeight: '50vh'}}>
                      <div className="row g-0">
                        {brands.map((brand, index) => (
                          <div key={index} className="col-4">
                            <a href="#" className="d-flex flex-column flex-center text-center text-secondary py-2 px-2 link-hoverable">
                              <div className="w-6 h-6 mx-auto mb-2 bg-secondary rounded" style={{width: '24px', height: '24px'}}></div>
                              <span className="h5">{brand.name}</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* 사용자 드롭다운 */}
            <div className="nav-item dropdown">
              <a href="#" className="nav-link d-flex lh-1 p-0 px-2" data-bs-toggle="dropdown" aria-label="Open user menu">
                <span className="avatar avatar-sm" style={{backgroundImage: 'url(https://preview.tabler.io/static/avatars/000m.jpg)'}}></span>
                <div className="d-none d-xl-block ps-2">
                  <div>Paweł Kuna</div>
                  <div className="mt-1 small text-secondary">UI Designer</div>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <a href="#" className="dropdown-item">Status</a>
                <a href="#" className="dropdown-item">Profile</a>
                <a href="#" className="dropdown-item">Feedback</a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">Settings</a>
                <a href="#" className="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header