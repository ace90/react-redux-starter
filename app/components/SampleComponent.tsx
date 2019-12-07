import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  onInitialVal: () => void;
}

export default class SampleComponent extends React.Component<Props> {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.onInitialVal();
  }

  onHello() {
      console.log('dragon');
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for </h1>
          <a href="#" onClick={this.onHello.bind(this)}>were</a>
          king ace qwwq
        <ul>
          <li>Instagram werer sfsfa</li>
          <li>WhatsApp</li>
        </ul>
        <Link to="/about">with hasht</Link>
      </div>
    );
  }
}
