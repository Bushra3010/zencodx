import React,{ useState } from 'react'
import { Wrapper,Content,Content1 } from './header.style'
import { Link } from 'react-router-dom';

import SideNav from '../SideNav'
import CloseIcon from '@mui/icons-material/Close';
import Logo from './bg.png';

const Header = () => {

    const [open,setOpen] = useState(false);

    return (
        <>
        <Wrapper>
            <div className='logo' >
            <Link to='/'>
                <img src={Logo} alt='logo'/>
            </Link>
            </div>
            <Content>
                <Link to='/models'>Software Development</Link>
                <Link to='/model3'>Web Development</Link>
                <Link to='/modelx'>App Development</Link>
                <Link to='/modely'>Game Development</Link>
                <Link to='#'>Product Photography</Link>
                <Link to='#'>Digital Marketing</Link>
            </Content>
            <Content1>
                <a href='#' onClick={()=> setOpen(true)} >Menu</a>
            </Content1>
            {open && 
            <div className='top'>
                <div className='close' onClick={()=> setOpen(false)}>
                    <CloseIcon/>
                </div>
            </div> 
            }       
            <SideNav show={open}/>
        </Wrapper>
        </>
    )
}

export default Header