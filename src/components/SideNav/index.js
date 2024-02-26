import React from 'react'
import { Wrapper,Content} from './sidenav.style'

import { Link } from 'react-router-dom'

function SideNav({ show }) {

    return (
        <Wrapper show={show}>
            <Content>
                {/* <Link to='/models'><li className='half'>Model S</li></Link>
                <Link to='/model3'><li className='half'>Model 3</li></Link>
                <Link to='/modelx'><li className='half'>Model X</li></Link>
                <Link to='/modely'><li className='half'>Model Y</li></Link>
                <li className='half'>Solar Roof</li>
                <li className='half'>Solar Panels</li> */}
                <Link to='/software'><li>Software Development</li></Link>
                <Link to='/web'><li>Web Development</li></Link>
                <Link to='/app'><li>App Development</li></Link>
                <Link to='/game'><li>Game Development</li></Link>
                <Link to='/product'><li>Product Photography</li></Link>
                <Link to='/digital'><li>Digital Marketing</li></Link>
                <Link to='/graphic'><li>Graphic Designing</li></Link>
                <li>Find Us</li>
                <li>Career</li>
                <li className='half'>More</li>
            </Content>
        </Wrapper>
    )
}

export default SideNav