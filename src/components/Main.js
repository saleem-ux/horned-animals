// import React from 'react';
// import HornedBeast from './HornedBeast';

//  class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <HornedBeast/>
//       </div>
//     )
//   }
// }

// export default Main


// import React from 'react'
// import HornedBeast from './HornedBeast'

// class Main extends React.Component {
//   render() {
//     let HornedArr = [{
//       image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//       title: "UniWhal",
//       description: "A unicorn and a narwhal nuzzling their horns",
//     },

//     {
//       image_url: "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
//       title: "Rhino Family",
//       description: "Mother (or father) rhino with two babies",
//     },

//     {
//       image_url: "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
//       title: "Unicorn Head",
//       description: "Someone wearing a creepy unicorn head mask",
//     }]
//     return (
//       <div>
//         <HornedBeast title={HornedArr[0].title} description={HornedArr[0].description} image_url={HornedArr[0].image_url} />
//         <HornedBeast title={HornedArr[1].title} description={HornedArr[1].description} image_url={HornedArr[1].image_url} />
//         <HornedBeast title={HornedArr[2].title} description={HornedArr[2].description} image_url={HornedArr[2].image_url} />
//       </div>
//     )
//   }
// }
// export default Main

import React from 'react';
import HornedBeast from './HornedBeast';
import Horned from './Horned.json';

class Main extends React.Component {
  


  render() {
     
      return (
          <div>
             {Horned.map((item,index)=>{
                 return(
                 <HornedBeast  title={item.title} description={item.description} url={item.image_url} key={index} />
                 )
             })}

          </div>


      )
  }
}

export default Main;