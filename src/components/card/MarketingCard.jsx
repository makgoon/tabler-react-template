import { IconTrendingUp, IconTrendingDown } from '@tabler/icons-react'

function MarketingCard() {
    return (
            <div className="row gy-3">
                <div className="col-12 col-sm d-flex flex-column">
                    <h3 className="h2">Welcome back, Paweł</h3>
                    <p className="text-muted">You have 5 new messages and 2 new notifications.</p>

                    <div className="row g-5 mt-auto">
                        <div className="col-auto">
                            <div className="subheader">Today's Sales</div>
                            <div className="d-flex align-items-baseline">
                                <div className="h3 me-2">6,782</div>
                                <div className="me-auto">
                                    <span className="text-green d-inline-flex align-items-center lh-1">
                                        7%
                                        <IconTrendingUp className="icon ms-1 icon-2" size={24} />
                                    </span>
                                </div>
                            </div>

                            <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-success"
                                    style={{width: '75%'}}
                                    role="progressbar"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-label="75% Complete"
                                >
                                    <span className="visually-hidden">75% Complete</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="subheader">Growth Rate</div>
                            <div className="d-flex align-items-baseline">
                                <div className="h3 me-2">78,4%</div>
                                <div className="me-auto">
                                    <span className="text-red d-inline-flex align-items-center lh-1">
                                        -1%
                                        <IconTrendingDown className="icon ms-1 icon-2" size={24} />
                                    </span>
                                </div>
                            </div>

                            <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-danger"
                                    style={{width: '78%'}}
                                    role="progressbar"
                                    aria-valuenow="78"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-label="78% Complete"
                                >
                                    <span className="visually-hidden">78% Complete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-sm-auto d-flex justify-content-center">
                    <a href="./illustrations.html">
                        <svg xmlns="http://www.w3.org/2000/svg" height="200" fill="none" viewBox="0 0 800 600">
                            <style>
                                {`:where(.theme-dark, [data-theme="dark"]) .tblr-illustrations-good-info-a {
                                    fill: black;
                                    opacity: 0.07;
                                }

                                :where(.theme-dark, [data-theme="dark"]) .tblr-illustrations-good-info-b {
                                    fill: #1d2535;
                                }

                                :where(.theme-dark, [data-theme="dark"]) .tblr-illustrations-good-info-c {
                                    fill: #454c5e;
                                }

                                @media (prefers-color-scheme: dark) {
                                    .tblr-illustrations-good-info-a {
                                        fill: black;
                                        opacity: 0.07;
                                    }

                                    .tblr-illustrations-good-info-b {
                                        fill: #1d2535;
                                    }

                                    .tblr-illustrations-good-info-c {
                                        fill: #454c5e;
                                    }
                                }`}
                            </style>
                            {/* SVG content would go here */}
                        </svg>
                    </a>
                </div>
            </div>
    )
}

export default MarketingCard