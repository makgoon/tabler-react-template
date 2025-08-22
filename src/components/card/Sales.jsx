import ProgressBar from '../common/ProgressBar'
import TrendingIcon from '../common/TrendingIcon'
import { useState } from 'react'

function Sales() {
    const [value, setValue] = useState(75)

    return (
        <div>
            <div class="h1 mb-3">{value}%</div>
		    <div class="d-flex mb-2">
			    <div>Conversion rate</div>
			    
                <TrendingIcon />
		    </div>
            <ProgressBar />
        </div>
       
    )
}

export default Sales