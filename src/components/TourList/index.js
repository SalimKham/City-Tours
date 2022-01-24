import React, { Component } from 'react'
import './TourList.scss';
import Tour from '../Tour/Tour';
import tourdata from '../tourData';
export default class TourList extends Component {
    state = {
        tours: tourdata
    }
    removeTour = id => {
        const { tours } = this.state;
        const newList = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: newList
        })
    }
    render() {
        const { tours } = this.state;
    return (
      <section className='tourlist'>
            {tours.map(tour => {
                return (
                    <Tour key={tour.id} tour={tour} remove={this.removeTour}/>
             )
        })}
      </section>
    )
  }
}
