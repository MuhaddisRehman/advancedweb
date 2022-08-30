import React, { useState } from 'react'
// import LineCharts from '../Home/LineChart/LineCarts'
import '../Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGenderless } from '@fortawesome/free-solid-svg-icons';
// import DoughnutChart from './DoughnutChart/DoughnutChart';
import competitor1 from '../../Assets/HomeImages/Competitors/img-3.jpg';
import competitor2 from '../../Assets/HomeImages/Competitors/img-4.jpg';
import competitor3 from '../../Assets/HomeImages/Competitors/img-5.jpg';
import competitor4 from '../../Assets/HomeImages/Competitors/img-6.jpg';
import competitor5 from '../../Assets/HomeImages/Competitors/img-7.jpg';
import author1 from '../../Assets/HomeImages/Authors/300-2.jpg';
import author2 from '../../Assets/HomeImages/Authors/300-5.jpg';
import author3 from '../../Assets/HomeImages/Authors/300-14.jpg';
import author4 from '../../Assets/HomeImages/Authors/300-20.jpg';
import author5 from '../../Assets/HomeImages/Authors/300-23.jpg';
import trend1 from '../../Assets/HomeImages/Trends/bebo.svg';
import trend2 from '../../Assets/HomeImages/Trends/fox-hub.svg';
import trend3 from '../../Assets/HomeImages/Trends/kickstarter.svg';
import trend4 from '../../Assets/HomeImages/Trends/plurk.svg';
import trend5 from '../../Assets/HomeImages/Trends/telegram.svg';
import trend6 from '../../Assets/HomeImages/Trends/vimeo.svg';
import Table from 'react-bootstrap/Table';
import { ProgressBar } from 'react-bootstrap';














function Dashboard() {

  const [isActive, setIsActive] = useState(true);
  const [isActive1, setIsActive1] = useState(false);

  const [isActive2, setIsActive2] = useState(false);

  const handleClick = () =>{
    setIsActive(true);
    setIsActive1(false);
    setIsActive2(false);
    };
    const handleClick1 = () =>{
      setIsActive(false);
      setIsActive1(true);
      setIsActive2(false);
      };
      const handleClick2 = () =>{
        setIsActive(false);
        setIsActive1(false);
        setIsActive2(true);
        };
  return (
    <div className='container   '>
      <div className="col-lg-12 row cardContainer">
        <div style={ {backgroundColor: isActive ?'#F1416C' : '', color: isActive ? 'white': '',}} className="col-lg-3 col-md-12 card hoverColor1" onClick={handleClick}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z" fill="currentColor"></path>
													<path opacity="0.3" d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z" fill="currentColor"></path>
													<path opacity="0.3" d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z" fill="currentColor"></path>
        </svg>
        <div className='mt-4 mb-2'><h4>Shopping Cart</h4></div>
        <div><small>Lands, Houses, Ranchos, Farms</small></div>

        </div>
        <div style={ {backgroundColor: isActive1 ?'#009ef7' : '', color: isActive1 ? 'white': '',}} className="col-lg-3 col-md-12 card hoverColor2" onClick={handleClick1}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path opacity="0.3" d="M18 21.6C16.3 21.6 15 20.3 15 18.6V2.40001C15 2.20001 14.6 1.99996 14.3 2.19996L13 3.59999L11.7 2.3C11.3 1.9 10.7 1.9 10.3 2.3L9 3.59999L7.70001 2.3C7.30001 1.9 6.69999 1.9 6.29999 2.3L5 3.59999L3.70001 2.3C3.40001 2.1 3 2.20001 3 3.40001V18.6C3 20.3 4.3 21.6 6 21.6H18Z" fill="currentColor"></path>
													<path d="M12 12.6H11C10.4 12.6 10 12.2 10 11.6C10 11 10.4 10.6 11 10.6H12C12.6 10.6 13 11 13 11.6C13 12.2 12.6 12.6 12 12.6ZM9 11.6C9 11 8.6 10.6 8 10.6H6C5.4 10.6 5 11 5 11.6C5 12.2 5.4 12.6 6 12.6H8C8.6 12.6 9 12.2 9 11.6ZM9 7.59998C9 6.99998 8.6 6.59998 8 6.59998H6C5.4 6.59998 5 6.99998 5 7.59998C5 8.19998 5.4 8.59998 6 8.59998H8C8.6 8.59998 9 8.19998 9 7.59998ZM13 7.59998C13 6.99998 12.6 6.59998 12 6.59998H11C10.4 6.59998 10 6.99998 10 7.59998C10 8.19998 10.4 8.59998 11 8.59998H12C12.6 8.59998 13 8.19998 13 7.59998ZM13 15.6C13 15 12.6 14.6 12 14.6H10C9.4 14.6 9 15 9 15.6C9 16.2 9.4 16.6 10 16.6H12C12.6 16.6 13 16.2 13 15.6Z" fill="currentColor"></path>
													<path d="M15 18.6C15 20.3 16.3 21.6 18 21.6C19.7 21.6 21 20.3 21 18.6V12.5C21 12.2 20.6 12 20.3 12.2L19 13.6L17.7 12.3C17.3 11.9 16.7 11.9 16.3 12.3L15 13.6V18.6Z" fill="currentColor"></path>
												</svg>
        <div className='mt-4 mb-2'><h4>Appartments</h4></div>
        <div><small>Flats, Shared Rooms, Duplex</small></div>
        </div>
        <div style={ {backgroundColor: isActive2 ?'#40CD89' : '', color: isActive2 ? 'white': '',}} className="col-lg-3 col-md-12 card hoverColor3" onClick={handleClick2}>
    
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.3" d="M14 12V21H10V12C10 11.4 10.4 11 11 11H13C13.6 11 14 11.4 14 12ZM7 2H5C4.4 2 4 2.4 4 3V21H8V3C8 2.4 7.6 2 7 2Z" fill="currentColor"></path>
            <path d="M21 20H20V16C20 15.4 19.6 15 19 15H17C16.4 15 16 15.4 16 16V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="currentColor"></path>
          </svg>
        <div className='mt-4 mb-2'><h4>Sales Stats</h4></div>
        <div><small>40% Increased for FY20</small></div>
        </div>
        {/* <div className=" col-lg-3 col-md-12 graphCards card">
          <div className="header"><h4>Sales Overview</h4></div>
          <div className="graph">
          <LineCharts/>
          </div>
        </div>
        <div className="col-xl-4 col-lg-3 col-md-12 graphCards card">
          <h4>Action Needed</h4>
          <div className="graph2">
          <DoughnutChart /> 
          </div>
        </div>
        <div className=" col-lg-3 col-md-12 graphCards card"></div> */}
        <div className='col-lg-3 col-md-12 card'>
          <header>
            <h5>My Competitors</h5>
            <small className='grey'>More than 400 +new products</small>
          </header>
          <section className='mt-3'>
              <Competitors Img={competitor1} title="Cup & Green" Manager="CoreAd" Price="24,900"/>
              <Competitors Img={competitor2} title="Yellow Hearts" Manager=" KeenThemes" Price="70,900"/>
              <Competitors Img={competitor3} title="Nike & Blue" Manager="Invision Inc." Price="7,200"/>
              <Competitors Img={competitor4} title="Red Boots" Manager="Figma Studio" Price="36,450"/>
              <Competitors Img={competitor5} title="Desserts platter" Manager="Figma Studio" Price="64,753"/>
          </section>
        </div>
        <div className='col-lg-8 col-md-12 col-sm-12 card'>
          <header>
            <h5>Products Statistics</h5>
            <small className='grey'>Over 500 products</small>
            <div className=' addProductButton'>
              <a href='#!' className='linkText '>+ New Product</a>
            </div>
          </header>
          <Table>
            <thead>
              <tr>
                <th><input type="checkbox" /> Authors</th>
                <th >Company</th>
                <th>Progress</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            
            <ProductStatisticsRow Img={author1} companyFocus="Web, UI/UX Design" Variant="info" authorSkills="C#, ASP.NET, MS SQL"authorName="Jessie Clarcson" Company="Intertico" Progress="50"/>
            
            <ProductStatisticsRow Img={author2}  companyFocus="Houses & Hotels"Variant="danger"authorSkills="PHP, Laravel, VueJS" authorName="Lebron Wayde"  Company="Agoda" Progress="70"/>
            
            <ProductStatisticsRow Img={author3} companyFocus="Transportation" Variant="success"authorSkills="HTML, JS, ReactJS"authorName="Ana Simmons"  Company="RoadGee" Progress="60"/>
            
            <ProductStatisticsRow Img={author4}  companyFocus="Insurance"Variant="warning" authorSkills="Python, PostgreSQL, ReactJS"authorName="Natali Goodwin"  Company="The Hill" Progress="50"/>
            
            <ProductStatisticsRow Img={author5} companyFocus="Art Director"authorSkills="HTML, JS, ReactJS"authorName="Kevin Leonard"  Company="RoadGee" Progress="90"/>
            
            </tbody>
          </Table>
        </div>
        <div className="col-xl-3 card">
          <header>
            <h5>
              Trends
            </h5>
            <small  className="grey">Latest Tech trends</small>
          </header>
          <section className=''>
              <TrendsRow Img={trend4} title="Top Authors" description="Mark, Rowling, Esther" Price="+82$"/>
              <TrendsRow Img={trend5} title="Popular Authors" description="John, Pat, Jimmy" Price="+280$"/>
              <TrendsRow Img={trend6} title="New Users" description="Mark, Rowling, Esther" Price="+4500$"/>
              <TrendsRow Img={trend1} title="Active Customers" description="Mark, Rowling, Esther" Price="+686$"/>
              <TrendsRow Img={trend3} title="Bestseller Theme" description="Disco, Retro, Sports" Price="+726$"/>
              <TrendsRow Img={trend2} title="Fox Broker App" description="Finance, Corporate, Apps" Price="+145$"/>
          </section>
        </div>
        <div className="col-xl-3 card">
          <header>
            <h5>Activities</h5>
            <small  className="grey">890,344 Sales</small>
          </header>
          <div className='d-flex row justify-content-center align-items-center  '>
            
            <ActivitiesList time="08:42" description="Outlines keep you honest. And keep structure" color="text-warning " textType="grey"/>
            <ActivitiesList time="10:00"  color="text-success" description="AEOL meeting" textType="dark-grey" />
            <ActivitiesList time="14:37"  color="text-danger" description ="Make deposit USD 700. to ESL"  textType="dark-grey"/>
            <ActivitiesList time="16:50"  color="text-info" description="Make deposit USD 700. to ESL" textType="grey" />
            <ActivitiesList time="21:03"  color="text-danger"description="New order placed #XF-2356."  textType="dark-grey"/>
            <ActivitiesList time="16:50"  color="text-info" description="Indulging in poorly driving and keep structure keep great" textType="grey"/>
            <ActivitiesList time="21:03"  color="text-danger" description="New order placed #XF-2356." textType="dark-grey"/>
            <ActivitiesList time="10:30"  color="text-success" description="Finance KPI Mobile app launch preparion meeting" textType="grey" />

          </div>
        </div>
        
        <div className="col-xl-3 card">
        <header>
          <h5>Todo</h5>
        </header>
        <section>
        <TodoList color="bg-success" title="Create FireStone Logo" dueDate="Due in 2 Days" />
        <TodoList color="bg-info" title="Stakeholder Meeting" dueDate="Due in 3 Days"/>
        <TodoList color="bg-warning" title="Scoping & Estimations"dueDate="Due in 5 Days" />
        <TodoList color="bg-info"title="KPI App Showcase" dueDate="Due in 2 Days"/>
        <TodoList color="bg-danger" title="Project Meeting" dueDate="Due in 12 Days"/>
        <TodoList color="bg-success" title="Customers Update"dueDate="Due in 1 Days"/>
        </section>
        </div>
        
      </div>
    
    </div>
  )
}

export default Dashboard


function  Competitors(props){
  return(
      <div className="competitor">
        <img src={props.Img} alt={props.Alt} />
        <span className='details'>
          <h5>{props.title}</h5>
          <small className="grey"><p>Study highway types </p></small>
          <small className='grey by-text'> By:<span className='blue-text' >{props.Manager}</span></small>
        </span>
        <span className='ms-auto'>
          <h5 className='dark-grey'>{props.Price}</h5>
          <small className="grey  ">Sales</small>
        </span>
      </div>)
  ;
};


function ProductStatisticsRow(props){
  return(
      <>
        <tr className='authorStats'>
        <td>
          <div className='d-flex'>
          <div >
            <input type="checkbox"  name='authors'/>
            <img className='authorImg' src={props.Img} alt="" />
          </div>
          <div className='d-flex authorDetail ms-1'>
            {props.authorName}
            <span >
              <small className='grey authorSkills'>{props.authorSkills}</small>
            </span>
          </div>
          </div>
          
        </td>
        <td>
        <span className=' Holder '>
            {props.Company}
            <span><small className='grey'>{props.companyFocus}</small></span>
        </span> 
        </td>
        <td>
        
        <span className='Holder '>
          <div><small className='grey'>{props.Progress}%</small></div>
          <ProgressBar  className='progressBar' variant={props.Variant} now={props.Progress} />
        </span>
        </td>
        <td>
        <span className='d-flex flex-wrap justfify-content-start Holder align-items-center'>
          <a href="#!"className=" actionBtn"><svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
																				<path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="currentColor"></path>
																				<path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="currentColor"></path>
																			</svg></a>
          <a href="#!" className=" actionBtn"><svg width="24" height="24" viewBox="1 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
																				<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
																				<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
																			</svg></a>
          <a href="#!"className=" actionBtn1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																				<path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="currentColor"></path>
																				<path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="currentColor"></path>
																				<path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="currentColor"></path>
																			</svg></a> 
        </span>
        </td>
      </tr>
      </>
  )
}
function TrendsRow(props){
  return(
    <div className='competitor'>
        <span className='imgHolder'>
          <img className='trendImg' src={props.Img} alt={props.Alt}/>
        </span>
        <span className='details'>
          <h5>{props.title}</h5>
          <small className="grey"><p>{props.description} </p></small>
        </span>
        <span className='ms-auto'>
          <small  className=" dark-grey trendPrice ">
            {props.Price}
          </small>
        </span>
    </div>
  );
};
function ActivitiesList(props){
return(
      <div>
        {props.time}
        
        <FontAwesomeIcon icon={faGenderless} className={`${props.color} fs-4 p-1 `}  />
        
        <div><small className={`${props.textType} activityText `}>{props.description}</small></div>
      </div>
)}
function TodoList(props){
return(
  <div className=' d-flex align-items-center mb-2'>
    <span className={`${props.color} todoList bg-success`}>
    </span>
    <input type="checkbox" />
    <div className='d-flex row align-items-center '>
    <div className='todoTitle'>
      {props.title}
    </div>
    <div >
    <small className='grey'>
    {props.dueDate}
    </small>
    </div>
    </div>
  </div>
)}