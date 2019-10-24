import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { translate } from '../../utils/language/translate';
import { connect } from 'react-redux';
import './chooseLanguage.scss';
import TestTranslator from './TestTranslator';

const ChooseLanguage = props => {
    const [langPref, setLangPref] = useState('esp');
    const dispatch = useDispatch();

    return (
        <div className='container'>
            <div className='title-container'>
                <h1 className='english-title'>Choose Language</h1>
                <h1 className='spanish-title'>Elige tu idioma preferido</h1>
            </div>
            <div className='lang-btn-container'>
                <button onClick={() => setLangPref('en')}>English</button>
                <button onClick={() => setLangPref('esp')}>
                    En Espa&ntilde;ol
                </button>
            </div>
            <div className='next-btn-container'>
                <Link className='next-btn' to='/translator'>
                    Next
                </Link>
            </div>
        </div>
    );
};

export default ChooseLanguage;
