import React from 'react';
import {connect} from 'react-redux';
import {asyncAction, actionName} from '../actions'

const Component = (props) =>{
  console.log(props)
    return(
        <div>
            <p>{props.kanyeism}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return{
      kanyeism: state.kanyeism,
      error: state.error,
      isFetching: state.isFetching
    }
  }
export default connect(
mapStateToProps,
//place imported actions below
{asyncAction, actionName}
)(Component);