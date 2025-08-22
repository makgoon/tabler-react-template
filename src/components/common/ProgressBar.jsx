import { IconExposure } from "@tabler/icons-react"

function ProgressBar({
    // default value
    value = null,

    //color
    color = null,
    colors = null,

    // size and style
    size = null,
    class: customClass = '',
    width = null,

    //mode
    indeterminate = false,
    values = null,
    'show-value': showValue = false
}) {
    // percentage calculation
    // default value is 38
    const percentage = value ? (typeof value === 'string' ? value.replace('%', '') : value) : 38

    // colers array settings
    const colorArray = colors ? 
    colors.split(',') : 
    (color ? [color] : ['blue', 'red', 'green', 'yellow', 'dark'])

    // progress class settings
    let progressClasses = 'progress'
    if (size) progressClasses += ` progress-${size}`
    if (customClass) progressClasses += ` ${customClass}`
    
    // style props
    const progressStyle = width ? { width } : undefined
    
    // values array settings
    const valuesArray = values ? values.split(',') : null

    return (
        <div className={progressClasses} style={progressStyle}>
            {/* infinite loading */}
            {indeterminate ? (
                <div className={`progress-bar progress-bar-indeterminate${color ? ` bg-${color}` : ''}`}></div>
            ) : valuesArray ? (
                /* multiple values */
                valuesArray.map((val, index) => (
                    <div 
                        key={index}
                        className={`progress-bar bg-${colorArray[index] || colorArray[0]}`}
                        style={{ width: `${val}%` }}
                        role="progressbar"
                        aria-valuenow={val}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                ))
            ) : (
                /* single value */
                <div 
                    className={`progress-bar${color ? ` bg-${color}` : ''}`}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label={`${percentage}% Complete`}
                >
                    {showValue ? (
                        `${percentage}%`
                    ) : (
                        <span className="visually-hidden">{percentage}% Complete</span>
                    )}
                </div>
            )}
        </div>
    )
}

export default ProgressBar

/*

// 기본 진행률 (38% - 기본값)
<Progress />

// 값 지정
<Progress value="75" />
<Progress value="60%" />

// 색상과 크기
<Progress value="60" color="success" size="sm" />

// 다중 진행률
<Progress values="40,30,20" colors="primary,success,warning" />

// 무한 로딩
<Progress indeterminate={true} color="primary" />

// 값 표시
<Progress value="85" show-value={true} />

// 커스텀 너비와 클래스
<Progress 
    value="70" 
    width="200px" 
    class="custom-progress" 
    color="info" 
/>

// 다중 값 (기본 색상 사용)
<Progress values="25,35,15,25" />

*/

