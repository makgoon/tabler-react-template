import MarketingCard from '../card/MarketingCard'
import CardWrapper from '../card/CardWrapper'
import CardHeaderWrapper from '../card/CardHeaderWrapper'
import { useState } from 'react'
import Sales from '../card/Sales'
import Revenue from '../card/Revenue'
import NewClients from '../card/NewClients'

function DashboardPage({ useRowDeck = true }) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const rowClasses = `row row-cards${useRowDeck ? ' row-deck' : ''}`

    return (
        <div className={rowClasses}>
            <CardWrapper size='lg-6'>
                <MarketingCard />
            </CardWrapper>
            <CardWrapper size='lg-6'>
                <CardHeaderWrapper 
                    subHeaderTitle='Time Range'
                    dropdown={{
                        items: ['Today', 'This Week', 'This Month', 'This Year'],
                        selectedIndex: 0,
                        onSelect: (item, index) => setSelectedIndex(index)
                    }} />
            </CardWrapper>
            <CardWrapper size='lg-3'>
                <CardHeaderWrapper
                    subHeaderTitle='Sales'
                    dropdown={{
                        items: ['Today', 'This Week', 'This Month', 'This Year'],
                        selectedIndex: 0,
                        onSelect: (item, index) => setSelectedIndex(index)
                    }} />
                    <Sales />
            </CardWrapper>
            <CardWrapper size='lg-3'>
                <CardHeaderWrapper
                    subHeaderTitle='Revenue'
                    dropdown={{
                        items: ['Today', 'This Week', 'This Month', 'This Year'],
                        selectedIndex: 0,
                        onSelect: (item, index) => setSelectedIndex(index)
                    }} />
                    <Revenue />
            </CardWrapper>
            <CardWrapper size='lg-3'>
                <CardHeaderWrapper
                    subHeaderTitle='new-clients'
                    dropdown={{
                        items: ['Today', 'This Week', 'This Month', 'This Year'],
                        selectedIndex: 0,
                        onSelect: (item, index) => setSelectedIndex(index)
                    }} />
                    <NewClients />
            </CardWrapper>
        </div>
    )
}

export default DashboardPage