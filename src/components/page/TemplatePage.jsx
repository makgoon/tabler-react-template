import MarketingCard from '../card/MarketingCard'

function TemplatePage({ useRowDeck = true }) {
    const rowClasses = `row row-cards${useRowDeck ? ' row-deck' : ''}`

    return (
        <div className={rowClasses}>
            <div className='col-sm-12 col-lg-6'>
                {/* 카드 영역 */}
                <MarketingCard />
            </div>
            <div className='col-sm-12 col-lg-6'>
                {/* 추가 카드 영역 */}
                <MarketingCard />
            </div>
            <div className='col-sm-12 col-lg-4'>
                {/* 작은 카드 */}
                <MarketingCard />
            </div>
            <div className='col-sm-12 col-lg-4'>
                {/* 작은 카드 */}
                <MarketingCard />
            </div>
            <div className='col-sm-12 col-lg-4'>
                {/* 작은 카드 */}
                <MarketingCard />
            </div>
        </div>
    )
}

export default TemplatePage