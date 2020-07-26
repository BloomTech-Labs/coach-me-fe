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

    const selectClient = (item) => {
        dispatch(assignClient(props.state.id, item[1].id))
        setDisplayClients(Object.entries(availableClients))
    }

    const clicker = (item) => {
        selectClient(item)
        window.location.reload();
    }
    console.log(props.state)
    return (
        <div className='available-client-display'>
            {displayClients?.map(item => {
                return (
                    <div
                    onClick={()=>clicker(item)}
                     className="available-client">
                         <p>{item[1].last_name}</p>, <p className='first'>{item[1].first_name}</p> 
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
