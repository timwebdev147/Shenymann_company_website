
import '../styles/home.modules.scss';
import company_icon from '../img/construction-company-icon.png'
import employee_icon from '../img/employee-icon-colored.png'
import ClampLines from 'react-clamp-lines';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CountUp } from 'use-count-up';
import { InView, useInView } from 'react-intersection-observer';
import { icon } from '@fortawesome/fontawesome-svg-core';
import icon_1 from '../img/icon_1.png';
import icon_2 from '../img/icon_2.png';
import icon_3 from '../img/icon_3.png';
import icon_4 from '../img/icon_4.png';
import { HashLink } from 'react-router-hash-link';


function Home() {



    const services = [
        {
            id: 1,
            service: 'civil and construction work',
            text: 'Tower foundation, turnkey civil work project, Offshore/onshore/swamps flow, lines (planning Maintenance/new installation), Offshore/swamp/ onshore flow (lines construction and repairs).',

        },
        {
            id: 2,
            service: 'erection and painting of mast and towers',
            text: 'onshore/offshore flow stations, offshore/swamp platforms, External Line Plant(ELP), Tower and Mast Erection, Tower and general foundation.',

        },
        {
            id: 3,
            service: 'electrical / instrumention and control',
            text: `Installation of rectifiers, circuit breakers Switch gear and changeovers, Industrial Wiring Electrical 
            controls of generators, Synchronizers installation 
            and maintenance, Industrial UPS/Stabilizer installation and Integration, 
            Earth system Oil field location(Design and planning), Gas stations (designs, 
            installation and  Maintenance), workshop(design and  installation), General 
            electrical fault and diagnosis, Installation of instrument and control Cable trace, 
            making and support, General termination and documentation.`,
            
        },
        // {
        //     id: 4,
        //     service: 'telecommunication',
        //     text: `Infrastructure development
        //     Turkey supplies and Installation
        //     Equipment installation and commission
        //     Installation of VHS/UHF Radios and programming
        //     Radio survey, Cable jointing and trunking system
        //     BTS/MSC Equipment installation, PABX system
        //     `,

        // },
        // {
        //     id: 5,
        //     service: 'geo-enviromental contractors and engineers',
        //     text: `Soil  Consolidation 
        //     Tailing Consolidation  (Mining Application)
        //      Liquefaction (Ground Improvement)
        //      Remediation ( In-situ Soil Remediation and Environmental Application`,

        // },
    ]
    
        const team = [
    {
        id: 1,
        name: ' Layi Awe-Azeez (B.sc. Mpmi)',
        service: 'Chief Executive Officer',
        text: 'A geologist, a project management specialist,and a safety Consultant. He has several  years of experiences , having worked in multinational companies such as Saipem, ExxonMobil , and Sammya  Nig. Ltd. He later founded shenymann Projectplus Limited, and runs the affair till date. He is a member of Local and International Organizations amongst which is the Project Management Institute(PMI), .Institute of Safety Professionals of Nigeria(ISPON),',

    },
    {
        id: 2,
        name: 'Segun Eludipo (B.eng PGDPM)',
        service: 'Director Projects',
        text: `A certified Engineer and project Manger. He has attended so many courses related to site builds amongst which are Andrew Institute-RF, Tricom South Africa rigging and foundation details for Tricom Towers, same also for Webb and lift masters Products.
        He has being involved in various capacities in the turnkey development of cell site .i.e from site acquisition  to site commissioning for MTN, Econet,/ Likusasa ,and Pivot) prior to joining SPL ,he was a Director of Mishkat Nig Ltd., which has been responsible for active development of  about 20 sites around the country.
        `,

    },
    {
        id: 3,
        name: 'Ahmed Salawu B.sc(Building)',
        service: 'Chief Technical Officer',
        text: `A certified civil Building Technolgy  Graduate .He has worked in several construction firms including Etteh Ann.A consultant for about ten years .He is currently our director in charge Building and other  infrastructural projects. Ahmed has a proven record in Process re-alignment, Organization change management ,project management training development and analytical modeling.`,
    },
    {
        id: 4,
        name: 'Abiola Olatundun (BLLM)',
        service: 'Company Secretary/Legal Adviser',
        text: `prior to joining SPL, She ran a legal firm with vast experience in property and Land acquisition. She is a member of many organization amongst which are International Bar Association, Nigeria Bar Association. She has flair for estate and communication Law.`,

    },
    {
        id: 5,
        name: 'Oyinkansola Awe-azeez',
        service: 'Director ICTN',
        text: `She is responsible for the information technology networks. He has 10 years experience in Telecommunications, IT, Fibre optics, and satellite communication technology. She also a tower of strength in various project execution in shenymann projectplus Limited`,
    },
    {
        id: 5,
        name: 'Babatunde.R. Amao',
        service: 'Director  Sales/Marketing',
        text: `A telecommunications  product marketing   and Distribution Specialist with seven years of experience. He was in Mouka as a supervising Engineer. And later joined SPDC as a Project Engineer .He participated in the Pre-construction  studies of several SPDC fields such as Ekulama and others .Ground water Monitoring Projects, contract planning, CASHES planning e.t.c.`,
    },
    {
        id: 5,
        name: 'Iman Olasheni',
        service: 'Genaral Manager Projects',
        text: `He is a graduate of university of Lagos where he obtained B.Eng (civil).He is also a member of the Nigeria Society of Engineers. Has many years of experiences .Prior to joining SPL, he has worked at various capacities with Fermer & Kalio Ltd(Building Engineers) and Procomotel Ltd. (Telecoms). Collectively he has been responsible for the construction of 25 cell sites.`,
    },
    {
        id: 5,
        name: 'JAIYEOLA Ayinde (B.sc)',
        service: 'Director Administration',
        text: `Coren Registered Electrical/Electronics Engineer .He has worked in several Engineering firms including  Konsadem  Associates. A consultant for about six years, he has participated in several Telecommunications   infrastructural development in the last six years .He has good analytical and communication skills.`,
    },
    ]


    const clients = [
        {
            id: '1',
            image: require('../img/testimonials/biswal.png')
        },
        {
            id: '2',
            image: require('../img/testimonials/exxon.png')
        },
        {
            id: '3',
            image: require('../img/testimonials/huawei.png')
        },
        {
            id: '4',
            image: require('../img/testimonials/ihs.png')
        },
        {
            id: '5',
            image: require('../img/testimonials/indepco.jpeg')
        },
        {
            id: '6',
            image: require('../img/testimonials/inec.png')
        },
        {
            id: '7',
            image: require('../img/testimonials/kadunastate.png')
        },
        {
            id: '8',
            image: require('../img/testimonials/lucratel.jpeg')
        },
        {
            id: '9',
            image: require('../img/testimonials/makasa.png')
        },
        {
            id: '10',
            image: require('../img/testimonials/osunstate.png')
        },
        {
            id: '11',
            image: require('../img/testimonials/panocean.png')
        },
        {
            id: '12',
            image: require('../img/testimonials/vodafone.png')
        },
        {
            id: '13',
            image: require('../img/testimonials/pivot.jpeg')
        },
        {
            id: '14',
            image: require('../img/testimonials/raeanna.png')
        },
        {
            id: '15',
            image: require('../img/testimonials/supeb.png')
        },
    ]
    function toTop(){
        window.scrollTo({
          top: 0,
          behavior: "auto"
        });
      console.log('afterEach')
      }

      useEffect(() => (
        toTop()
      ))

     



    return (
        <>
        <div className='landing-container'>
            <div className='landing-container-content'>
                <div>

                <h1>Committed to <span style={{color: '#4cb034'}} >Superior</span> Quality and Results</h1>
                <p>
                At <b>Shenymann ProjectPlus Limited</b>, we realized that, 
                all projects is a temporary endeavor, which must have
                 a start date; and a date of expiry; without comprising 
                 client’s standard ,and specification.
                </p>
                <button  className='btn'><Link style={{textDecoration: 'none', color: 'white'}} to='/services' >Our services</Link></button>
                </div>
            </div>
            
        </div>

        <div className='our-services'>
            <h1>
            meet our <span className="green">team</span>
            </h1>
            <div className='card-row'>
                {
                    team.slice(0, 3).map((card) => (
                        <div key={card.id}>
                            <img src={employee_icon} alt="logo" />
                            <h2 style={{
                                fontSize: 'small',
                                marginBottom: 0,
                                opacity: 0.6
                            }}>{card.name}</h2>
                            <h1>{card.service}</h1>
                            <ClampLines
                  text={card.text}
                  id="custom"
                  lines={2}
                  moreText="Read More"
                  lessText="Read less"
                  className="custom-class"
                  ellipsis="..."
                  innerElement="p" />
                        </div>
                    ))
                }

            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>

            <HashLink  className={'btn'} to={'/about/#our-team'}>View more</HashLink>
            </div>
        </div>

        <div className="first-container">
            <div className='background'></div>
            <div></div>
            <div>
                <h1>Supervision And Inspection Services</h1>
                <p>In any developing project, it is important to tailor the project based on a critical 
                    review of previous projects and known details. Consequently, it is crucial for SPL 
                    to be in close contact, with the infrastructure after they are executed and in service, 
                    so that possible maintenance can be  effected.
                    In order to observe optimal safety standards expected in the industry today. 
                    SPL has put in place measures; to implement, and maintain such set standards. 

                </p>

                <ul>
                    <p>
                        <img src={company_icon} alt="" />
                        <div>
                            <h1>Certified Company</h1>
                            <p><b>Shenymann ProjectPlus Limited ( SPL )</b> is a registered, incorporated Company in Nigeria, 
                                and its Limited by shares. An Engineering firm with services ranges from:
                            Electrical/Telecommunications, Civil/Constructions, Geotechnical  activities, 
                            Information Technology (IT) Consulting, Infrastructure services provider, 
                            Oil and Gas Services, and Procurement.
                            </p>
                        </div>
                    </p>
                    <p>
                        <img src={employee_icon} alt="" />
                        <div>
                            <h1>Experienced Team</h1>
                            <p><b>Shenymann ProjectPlus Limited ( SPL)</b> has  a strong mastermind alliances with experience 
                                Engineers, Project Managers and Technical workforce, pool together from 
                                various discipline of Engineering, and other professionals to form a Strategic Team.
                            </p>
                        </div>
                    </p>
                </ul>
            </div>
        </div>

        <div className='our-services'>
            <h1>
                scope of <span className="green">services</span>
            </h1>
            <div className='card-row'>
                {
                    services.map((card) => (
                        <div key={card.id}>
                            <img src={employee_icon} alt="logo" />
                            <h1>{card.service}</h1>
                            <ClampLines
                  text={card.text}
                  id="custom"
                  lines={2}
                  moreText="Read More"
                  lessText="Read less"
                  className="custom-class"
                  ellipsis="..."
                  innerElement="p" />
                        </div>
                    ))
                }

            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>

            <Link  className={'btn'} to={'/services'}>View more services</Link>
            </div>
        </div>

        <div className="third-container">
            <div className='background'></div>
            <div></div>
            <div>
                <h1>We Are Experienced in Construction</h1>
                <p>We provide services to Organization, in view of supporting the highest standard,
                     and reliability demanded by communication network, and broadcast generally. Such organization
                      include: banks (e-banking), Telecommunication companies ;
                      (including GSM operators, Fixed wireless Operators, IT organization; Including ISP),
                      broadcast station; (TV and Radio),Energy and Power providers, Oil and Gas sector,
                    as well Building/ civil works and general Engineering and Construction.
                </p>

                <div className='YOE'>
                    <div className='years'>
                        <span>20</span> 
                    </div>
                    <div className='experience'><span style={{color: 'grey'}}>years</span> <span style={{color: '#1b1a18'}}> of experience</span></div>
                </div>
            </div>
        </div>


        <InView>
    {({ inView, ref, entry }) => (
      <div className='counter-container' ref={ref}>

        <div className='counter-box'>
            <img src={icon_1} alt="" />
            <div>
            { inView == false ? 0:
            <span className='count-number'>
            <CountUp isCounting end={60} duration={3} />
            </span>
            }
                <h4>
                    <span>satisfied</span>
                    client
                </h4>
            </div>
        </div>

        <div className='counter-box'>
            <img src={icon_2} alt="" />
            <div>
            { inView == false ? 0:
            <span className='count-number'>
            <CountUp isCounting end={10} duration={3} />
            </span>
            }
                <h4>
                    <span>worldwide</span>
                    branches
                </h4>
            </div>
        </div>

        <div className='counter-box'>
            <img src={icon_3} alt="" />
            <div>
            { inView == false ? 0:
            <span className='count-number'>
                <CountUp isCounting end={80} duration={3} />
            </span>
        }
                <h4>
                    <span>total</span>
                    projects
                </h4>
            </div>
        </div>

        <div className='counter-box'>
            <img src={icon_4} alt="" />
            <div>
            { inView == false ? 0:
            <span className='count-number'>
            <CountUp isCounting end={24} duration={3} />
            </span>
            }
                <h4>
                    <span>work</span>
                    finished
                </h4>
            </div>
        </div>

      </div>
    )}
  </InView>

        <div id='clients' className='our-projects our-clients'>
            <h1>
               some of our <span className='green'>clients</span>
            </h1>
            <div className='card-row'>
                {
                    clients.map((client) => (
                        <div key={client.id}>
                            <img src={client.image} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default Home