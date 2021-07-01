// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button'


// class SelectedBeast extends React.Component {

   

//     render() {


//         return (

//             <Modal showModal={this.props.show} onHide={this.props.handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{this.props.title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={this.props.handleClose}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={this.props.handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>

//         )
//     }
// }

// export default SelectedBeast




// --------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------



import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component {

  render() {
    return (
      <Modal  show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.ImgOnClicked.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top"
            src={this.props.ImgOnClicked.image_url}
            alt={this.props.ImgOnClicked.title}
            className='img'
          />
          <Card.Text >
            {this.props.ImgOnClicked.description}
          </Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;