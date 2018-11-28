import * as React from 'react';
import {connect} from 'react-redux';
import AboutComponent from "../components/AboutComponent";

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    };
};

const AboutContainer = connect(mapStateToProps, mapDispatchToProps)(AboutComponent);
export default AboutContainer;
