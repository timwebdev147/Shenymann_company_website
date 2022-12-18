import { useEffect } from "react";
import ClampLines from "react-clamp-lines";
import { Link } from "react-router-dom";
import PageIndicator from "../components/PageIndicator"
import company_icon from '../img/construction-company-icon.png'
import employee_icon from '../img/employee-icon-colored.png'
import organogram from '../img/organogram.png'
import '../styles/about.modules.scss'


function About() {
    
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
        <PageIndicator pageName={'about us'} pageLink={'/about'}/>

        <div className="header-list">
        <h1>mission statement</h1>
        <p>
        to sustain excellence locally and internationally in the engineering 
        and construction industry with a commitment to quality and due regards 
        to safety and environment without compromising client’s requirement.
        </p>
        <h1>
        philosophy
        </h1>
        <p>
        Our philosophy is based upon ethical conduct, mutual trust, 
        and teamwork to ensure continuous improvement. we test, re-evaluate 
        and continually raise our standard of excellence.  SPL is dedicated 
        to fostering a diverse work environment, which challenges, enriches and rewards each individual.
        </p>
        <h1>
        principle
        </h1>
        <ul>
        <li> To add value to our services </li>
        <li>We  are client focused </li>
        <li> We are innovative and flexible in meeting client needs </li>
        <li>We do our work better, faster, cheaper and safer.</li>
        </ul>
        </div>

        <div id="our-team" className='our-services '>
            <h1>
                meet our <span className="green">team</span>
            </h1>
            <div className='card-row'>
                {
                    team.map((card) => (
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

            <Link  className={'btn'} to={'/contact'}>Contact Us</Link>
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


        <div className="organogram-container" >
            <img src={organogram} alt="" />
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


        <div className="header-list tools">
            <h1>COMPANY TOOLS AND EQUIPMENTS</h1>
            <div>

            <ul >
            <h2>
                civil work Equipment tools
            </h2>

            <li>Pick-up Van ( Nos)</li>
            <li>Crane (Cole)20 Tons (1 Nos)       </li>                                             
            <li>Bac-Hoe Excavator (1 Nos)</li>
            <li>5 & 10Ton Dutch Cone Penetrometer</li>
            <li>Lister Concrete Mixer (2Nos)     </li>                                      
            <li>Poker Vibrator (2 Nos)</li>
            <li>Dumpy Level (3 set)</li>
            <li>Carpentry Tools (Lot)</li>
            <li>Wheel  Barrows, trowels, shovels, Head-pans etc (Lot)</li>
            <li>Water Bowser 6000 (1 Lot)</li>
            <li>Roller Compactor</li>
            <li>Pile Integrity Test Tool</li>
            <li>Tarameter</li>
            <li>Drilling Rig and Accesories</li>

            </ul>

            <ul>
                <h2>rf tools</h2>
                <li>Andrew Prep, </li>
                <li>Spanners, </li>
                <li>Deck and Becker(hot air gun) Log on Tools, </li>
                <li>Crimpier Site Master, </li>
                <li>Tubby Rubber, </li>
                <li>Plumbing Tools etc.</li>

            </ul>

            <ul>
                <h2>power stringing Equipment</h2>
                <li>Hydraulic Puller</li>
                <li>Hydraulic  Tensioner</li>
                <li>Hydraulic  Puller-Tensioner</li>
                <li>Equipment Accessories</li>
                <li>Blocks</li>
                <li>Mesh Socks / Self Gripping Clamp</li>
                <li>Trolleys</li>
                <b>The Equipment Accessories are as  follows;</b>
                <li>Remote Control</li>
                <li>Pulling Recording Devices</li>
                <li>Hydraulic Reel Stands</li>
                <li>Steel Reels</li>
                <li>Pulling Rope</li>
                <li>Hydraulic Reel Winders. </li>

            </ul>
            </div>
        </div>


        </>
    )
}
export default About