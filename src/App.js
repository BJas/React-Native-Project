import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Photo extends Component {
  state = {
    isOver : false
  }

  mouseOver = () =>{
    this.setState({isOver : true});
  }

  mouseOut = () =>{
    this.setState({isOver : false});
  }

  render() {
      if(this.state.isOver) {
        return (<img className='photoCar blur' src={this.props.url} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} alt='mercedes s-class' />); 
      } 
      else {
        return (<img className='photoCar' src={this.props.url} onMouseOver={this.mouseOver} alt='mercedes s-class' />);
      }   
  }
}

class PhotoList extends Component {
  state = {
    imageUrl : [
    {
      id : 1,
      url : 'http://carrrsmag.com/data_images/models/mercedes-s-class/mercedes-s-class-01.jpg'
    },
    {
      id : 2,
      url : 'http://carrrsmag.com/data_images/models/mercedes-s-class/mercedes-s-class-01.jpg'
    },
    {
      id : 3,
      url : 'http://carrrsmag.com/data_images/models/mercedes-s-class/mercedes-s-class-01.jpg'
    },
    {
      id : 4,
      url : 'http://carrrsmag.com/data_images/models/mercedes-s-class/mercedes-s-class-01.jpg'
    },
    {
      id : 5,
      url : 'http://carrrsmag.com/data_images/models/mercedes-s-class/mercedes-s-class-01.jpg'
    },
    {
      id : 6,
      url : 'http://carrrsmag.com/data_images/models/mercedes-s-class/mercedes-s-class-01.jpg'
    }
   ],
   clicked : false
  };

  changeView() {
    this.setState({clicked: true});
  }
  changeView() {
    this.setState({clicked: false});
  }

  render(){
    let imageUrl = this.state.imageUrl.map((url)=>(
      <Photo
        key={url.id}
        url={url.url}
        />
      ));
    var className = this.state.clicked ? 'flex' : 'photos';
      return(
        <div className={className}>
        <div>
          <button onClick={this.changeView}>Vertical</button>
          <button onClick={this.changeViewHor}>Horizontal</button>
        </div>
        {imageUrl}
        </div> 
      );
  }
}

class Magazine extends Component {
  state = {
    isOver : false
  }

  mouseOver = () =>{
    this.setState({isOver : true});
  }

  mouseOut = () =>{
    this.setState({isOver : false});
  }

  render() {
      if(this.state.isOver) {
        return (<div className="pad"><div className='magazineImg zoom'><img className="magImg"  src={this.props.link} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} alt='mercedes s-class' /> <h2>{this.props.text}</h2> <h4>{this.props.description}</h4></div></div>); 
      } 
      else {
        return (<div className="pad"><div className='magazineImg'><img className="magImg" src={this.props.link} onMouseOver={this.mouseOver} alt='mercedes s-class' /> <h2>{this.props.text}</h2> <h4>{this.props.description}</h4> </div></div>);
      }   
  }
}

class MagazineList extends Component {
  state = {
    magazineUrl : [
    {
      id : 1,
      link : 'http://img.tjskl.org.cn/pic/z2577d9d-200x200-1/pinarello_lungavita_2010_single_speed_bike.jpg',
      text : 'Item 1',
      description: 'Price: 449$'
    },
    {
      id : 2,
      link : 'http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg',
      text : 'Item 2',
      description: 'Price: 549$'
    },
    {
      id : 3,
      link : 'http://img1.exportersindia.com/product_images/bc-small/dir_55/1620613/cannondale-jekyll-1-2011-mountain-bike-309779.jpg',
      text : 'Item 3',
      description: 'Price: 549$'
    }
   ]
  };


  render(){
    let magazineInfo = this.state.magazineUrl.map((url)=>(
      <Magazine
        key={url.id}
        link={url.link}
        text={url.text}
        description={url.description}
        />
      ));
      return(
        <div className='magazine'>
          {magazineInfo}
        </div>
      );
  }
}














// class Product extends Component {
//   state = {
//     formIsEdit : false
//   }
//   handleClickEvent = () =>{
//     this.setState({formIsEdit : true});
//   }
//   handleCloseEvent = () =>{
//     this.setState({formIsEdit : false});
//   }
//   render() {
//     if(this.state.formIsEdit) {
//       return (
//         <div className='oneProduct editForm'>
//           <div>
//             <input type='text' placeholder='title'/>
//           </div>
//           <div>
//             <input type='text' placeholder='description' />
//           </div>
//           <button>Save!</button>
//           <button onClick={this.handleCloseEvent}>Cancel</button>
//         </div>
//       );
//     } else {
//       return (
//         <div className='oneProduct'>
//           <h2 className='productTitle'>{this.props.productTitle}</h2>
//           <img className='productImageUrl' src={this.props.productImageUrl} alt='some cool staf' />
//           <p className='productDescription'>{this.props.productDescription}</p>
//           <p className='productPrice'>{this.props.productPrice}</p>
//           <button onClick={this.handleClickEvent}>React!</button>
//         </div>
//       );
//     }
//   }
// }


class App extends Component {
  render() {
    return (
      <div>
        <PhotoList />
        <MagazineList />
      </div>
    );
  }
}

export default App;
