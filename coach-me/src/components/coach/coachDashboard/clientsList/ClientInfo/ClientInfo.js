import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastCheckInTime } from '../../../../../actions/coachActions';

//Component Imports
import MotiveModal from './MotiveModal';
//Styling
import './clientInfo.scss';

const ClientInfo = props => {
    // console.log('ClientInfo Component', props);

    const state = useSelector(state => state.coach);
    const dispatch = useDispatch();
    // console.log('Client INFO STATE', state);

    const [show, setshow] = useState(false);
    const { clientprofile } = props;

    useEffect(() => {
        if (clientprofile && clientprofile.clientId) {
            dispatch(getLastCheckInTime(clientprofile.clientId));
        }
        // eslint-disable-next-line
    }, [clientprofile]);

    const toggleModal = e => {
        setshow(!show);
    };

    let checkIn;
    if (isNaN(state.clientCheckIn)) {
        checkIn = '0';
    } else {
        checkIn = state.clientCheckIn;
    }

    if (clientprofile) {
        return (
            <div className='clientprofile'>
                <h6>{checkIn}</h6>
                <MotiveModal
                    toggleModal={toggleModal}
                    motivation={clientprofile.motivations}
                    show={show}
                />
                <div className='key-details'>
                    <h1>{clientprofile.clientName}</h1>
                    <div className='details'>
                        <div className='condition-container'>
                            {clientprofile.conditions.map((conditions, i) => (
                                <p key={i}>{conditions}</p>
                            ))}
                        </div>

                        <p>{clientprofile.language}</p>
                    </div>
                </div>
                <div
                    className={`${
                        clientprofile.motivations ? 'motivations' : 'ghost'
                    } `}
                >
                    <label>Motivation:</label>
                    <div className='text-container'>
                        <p> {clientprofile.motivations}</p>
                    </div>

                    <button onClick={() => toggleModal()}> ...See More</button>
                </div>
            </div>
        );
    }
    return null;
};

export default ClientInfo;
