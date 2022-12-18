// import logo from '../img/logo.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import {FaBars} from 'react-icons/fa'
import logo from '../img/sheny_logo.png';
import '../styles/navbar.modules.scss'

function Navbar (props) {

    const navMenu1 = [
        {
            id: 1,
            menu: props.view1,
            link: props.viewlink1,
        },
        {
            id: 2,
            menu: props.view2,
            link: props.viewlink2,
        },
        {
            id: 3,
            menu: props.view3,
            link: props.viewlink3,
        },
        {
            id: 4,
            menu: props.view4,
            link: props.viewlink4,
        },
        {
            id: 5,
            menu: props.view5,
            link: props.viewlink5,
        }
    ]

    const navMenu2 = [
        {
            id: 1,
            menu: props.menu1,
            link: props.link1,
            icon: props.icon1
        },
        {
            id: 2,
            menu: props.menu2,
            link: props.link2,
            icon: props.icon2
        },
        {
            id: 3,
            menu: props.menu3,
            link: props.link3,
            icon: props.icon3
        },
        {
            id: 4,
            menu: props.menu4,
            class: props.class4,
            link: props.link4,
            icon: props.Icon4,
            onClick: props.menu4Function,
            onMouseOver: props.onMouseOverMenu4,
            onMouseOut: props.onMouseOutMenu4
        },
        {
            id: 5,
            menu: props.signIn,
            link: '/Account',
            icon: props.iconSignIn
        },
        {
            id: 6,
            menu: props.signUp,
            link: 'Register',
            icon: props.iconSignUp
        }
    ]

    const sidebarButton = [
        {
            id: 1,
        onClick: props.dropDownFunction
        }
    ]

    navMenu2.forEach((data) => {

        console.log(data.menu);
    })

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const Position = window.pageYOffset;
        setScrollPosition(Position);
    }

    useEffect(
        () => {
            window.addEventListener("scroll", handleScroll);


            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []
    );

    function sidebar() {
        let sidebar = document.querySelector('#navSidebar');

        if(sidebar.classList.contains('navSidebar')){
            sidebar.classList.remove('navSidebar')
            sidebar.classList.remove('sidebarMobileHide')
            sidebar.classList.add('sidebarMobileShow')
        }else{
            sidebar.classList.add('navSidebar')
            sidebar.classList.add('sidebarMobileHide')
            sidebar.classList.remove('sidebarMobileShow')
            
            setTimeout(() => {
                sidebar.classList.remove('sidebarMobileHide')
                
            }, 1000);
            
        }
        
    }
       // console.log(scrollPosition);
    return (
        <>
        <div className={scrollPosition > 0 ? 'nav-rep d-none' : "d-none"}></div>
        <nav  className={scrollPosition > 0 ? 'sticky navbar '+props.customClass : "navbar "+props.customClass}>
            <div className='logo-container'><img src={logo} alt="Shenymann" /><span>Shenymann</span></div>
            {/* <p>
            Copyright © Kitchen-Manager 2022 Created By Akinsanmi Timothy
            </p> */}
            <ul>
               
                {navMenu1.map((list) => (
                    
                    list.menu ===undefined? null:
                    <span key={list.id} className='menu-list'>
                        
                    <li key={list.id}>
                        <Link className={list.class} onClick={list.onClick} to={list.link}>{list.icon} {list.menu}</Link>
                    </li>
                    </span>
                ))}
                
                
            </ul>
            <ul>
               
                {/* {navMenu2.map((list) => (
                    <span key={list.id} className='menu-list'>
                        
                    {list.menu ===null? null:
                    <li key={list.id}>
                        <Link onMouseOver={list.onMouseOver} onClick={list.onClick} onMouseOut={list.onMouseOut} to={list.link}>{list.icon} {list.menu}</Link>
                    </li>}
                    </span>
                ))}

                {navMenu2.map((list) => (
                    <span key={list.id} className='mobile-menu-list' >
                        {
                            list.id == 2 || list.id == 4?
                            list.menu ===null ? null: 
                                <li key={list.id}>
                                <Link onClick={list.onClick} to={list.link}>{list.icon} {list.menu}</Link>
                                </li>
                            :null
                            }
                    </span>
                ))} */}


                {
                    sidebarButton.map((button) => (

                        <button key={button.id} onClick={sidebar} className='navDropdown'><FaBars/></button>
                    ))
                }
                
            </ul> 
            <div id="navSidebar" className="navSidebar">
            <ul>
               
               {navMenu1.map((list) => (
                    list.menu ===undefined? null:

                   <span key={list.id} className='menu-list'>
                   <li key={list.id}>
                       <Link className={list.class} onClick={sidebar} to={list.link}>{list.icon} {list.menu}</Link>
                   </li>
                   </span>
               ))}
               
               
           </ul>
            </div>
        </nav>
        </>
    )
  }


export default Navbar;