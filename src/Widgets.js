import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading,subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("Tesla stockes spike so high in a month","Top news - 1025 readers")}
            {newsArticle("New strain of corona found in UK","Top news - 654 readers")}
            {newsArticle("Redux or Context?","Top news - 986 readers")}
            {newsArticle("Will 2021 is the final episode of Covid","Top news - 7964 readers")}
        </div>
    )
}

export default Widgets
