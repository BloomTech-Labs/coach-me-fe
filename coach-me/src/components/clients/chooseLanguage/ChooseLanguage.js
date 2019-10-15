import React, { useState } from 'react';

import './chooseLanguage.scss';

const ChooseLanguage = () => {
  const [langPref, setLangPref] = useState('esp');

  return (
    <div className='container'>
      <div className='title-container'>
        <h1 className='english-title'>Choose Language</h1>
        <h1 className='spanish-title'>Elige tu idioma preferido</h1>
      </div>
      <div className='lang-btn-container'>
        <button onClick={() => setLangPref('en')}>English</button>
        <button onClick={() => setLangPref('esp')}>En Espa&ntilde;ol</button>
      </div>
      <button className='next-btn hide'>Next</button>
    </div>
  );
};

export default ChooseLanguage;
