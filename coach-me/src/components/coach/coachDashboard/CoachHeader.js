import React from 'react';
import './coachHeader.scss';
import coachMeIcon from '../../utils/assets/1coachHeader.svg';
import Coach from '../../utils/assets/2coachHeader.svg';
import Me from '../../utils/assets/3coachHeader.svg';
import downArrow from '../../utils/assets/downArrow.svg';
import { useDispatch, useSelector } from 'react-redux';

const CoachHeader = () => {
    const state = useSelector(state => state);
    console.log('state', state);
    return (
        <div className='coach-header'>
            <div className='header-icon'>
                <img
                    className='coachMeIcon'
                    alt='coachMeIcon'
                    src={coachMeIcon}
                ></img>
                <img className='Coach' alt='Coach' src={Coach}></img>
                <img className='Me' alt='Me' src={Me}></img>
            </div>
            <div className='small-profile'>
                <h3> Karin Underwood</h3>
                <img
                    className='downArrow'
                    alt='downArrow'
                    src={downArrow}
                ></img>
            </div>
        </div>
    );
};

export default CoachHeader;
