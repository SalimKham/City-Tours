import React, { Component } from 'react'
import './Tour.scss';
export default class Tour extends Component {
    state = {
        showinfo:false
    }
    hundleInfo = () => {
        this.setState({
            showinfo:!this.state.showinfo
        })
    }
    render() {
        
        const { id,city, img, name, info } = this.props.tour;
        const removeTour = this.props.remove;
    return (
      <article className='tour'>
            <div className='image-container'>
                <img  src={img} alt=''/>
                <span className='close-btn' onClick={()=>{removeTour(id)}}>
                    <i className="fa fa-window-close"/>
                </span>
            </div>
            <div className='tour-info'>
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>info
                    <span onClick={this.hundleInfo}>
                <i className="fa fa-caret-down"/>
                    </span></h5>
                {this.state.showinfo && <p>{info}</p>}
            </div>
      </article>
    )
  }
}
