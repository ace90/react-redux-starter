import * as React from 'react';
import { Link } from 'react-router-dom';

export default class AboutComponent extends React.Component {

    onHello() {
        console.log('dragon');
    }

    render() {
        return (
            <div className="shopping-list">
                <Link to={"/"}>index</Link>
            </div>
        );
    }
}
