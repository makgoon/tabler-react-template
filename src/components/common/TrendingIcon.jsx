// Trending.jsx - 원본 Jekyll 코드 그대로 변환
import { IconTrendingUp, IconTrendingDown, IconMinus } from '@tabler/icons-react'

function TrendingIcon({
    value = 25,
    class: customClass = '',
    divClass = 'ms-auto'
}) {
    // icon style from value
    let trendingColor, trendingIcon
    
    if (value > 0) {
        trendingColor = 'green'
        trendingIcon = 'trending-up'
    } else if (value === 0) {
        trendingColor = 'yellow'
        trendingIcon = 'minus'
    } else {
        trendingColor = 'red'
        trendingIcon = 'trending-down'
    }
    
    // icon component from value
    const IconComponent = {
        'trending-up': IconTrendingUp,
        'trending-down': IconTrendingDown,
        'minus': IconMinus
    }[trendingIcon]
    
    const spanClasses = `text-${trendingColor} d-inline-flex align-items-center lh-1${customClass ? ` ${customClass}` : ''}`
    
    return (
        <div className={divClass}>
            <span className={spanClasses}>
                {value}% <IconComponent className="ms-1" size={16} />
            </span>
        </div>
        
    )
}

export default TrendingIcon

// 사용 예시들
/*

// 기본 사용 (25% - 기본값)
<TrendingIcon />

// 양수 (초록색 + 상승 아이콘)
<Trending value={7} />
<Trending value={15.5} />

// 0 (노란색 + 마이너스 아이콘)
<Trending value={0} />

// 음수 (빨간색 + 하락 아이콘)
<Trending value={-3} />
<Trending value={-12.8} />

// 커스텀 클래스
<Trending value={8} class="fw-bold" />

// 실제 사용 예시 (MarketingCard에서)
<div className="me-auto">
    <Trending value={7} />
</div>

<div className="me-auto">
    <Trending value={-1} />
</div>

*/