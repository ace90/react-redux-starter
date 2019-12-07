import { getTodoList } from './../selectors/todo';
import { showTodoList } from './../actions/actions';
import * as React from 'react';
import {connect} from 'react-redux';
import SampleComponent from "../components/SampleComponent";

const mapStateToProps = (state) => {
    console.log('some', getTodoList(state));
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInitialVal: () => {
            console.log('hello');
            const param = [
                {
                    id: 1,
                    name: 'sample'
                }
            ];
            dispatch(showTodoList(param));
        }
    };
};

const SampleContainer = connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
export default SampleContainer;
