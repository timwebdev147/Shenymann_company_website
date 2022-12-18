import ClampLines from "react-clamp-lines";
import employee_icon from '../img/employee-icon-colored.png'
import PageIndicator from "../components/PageIndicator";
import { useEffect } from "react";
import '../styles/services.modules.scss';


function Services() {


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
        {
            id: 4,
            service: 'telecommunication',
            text: `Infrastructure development
            Turkey supplies and Installation
            Equipment installation and commission
            Installation of VHS/UHF Radios and programming
            Radio survey, Cable jointing and trunking system
            BTS/MSC Equipment installation, PABX system
            `,

        },
        {
            id: 5,
            service: 'geo-enviromental contractors and engineers',
            text: `Soil  Consolidation 
            Tailing Consolidation  (Mining Application)
             Liquefaction (Ground Improvement)
             Remediation ( In-situ Soil Remediation and Environmental Application`,

        },
    ]

    const products = [
        {
            id: 1,
            service: 'Telecommunication project planning, Design and execution'
        },
        {
            id: 2,
            service: 'Instrumentation and controls.'
        },
        {
            id: 3,
            service: 'Oil and Gas Services .'
        },
        {
            id: 4,
            service: 'GSM/CDMA Cell sites Infrastructure services'
        },
        {
            id: 5,
            service: 'Civil / Building/Construction works'
        },
        {
            id: 6,
            service: 'Mechanical  Rigging'
        },
        {
            id: 7,
            service: 'Geophysical Survey and Investigation'
        },
        {
            id: 8,
            service: 'Drilling , Casing   and Installation for Boreholes/wells'
        },
        {
            id: 9,
            service: 'Project Management and System Integrator for Information technology.'
        },
        {
            id: 10,
            service: 'Procurement and Maintenance services.'
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
        <PageIndicator pageName={'services'} pageLink={'/services'}/>

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
        </div>

        <div className="header-list">
            <h1>
            PRODUCTS AND SERVICES
            </h1>
            <ul>
                {
                    products.map((list) => (
                        <li key={list.id}>{list.service}</li>
                    ))
                }
            </ul>
        </div>

        </>
    )
}
export default Services;