import React from 'react';
import './contact.css';

const ContactList = [
    {   
        avatar: "https://randomuser.me/api/portraits/women/50.jpg",
        firstName: "Tracey",
        lastName: "Jacobs"
    },
    {   avatar: "https://randomuser.me/api/portraits/men/62.jpg",
        firstName: "Lance",
        lastName: "Hanson"
    },
    {   
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        firstName: "Austin",
        lastName: "Barnes"
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/51.jpg",
        firstName: "Lillian",
        lastName: "Carpenter"
    },
    {   
        avatar: "https://randomuser.me/api/portraits/women/14.jpg",
        firstName: "Hannah",
        lastName: "Gardner"
    }
  ];

const ContactView = ()=>{
    return ContactList.map((item) =>
    
    <figure class="Users">
        
        <li key={item.avatar}>
         <img src={item.avatar} alt="Gens"/>
           <h3>{item.firstName}</h3>
             <p>{item.lastName}</p>
        </li>
         
    </figure>
    )
}
    
    
export default ContactView;