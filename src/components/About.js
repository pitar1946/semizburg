import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="container mt-5">
      <div className='row mb-5'>
        <div className="col-lg-12  mx-auto">
         <p>Pivara otvorena 22.02.2016</p>
         <p>Adresa: Svrake I/38</p>
         <p>Semizovac Federation Of Bosnia And Herzegovina Bosnia And Herzegovina</p>
         <p>Tel:062 736 197</p>
         <p className='mb-5'>Mail: <a href='mailto:haris.piknjac@gmail.com'>haris.piknjac@gmail.com</a></p>
         <p>Proizvodimo craft ili zanatsko pivo, sa 100% prirodnim sastojcima, bez aditiva, hemikalija i konzervansa. Nefiltrirano i nepasterizovano.</p>
        </div>
       </div>
       </div> 
    );
  }
}
export default About;