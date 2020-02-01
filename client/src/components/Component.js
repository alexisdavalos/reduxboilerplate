import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchKanye, actionName} from '../actions'

const Component = (props) =>{

  const fetchKanye = props.fetchKanye;
  useEffect(()=>{
    fetchKanye();
  },[fetchKanye])

    return(
        <div className='App-Redux'>
          <h3>This Quote Is Brought To You By: Redux</h3>
            <p>"{props.kanyeism}"- Kanye West</p>
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
{fetchKanye, actionName}
)(Component);