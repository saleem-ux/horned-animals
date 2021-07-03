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


// --------------------------------------------------------------------------------------------------------

// import React from 'react';
// import HornedBeast from './HornedBeast';
// import Horned from './Horned.json';
// import SelectedBeast from './SelectedBeast';


// class Main extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             show: false
//         }
//     }
//     handleClose = () => {
//         this.setState({
//             show: !this.state.show
//         })
//     }


//   render() {

//       return (
//           <div>
//              {Horned.map((item,index)=>{
//                  return(
//                  <HornedBeast  title={item.title} description={item.description} url={item.image_url} key={index} />
//                  )
//              })}
//              <SelectedBeast/>

//           </div>


//       )
//   }
// }

// export default Main;






import React from 'react'
import HornedBeast from './HornedBeast';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            horns: 0
        }
    }

    submitChange = (event) => {
        this.setState({
            horns: Number(event.target.value)
        })
    }


    render() {

        return (

            <>

            <Form style={
                {
                    width: '50%', textAlign: 'center',
                    fontSize: '25px', marginLeft: 'auto', marginRight: 'auto'
                }}
                onChange={this.submitChange}>
                <Form.Group>
                    <Form.Label> View The Beasts By The Number of Horns</Form.Label>
                    <Form.Control as='select' change='change'>
                        <option value="0">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                    </Form.Control>
                </Form.Group>
            </Form>

            <Row md={1} >
                <Col>
                    {this.props.DataJson.map((data, index) => {
                        if (this.state.horns === data.horns){
                            return <HornedBeast image_url={data.image_url} title={data.title} description={data.description}
                            key={index} horns={data.horns} showSelectedBeast={this.props.handleModal} />
                        }else if (this.state.horns === 0) {
                            return <HornedBeast image_url={data.image_url} title={data.title} description={data.description}
                            key={index} horns={data.horns} ImgOnClicked={this.props.handleModal} />
                        }

                    })
                    }
                </Col>
            </Row>
        </>        )
    }
}

export default Main;