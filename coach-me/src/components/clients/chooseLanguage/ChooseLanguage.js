import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { translate } from '../../utils/language/translate';

import { getClientInfo } from '../../../actions/clientActions';

import './chooseLanguage.scss';

const ChooseLanguage = props => {
  //   const [langPref, setLangPref] = useState('esp');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientInfo(props));
  }, []);

  return (
    <div className='container'>
      <div className='title-container'>
        <h1>{translate('hello')}hello</h1>
        <h1 className='english-title'>Choose Language</h1>
        <h1 className='spanish-title'>Elige tu idioma preferido</h1>
      </div>
      <div className='lang-btn-container'>
        {/* <button onClick={() => setLangPref('en')}>English</button>
        <button onClick={() => setLangPref('esp')}>En Espa&ntilde;ol</button> */}
      </div>
      <button className='next-btn hide'>Next</button>
    </div>
  );
};

export default ChooseLanguage;
