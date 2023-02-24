import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('My Website clone', 'Top News - 9099 readers')}
        {newsArticle('War in Ukraine drags into second year', 'Top News - 10000 readers')}
        {newsArticle('Google Photos’ AI-powered ‘Magic Eraser’ is now a Google One subscription perk', 'Technology- 4006 readers')}
        {newsArticle('Why The Office is the best comedy sitcom', 'Entertainment - 12364 readers')}
        {newsArticle('TSLA Stock hits a new High', 'Stocks - 69420 readers')}
        

    </div>
  );
}

export default Widgets