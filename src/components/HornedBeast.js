// import React from 'react';

// class HornedBeast extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>UniWhal</h2>
//                 <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"/>
//                 <p>A unicorn and a narwhal nuzzling their horns</p>

//                 <h2>Unicorn Head</h2>
//                 <img  src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg"  />
//                 <p>Someone wearing a creepy unicorn head mask</p>

//                 <h2>Rhino Family</h2>
//                 <img src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"/>
//                 <p>Mother (or father) rhino with two babies</p>



//             </div>
//         )
//     }
// }

// export default HornedBeast


// import React from 'react'
// class HornedBeast extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>{this.props.title}</h2>
//                 <img src={this.props.image_url} alt={this.props.title} />
//                 <p>{this.props.description}</p>
//             </div>
//         )
//     }
// }
// export default HornedBeast

// ------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------




// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import SelectedBeast from './SelectedBeast';

// class HornedBeast extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             NumberOfHeart: 0,
//         }


//     }
//     IncreaseNumberOfVote = () => {
//         this.setState({
//             NumberOfHeart: this.state.NumberOfHeart+1
//         })
//     }



//     render() {
//         return (
//             <div>
//                 {/* <h2>
//                     {this.props.title}
//                 </h2>
//                 <img onClick={this.increaseHorne} src={this.props.url} alt={this.props.alt} />

//                 <p>
//                     {this.props.description}
//                 </p>
//                 <p>
//                 💙 {this.state.numOfHorned}
//                 </p> */}

//                 <Card style={{ width: '18rem' }}>

//                     <Card.Body >
//                         <Card.Title>{this.props.title}</Card.Title>
//                         <Card.Img onClick={this.props.show} variant="top" src={this.props.url} alt={this.props.title} />
//                         <Card.Text>
//                             {this.props.description}
//                         </Card.Text>
//                         <Card.Text>
//                             Click the heart button if you love it.
//                         </Card.Text>
//                         <Button variant="success" onClick={this.IncreaseNumberOfVote}>💙</Button>{' '}
//                         <Card.Text>
//                             Number Of Heart : {this.state.NumberOfHeart}
//                         </Card.Text>
//                     </Card.Body>
//                 <SelectedBeast/>
//                 </Card>
//             </div>

//         )
//     }
// }

// export default HornedBeast;


import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class HornedBeast extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfLike: 0
        }
    }
    increaseLike = () => {
        this.setState({
            numberOfLike: this.state.numberOfLike + 1
        })
    }
    handleModal = () => {
        this.props.showSelectedBeast(this.props.title);
    }

    render() {
        return (
            <Card style={{ width: '18rem', margin: '20px', textAlign: 'center' }}>
                <Card.Img variant="top" style={{ height: '18rem' }}
                    src={this.props.image_url}
                    alt={this.props.title}
                    className='img'
                    onClick={this.handleModal}
                />
                <Card.Body style={{ color: 'white', backgroundColor: '#053742' }}>
                    <Card.Title >{this.props.title}</Card.Title>
                    <Card.Text >
                        {this.props.description}
                    </Card.Text>
                    <Button variant="success" onClick={this.increaseLike}>💙 {this.state.numberOfLike}</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeast;