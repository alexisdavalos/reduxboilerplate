import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchKanye, actionName} from '../actions'

const Component = props =>{
  const fetchKanye = props.fetchKanye;
  useEffect(()=>{
    fetchKanye();
  },[fetchKanye])
    return(
        <div className='App-Redux'>
          <h3>This Quote Is Brought To You By: Redux</h3>
            <p>"{props.async.kanyeism}"- Kanye West</p>
        </div>
    )
}

const mapStateToProps = state => {
    return{
      async: {
        kanyeism: state.async.kanyeism,
        error: state.async.error,
        isFetching: state.async.isFetching
      },
      sync: {
        date: state.sync.date
      }
    }
  }
export default connect(
mapStateToProps,
//place imported actions below
{fetchKanye, actionName}
)(Component);