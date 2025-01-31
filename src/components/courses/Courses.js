import React, { Component } from 'react';

// Components
import OpacityImage from './../common/OpacityImage';

// Images
const imageurl = 'https://bjarnigwebdocs.s3.eu-central-1.amazonaws.com/webimg/';
const algorithms = imageurl + 'cwa.png';
const programming = imageurl + 'pma.png';
const music = imageurl + 'pmb.png';

class Courses extends Component {
  render() { return<div className="container">
      <div className="music">
        <div className="date">Sonology, 2020 - 2021</div>
        <div className="hr"><hr /></div>
        <div className="row">

          <div className="col-lg-4">
              <h5>Composing with Algorithms </h5>
              <OpacityImage imageUrl= {algorithms} />
              <br />
              <p><a className="btn btn-default" href="/cwa">Access Course</a></p>
          </div>

          <div className="col-lg-4">
              <h5>Programming and Music 1</h5>
              <OpacityImage imageUrl= {programming} />
              <br />
              <p><a className="btn btn-default" href="/pma">Access Course</a></p>
          </div>

          <div className="col-lg-4">
              <h5>Programming and Music 2</h5>
              <OpacityImage imageUrl= {music} />
              <br />
              <p><a className="btn btn-default" href="/pmb">Access Course</a></p>
          </div>

        </div>

      </div>
  </div>
  }
}

export default Courses;
