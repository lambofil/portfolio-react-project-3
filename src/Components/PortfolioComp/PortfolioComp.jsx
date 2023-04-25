import React from 'react'
import './PortfolioComp.css';
import CardList from '../CardList/CardList';
import { cardlist } from '../../data';

const PortfolioComp = () => {
  return (
    <div className="pl">
       <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className="pl-desc">My projects span as follows: Simple Form Validation, Exchange Rate Calculator App, Movie-Seat Booking App, Dom-Array Methods App, Custom Video Player App and a Sample Landing page.
            </p>
        </div>
        <div className="pl-list">
            {cardlist.map((item) => (<CardList key={item.id} img={item.img} link={item.link} />))}
        </div>  
    </div>
  )
}


export default PortfolioComp


// import React from 'react';
// // import CardList from '../CardList/CardList';
// // import { cardlist } from '../../data';
// import './PortfolioComp.css';
// import { Link } from 'react-router-dom';



// const PortfolioComp = ({img, link}) => {
//   return (
//     <div className="p">
//     <div className="p-browser">
//         <div className="p-circle red"></div>
//         <div className="p-circle yellow"></div>
//         <div className="p-circle green"></div>
//     </div>
//     <Link to={link}>
//         <img src={img} alt="" className="p-img" />
//     </Link>
    
//     </div>
//   )
// }

// export default PortfolioComp

// function PortfolioComp() {
//   return (
//     <div className="p">
//       <div className="p-browser">
//         <div className="p-circle red"></div>
//         <div className="p-circle yellow"></div>
//         <div className="p-circle green"></div>
//       </div>
//       <Link to={link}>
//         <img src={img} alt="" className="p-img" />
//       </Link>
              
//     </div>

//     // <section className='portfolio'>
//     //     <div className='container'>
//     //         <div className='section-title'>
//     //                 <h2 className='portfolio'>Portfolio</h2>
//     //                 <p className='my_works'>My Works</p>
//     //         </div>
            
//     //         <div className="row-portfolio-container">
//     //             <div className="item">Project 1</div>
//     //             <div className="item">Project 2</div>
//     //             <div className="item">Project 3</div>
//     //             <div className="item">Project 4</div>
//     //             <div className="item">Project 5</div>
//     //             <div className="item">Project 6</div>
//     //             {/* <div className="item">Project 7</div>
//     //             <div className="item">Project 8</div>
//     //             <div className="item">Project 9</div> */}
//     //         </div>

//     //     </div>
//     // </section>
//   )
// }

// export default PortfolioComp;