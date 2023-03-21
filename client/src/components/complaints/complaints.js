// start
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComplaints } from '../../actions/index';
import ComplaintsList from './complaints_list';
import {fetchlogin} from '../../api/index';

class Complaints extends Component {
    componentWillMount() {
        this.props.fetchComplaints();
    }
    
    render() {
        return (
        <div>
            <ComplaintsList complaints={this.props.complaints} />
        </div>
        );
    }
    }

function mapStateToProps(state) {
    return { complaints: state.complaints.all };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchComplaints }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Complaints);
// end
