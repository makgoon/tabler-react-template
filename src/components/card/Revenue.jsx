import TrendingIcon from '../common/TrendingIcon'
import { useState } from 'react'
import ApexChart from '../chart/ApexChart'

function Revenue() {
    const [value, setValue] = useState(4300)
    const chartData = {
        type: 'area',  // 또는 'line', 'bar'
        series: [{
            name: 'Revenue',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            colors: 'primary'
        }],
        sparkline: true,  // 미니 차트 모드
        colors: 'primary'
    }

    return (
        <>
            <div className='d-flex align-items-baseline'>
                {/* 
                    To do, Classanme d-flex prop convert
                    Need to change card body and cardheader in card wrapper
                */}
                <div class="h1 mb-0 me-2">{value}%
                    
                </div>
                    <TrendingIcon divClass='me-auto'/>
            </div>
            <ApexChart chartId="revenue-bg" size='sm' className="rounded-bottom"
            data={chartData} />
        </>
        
    )
}

export default Revenue