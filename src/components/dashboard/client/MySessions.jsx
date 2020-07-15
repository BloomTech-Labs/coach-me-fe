import React from 'react';
import {connect, useDispatch,useSelector} from 'react-redux';
import {getClientSessions} from '../../../redux/actions/clientActions';


const MySessions = (props) => {
    const dispatch = useDispatch();
    const getSessions = () => {
        dispatch(getClientSessions(props.state.id))
    }
    const state = useSelector((state) => state.client);
    console.log(props)
    return (
		<div className="notification-container">
		<button
        onClick={getSessions}
        >{props.state.first_name}</button>
			
		</div>
	);

};

const mapStateToProps = (state) => {
	return {
		state: state.client.client_data, 
		sessions: state.client.sessions
	};
};

export default connect(mapStateToProps)(MySessions);
