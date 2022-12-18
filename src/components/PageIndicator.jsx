import { Link } from 'react-router-dom';
import blurBg from '../img/indicator-BG.jpg'
import '../styles/PageIndicator.modules.scss'


function PageIndicator(props) {

    return (

        <>
        <div className="page-indicator">
        <div className='blur-bg'>
            <img src={blurBg} alt="" />
        </div>
        <div className='text-holder'>
            <h1>{props.pageName}</h1>
            <div>
                <Link to={'/home'}>Home</Link> / <Link to={props.pageLink}>{props.pageName}</Link>
            </div>
        </div>
        </div>
        </>
    )
    
}

export default PageIndicator;