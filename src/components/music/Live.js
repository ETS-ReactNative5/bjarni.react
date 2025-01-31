import React, {Component} from 'react';
import './../../assets/css/style.css';
import './../../assets/css/custom.css';
import './../../assets/css/login.css';
import './../../assets/css/admin.css';
import './../../assets/css/app.css';
import './../../assets/css/main.css';

class Live extends Component {

  componentDidMount() { window.scrollTo(0, 0) }

  render() {
    return <div className="container">

      <div className="content">
        <div className="music-submenu">

          <ul className="nav nav-pills">
            <li>
              <a href="music">pieces</a>
            </li>
            <li>
              <a href="code">software</a>
            </li>
            <li>
              <a href="writings">writings</a>
            </li>
            <li className="active">
              <a href="live">live</a>
            </li>
            <li>
              <a href="collaborations">co</a>
            </li>
            <li>
              <a href="visual">visual</a>
            </li>
            <li>
              <a href="mixes">mixes</a>
            </li>
          </ul>

          <div className="hr"><hr/></div>

        </div>

    <div className="media">
    <p>Ghent</p>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/640450551&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <p>Utrecht</p>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/248736798&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <p>Brussels</p>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27069515&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <p>Den Haag</p>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F10416675&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <p>MGBG, live set, Brussels</p>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F26870332&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>

    <div className="media">
    <p>Einóma, live set, Netherlands</p>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" src="http://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F27067420&amp;auto_play=false&amp;show_artwork=true&amp;color=1C6E8C"></iframe>
    </div>


      </div>
    </div>
  }
}

export default Live;
