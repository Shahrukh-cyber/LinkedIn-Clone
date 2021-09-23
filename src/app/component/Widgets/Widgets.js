import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import './Widgets.css'
import { Avatar } from '@material-ui/core'
import ArrowForward from '@material-ui/icons/ArrowForward'
const Widgets = () => {
 return (
  <div className='widget'>
   <div className='widget__top'>
    <div className='widget__top__header'>
     <h4>Add to your feed</h4>
     <InfoIcon />
    </div>

    <div className='widget__top__body'>
     <div className='widget__top__body'>
      <a href="">
       <Avatar >V</Avatar>
      </a>
      <div className='widget__top__body__header'>
       <h5>Vacancies</h5>
       <p>Company • Human Resources</p>
      </div>
     </div>








     <button className='btn'>Follow</button>


    </div>




    <div className="widget__top_footer">
     <span>View all recommendations </span>
     <span className='arrow'><ArrowForward /></span>

    </div>


   </div>
   <div className='widget__bottom'>
    <div className="widget__bottom__header">
     <h4>Today’s top courses</h4>
     <InfoIcon />
    </div>
    <div className="widget__bottom__body">
     <ol>
      <li>Delegating from a Distance
       Alisa Cohn</li>
      <li>Customer Service Foundations
       Jeff Toister</li>
      <li>Unconscious Bias
       Stacey Gordon</li>
     </ol>
    </div>
    <div className="widget__bottom__footer">
     <span>Show more on LinkedIn Learning</span>
     <span className='arrow'>
      <ArrowForward />

     </span>
    </div>
   </div>
  </div>
 )
}

export default Widgets
