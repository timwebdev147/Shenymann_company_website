import { Link } from "react-router-dom";

export default function NotFound() {
return (
<div style={{padding: "20px"}}>
<h1>Oops! You seem to be lost.</h1>
<p>Here are some helpful links:</p>
<Link style={{color: 'green'}} to='/'>Home</Link>
<br/>
<br/>
<Link style={{color: 'green'}} to='/about'>About</Link>
<br/>
<br/>
<Link style={{color: 'green'}} to='/services'>Services</Link>
<br/>
<br/>
<Link style={{color: 'green'}} to='/contact'>Contact</Link>
<br/>
<br/>
</div>
)
}