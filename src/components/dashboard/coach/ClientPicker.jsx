import React,{useState,useEffect} from 'react';
import {connect,useDispatch, useSelector} from "react-redux";
import { getUnassignedClients,assignClient } from "../../../redux/actions/coachActions";
import '../../../sass/dashboard/coach/client_list/clientPicker.scss';

const ClientPicker = (props) => {
    const availableClients = useSelector((state) => state.coach.availableClients);
    const dispatch = useDispatch();
    const [displayClients, setDisplayClients]=useState()


    useEffect(() => {
        dispatch(getUnassignedClients())
        
    },[])
    useEffect(() => {
        
        setDisplayClients(Object.entries(availableClients))
    },[availableClients])
    console.log(props.state)
    return (
        <div className='available-client-display'>
            {displayClients?.map(item => {
                return (
                    <div
                    onClick={()=>dispatch(assignClient(props.state.id, item[1].id))}
                     className="available-client">
                        <p>{item[1].first_name}</p>
                        <p>{item[1].last_name}</p>
                    </div>
                )
            })}
           
            
        </div>
    );
}

const mapStateToProps = (state) => {
	// console.log("CoachDashboard State", state);
	return {
		state: state.coach.data,
		clientList: state.coach.clientList,
		availableClients: state.coach.availableClients,
	};
};

export default connect(mapStateToProps)(ClientPicker);
