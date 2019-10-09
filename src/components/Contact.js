import React from 'react';
import './contact.css';


function Contacts(props) {

    return (
        <figure class="Contact">
           
           
               <img class="avatar" src= {props.avatar} alt="Gens"/>
               <div class="name"><h1>{props.name}</h1></div>
                    <div class="status">
                        <p>{props.status ? "Online" : 'Offline'}</p>
                        <div class={props.status ? "status-online" : "status-offline"}></div>
                    </div>
                
                
           </figure>
    );
}
   export default Contacts;