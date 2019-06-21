import React, {Component} from 'react';
import { connect } from 'react-redux';

// Actions
import ALogIn from '../modules/Actions/ALogIn';

// Components
import FormComponent from '../Components/Form/form';

class ReduxActions extends Component {
    render() {
        return (
            <FormComponent 
                onSubmit={this.props.onSubmit}
                error={this.props.error}
                state={this.props.state}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.LogInReducer.state,
        error: state.LogInReducer.error
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: function (credentials) {
        dispatch(ALogIn(credentials));
    }
});

export default connect( mapStateToProps, mapDispatchToProps)(ReduxActions);
