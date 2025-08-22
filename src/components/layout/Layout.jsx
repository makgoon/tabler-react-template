import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import DashboardPage from '../page/DashboardPage'
import PageHeader from '../common/PageHeader'

function Layout() {
    const location = useLocation()

    // page setting(header + Wrapper)
    const getPageConfig = () => {
        switch (location.pathname) {
            case '/':
                return {
                    header: {
                        title: 'Dashboard',
                        preTitle: 'Overview',
                        buttons: [
                            { name: 'New view', className: 'btn-1', href: '#' },
                            { name: 'Create new report', className: 'btn-primary btn-5 d-none d-sm-inline-block', href: '#' },
                        ]
                    },
                    layout: {
                        layoutWrapperFull: false,
                        noContainer: false,
                        pageContainerCenterd: true,
                        pageContainerClass: '',
                        useRowDeck: true
                    }
                }
            default:
                return {
                    header: {
                        title: 'Page',
                        preTitle: '',
                        buttons: []
                    },
                    layout: {
                        layoutWrapperFull: false,
                        noContainer: false,
                        pageContainerCentered: false,
                        pageContainerClass: '',
                        useRowDeck: false
                    }
                }
        }
    }

    const pageConfig = getPageConfig()
    const { header, layout } = pageConfig

    // create dynamic page component
    const containerClass = `container-xl${layout.pageContainerCentered ? ' my-auto' : ''} ${layout.pageContainerClass ? `${layout.pageContainerClass}` : ''}`

    const renderContent = (content) => {
        if (layout.layoutWrapperFull) {
            // full screen layout : without container randering
            return content
        } else {
            // normal layout : with container randering
            if (layout.noContainer) {
                return content
            } else {
                return (
                    <div className={containerClass}>
                        {content}
                    </div>
                )
            }
        }
    }

    return (
        <div className='page-wrapper'>
            <PageHeader {...header} />

            {/* page content */}
            <div className='page-body'>
                {renderContent(
                    <Routes>
                    {/* 대시보드 페이지 */}
                    <Route path='/' element={<DashboardPage useRowDeck={layout.useRowDeck} />} />

                    </Routes>
                )}
            </div>
            {/* end content */}
        </div>
    )
}

export default Layout