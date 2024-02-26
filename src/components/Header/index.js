import React,{ useState } from 'react'
import { Wrapper,Content,Content1 } from './header.style'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from '../SideNav'
import CloseIcon from '@mui/icons-material/Close';
import Logo from './bg.png';

const Header = () => {

    const [open,setOpen] = useState(false);

    return (
        <>
        <Wrapper>
            <div className='logo' >
            <NavLink to='/'>
                <img src={Logo} alt='logo'/>
            </NavLink>
            </div>
            <Content>
                <NavLink to='/software' style={({ isActive }) =>  
                isActive ? { background: '#d3d3d3', fontWeight: 'bold' } : {}  } >Software Development</NavLink>
                <NavLink to='/web' style={({ isActive }) =>  
                isActive ? { background: '#d3d3d3', fontWeight: 'bold' } : {}  }  >Web Development</NavLink>
                <NavLink to='/app' style={({ isActive }) =>  
                isActive ? { background: '#d3d3d3', fontWeight: 'bold' } : {}  } >App Development</NavLink>
                <NavLink to='/game' style={({ isActive }) =>  
                isActive ? { background: '#d3d3d3', fontWeight: 'bold' } : {}  } >Game Development</NavLink>
                <NavLink to='/product' style={({ isActive }) =>  
                isActive ? { background: '#d3d3d3', fontWeight: 'bold' } : {}  } >Product Photography</NavLink>
                <NavLink to='/digital' style={({ isActive }) =>  
                isActive ? { background: '#d3d3d3', fontWeight: 'bold' } : {}  } >Digital Marketing</NavLink>
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