import { Link, Outlet } from 'react-router-dom'
import '../styles/contact.modules.scss'
import PageIndicator from '../components/PageIndicator'
import { HiOutlineOfficeBuilding} from 'react-icons/hi'
import { MdOutlineLocalPostOffice} from 'react-icons/md'
import { TfiTablet} from 'react-icons/tfi'
import { useEffect, useState } from 'react'

function Contact() {
    const [messageErr, setMessageErr] = useState('')
    const [nameErr, setNameErr] = useState('')
    const [emailErr, setEmailErr] = useState('')

    const form = [
        {
            id: 'message',
            type: 'text',
            name: 'comment',
            fieldType: 'textarea',
            class: '',
            value: '',
            placeholder: 'Enter Message'
        },
        {
            id: 'fullname',
            type: 'text',
            name: 'fullname',
            fieldType: 'input',
            class: 'half-width',
            value: '',
            placeholder: 'Enter your name'
        },
        {
            id: 'email',
            type: 'email',
            name: 'email',
            fieldType: 'input',
            class: 'half-width',
            value: '',
            placeholder: 'Enter email address'
        },
        {
            id: 'phone',
            type: 'text',
            name: 'number',
            fieldType: 'input',
            class: '',
            value: '',
            placeholder: 'Enter your phone number'
        },
        {
            id: 'subject',
            type: 'text',
            name: 'subject',
            fieldType: 'input',
            class: '',
            value: '',
            placeholder: 'Enter Subject'
        }
        
    ]


    const [formFields, updateFormFields] = useState(form);

    function handleChange(value, index) {
        let clonedFormFields = [...formFields]
        clonedFormFields[index].value = value;

        updateFormFields(clonedFormFields)
    }

    function toTop(){
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      console.log('afterEach')
      }

      useEffect(() => (
        toTop()
      ), [])
        
    function handleSubmit(e){
        formFields.forEach(element => {
            
            if (element.id == 'message') {
                if (element.value == '') {
                    
                    e.preventDefault()
                    setMessageErr('message is required')
                }else{
                    setMessageErr('')
                    return true
                }
            }
            
            if( element.id == 'fullname' ) {
                if (element.value == '') {
                    setNameErr('name is required')
                    e.preventDefault()
                }else{
                    setNameErr('')
                    return true;
                }
            }
            if( element.id == 'email') {
                if (element.value == '') {
                    setEmailErr('Email is required')
                    e.preventDefault()
                }else{
                    setEmailErr('')
                    return true;
                }
            }
            
        });
        }

        useEffect(() => {
            formFields.forEach(element => {
            
                if (element.id == 'message') {
                    if (element.value != '') {
                        
                        setMessageErr('')
                        
                    }
                }
                
                if( element.id == 'fullname' ) {
                    if (element.value != '') {
                        setNameErr('')
                        
                    }
                }
                if( element.id == 'email') {
                    if (element.value != '') {
                        setEmailErr('')
                        
                    }
                }
                
            });
        }, [formFields])

    return (
        <>
        <PageIndicator pageName={'contact'} pageLink={'/contact'}/>

        <div className='google-map'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6916525835195!2d3.416270213914032!3d6.433639225988467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad35f7e93e9%3A0xed985b3c7e02529a!2s14%20Adeleke%20Adedoyin%20St%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1669931724080!5m2!1sen!2sng" style={{border: '0'}} width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className='contact-form-info' >
            <h1>Get in Touch</h1>
            <div className='form-info'>
                <div className='form-container'>
                    <form action='https://shenymann-mailer.vercel.app/' method='post'>
                        {
                            formFields.map((field, index) => (
                                field.fieldType == 'input' ?
                                <div className={field.class} >
                                <input name={field.name} onChange={event => handleChange(event.target.value, index)} value={field.value} placeholder={field.placeholder}  key={field.id} type={field.type} />
                                <span >{field.id == 'fullname'? nameErr: field.id == 'email'? emailErr: null }</span>
                                </div>:
                                <div className={field.class} >
                                <textarea name={field.name} onChange={event => handleChange(event.target.value, index)} value={field.value} placeholder={field.placeholder} key={field.id} id="" cols="30" rows="12"></textarea>
                                <span >{messageErr}</span>
                                </div>
                            ))
                        }
                    <button onClick={(event) => handleSubmit(event)} type='submit' name='submit' className='btn'>SEND MESSAGE</button>
                    </form>
                </div>
                <div className='info-container'>
                        <div>
                            <HiOutlineOfficeBuilding className='contact-icon'/>
                            <div>
                                <p>
                                Victoria Island 106104, Lagos.<br/>
                                    <span>14 Adeleke Adedoyin St</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <MdOutlineLocalPostOffice className='contact-icon'/>
                            <div>
                                <p>
                                    +234 805 663 0738<br/>
                                    <span>Mon to Fri 9am to 6pm</span>
                                </p>
                            </div>
                        </div>

                        <div>
                            <TfiTablet className='contact-icon'/>
                            <div>
                                <p>
                                    info@shenymann.org<br/>
                                    <span>Send us your query anytime!</span>
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    )
}
export default Contact