import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Row'
import DataJson from './components/Horned.json'
import SelectedBeast from './components/SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      DataJson: DataJson,
      show: false,
      ImgOnClicked: {}
    }
  }

  handleModal = (title) => {
    let ImgOnClicked = DataJson.find(data => {
      if (data.title === title) {
        return data;
      }
    })
    this.setState({
      show: true,
      ImgOnClicked: ImgOnClicked
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <>
        <Main DataJson={this.state.DataJson} handleModal={this.handleModal} />
        <SelectedBeast ImgOnClicked={this.state.ImgOnClicked} handleClose={this.handleClose} show={this.state.show} />
      </>
    )
  }
}

export default App;