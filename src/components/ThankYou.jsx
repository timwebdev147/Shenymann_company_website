import { Link } from 'react-router-dom';
import '../styles/thankyou.modules.scss'


function ThankYou() {


    return(
        <>
        <div className='thankyou_body'>

        <div class="thankYou">
    <h1>Thank You! for contacting <span className='green'>Shenymann ProjectPlus Limited</span></h1>
    <p>
        We received your message, you'll get a response as soon as possible.<br/> 
        Be rest assured our services don't disappoint, we deliver better than your expectations. 
    </p>
    <div class="button-container">
        <Link className='btn' to="/">
            home page
        </Link>
        <Link className='btn' to="/contact">
            send another message
        </Link>
    </div>
</div>
        </div>
        </>
    )
}

export default ThankYou;