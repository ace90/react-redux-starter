import * as React from 'react';
import {connect} from 'react-redux';
import SampleComponent from "../components/SampleComponent";

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
    };
};

const SampleContainer = connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
export default SampleContainer;
