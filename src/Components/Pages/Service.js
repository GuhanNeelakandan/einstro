import React from "react";
import "./service.css";
import counselling from '../../Images/service/1.png'
import universities from '../../Images/service/2.png'
import coaching from '../../Images/service/3.png'
import loan from '../../Images/service/4.png'
import scholarship from '../../Images/service/5.png'
import visa from '../../Images/service/6.png'

function Service() {
    const serviceList =[
        {
            name:'Career Counselling',
            image:counselling
        },
        {
            name:'750+ Universities',
            image:universities
        },
        {
            name:'IELTS/PTE Coaching',
            image:coaching
        },
        {
            name:'Loan Assistance',
            image:loan
        },
        {
            name:'Scholarship',
            image:scholarship
        },
        {
            name:'Visa Process',
            image:visa
        },

    ]
  return (
    <div className="container p-0">
      <div className="service-head">
        <h1 className="service-topic">Our Service</h1>
        <p className="service-content">
          Executive Trade International in an University Application Centre,
          guiding Bangladeshi students to Australian, British, Canadian and
          Irish universities!
        </p>
      </div>
      <div className="service-main">
        {
            serviceList.map((list)=>{
                return   <div className="service-card">
                <div>
                    <img src={list.image} className="img-card"/>
                </div>
                <div className="service-card-content">
                  <h2>{list.name}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam
                  </p>
                  <span className="service-link">Learn More <i class="fas fa-arrow-right mx-3"></i></span>
                </div>
              </div>
            })
        }
         
        </div>
    </div>
  );
}

export default Service;
