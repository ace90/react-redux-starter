import * as React from 'react';
import { Link } from 'react-router-dom';

export default class SampleComponent extends React.Component {

  onHello() {
      console.log('dragon');
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for </h1>
          <a href="#" onClick={this.onHello.bind(this)}>were</a>
          <Link to={"/about"}>about</Link>
        <ul>
          <li>Instagram werer sfsfa</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
