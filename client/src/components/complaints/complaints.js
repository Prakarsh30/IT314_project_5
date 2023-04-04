// start
import React, { Component } from "react";
import "../homepage/styles.css";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchComplaints } from "../../actions/index";
// import ComplaintsList from "./complaints_list";
// import { fetchlogin } from "../../api/index";

// class Complaints extends Component {
//   componentWillMount() {
//     this.props.fetchComplaints();
//   }

function Complaints() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <button href="/complaints/add">AddComplaint</button> */}
        <div className="alignmiddle"><button type="button" class="btn btn-primary">AddComplaint</button></div>
      </nav>

      <div style={{  backgroundColor: "#88BDBC" }}>
        {/* <ComplaintsList complaints={this.props.complaints} /> */}
        <br></br>
        <h1>Hello Vushil Bhavsar</h1>
        <h3>Your complaints will be displayed here!</h3>
      </div>
    </div>
  );
}


// function mapStateToProps(state) {
//   return { complaints: state.complaints.all };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchComplaints }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Complaints);
export default Complaints
// end
