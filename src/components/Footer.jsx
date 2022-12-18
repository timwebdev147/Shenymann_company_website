import '../styles/footer.modules.scss'
import logo from '../img/sheny_logo.png'
import {Link} from 'react-router-dom'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa'


function Footer() {
    


    return(
        <>
        <footer>
            <div className="first-footer">
            <div className="second-footer">
                <p>Copyright ©2022 All rights reserved | This website is developed by <a href="https://www.linkedin.com/in/timothy-akinsanmi-607baa243/">Webber Man</a></p>
            </div>
                <div>
                    <ul>
                        <label htmlFor="">
                            Address:<br/>
                            <small>
                            14 Adeleke Adedoyin St, Victoria Island 106104, Lagos
                            </small>
                        </label>
                        <label htmlFor="">
                            Phone 1:<br/>
                            <small>
                            +234 805 663 0738
                            </small>
                        </label>
                        <label htmlFor="">
                            Phone 2:<br/>
                            <small>
                            +234 806 607 7945
                            </small>
                        </label>
                        <label htmlFor="">
                            Phone 3:<br/>
                            <small>
                            +234 812 835 9939
                            </small>
                        </label>
                        <label htmlFor="">
                            Phone 4:<br/>
                            <small>
                            +234 802 531 0451
                            </small>
                        </label>
                        <label htmlFor="">
                            Email:<br/>
                            <a href="mailto:info@shenymann.org">info@shenymann.org</a>
                        </label>
                        <label htmlFor=""></label>
                    </ul>
                </div>
                <div>
                    <ul>
                        <label htmlFor="">
                            Quick Links
                        </label>

                        <small><Link to={'/services'}>Services</Link></small>
                        <small><Link to={'/about'}> About</Link></small>
                        <small><Link to={'/contact'}> Contact</Link></small>
                    </ul>
                </div>
                <div>
                    <ul>
                        <label htmlFor="">
                            Social
                        </label>
                        <div className='icon-container'>

                        <button><a href=""><AiOutlineTwitter/></a></button>
                        <button><a href=""><FaFacebookF/></a></button>
                        <button><a href=""><FaLinkedinIn/></a></button>
                        <button><a href=""><AiOutlineInstagram/></a></button>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}


export default Footer;