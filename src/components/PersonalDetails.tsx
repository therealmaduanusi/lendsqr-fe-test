import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import avatar2 from '../assets/avatar2.svg'
import star1 from '../assets/star1.svg'
import star2 from '../assets/star2.svg'

function PersonalDetails() {
  return (
    <div className='personalDetails-container'>
        <div className='personal-link-container'>
            <span>&#8592;</span>
            <Link to='/Guarantors'>Back to Users</Link>
        </div>
        <div className='personal-heading-button-container'>
            <h3>Users Details</h3>
            <div className='button-container'>
                <button>BlackLists User</button>
                <button>ActiveList User</button>
            </div>
        </div>
        <div className='personal-profile-container'>
            <div className='personal-info-container'>
                <div className='personal-pfp'>
                    <img src={avatar2} alt="User Avatar" />
                    <div className='span-div'>
                        <span>Grace Effiom</span>
                        <span>LSQFf587g90</span>
                    </div>
                </div>
                <div className='personal-ratings'>
                    <span>User's Tier</span>
                    <div>
                        <img src={star1} alt="ratings" />
                        <img src={star2} alt="ratings" />
                        <img src={star2} alt="ratings" />
                    </div>
                </div>
                <div className='personal-amount'>
                    <span>₦200,000.00</span>
                    <span>9912345678/Providous Bank</span>
                </div>
            </div>
            <div className='personal-ul-container'>
                <ul className='li-container'>
                    <li>
                        <NavLink to='general'>General Details</NavLink>
                    </li>
                    <li>
                        <NavLink to='document'>Documents</NavLink>
                    </li>
                    <li>
                        <NavLink to='bank'>Bank Details</NavLink>
                    </li>
                    <li>
                        <NavLink to='loan'>Loans</NavLink>
                    </li>
                    <li>
                        <NavLink to='savings'>Savings</NavLink>
                    </li>
                    <li>
                        <NavLink to='app'>App and System</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet />
        {/* <div></div> */}
    </div>
  )
}

export default PersonalDetails