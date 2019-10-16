import language from './languages.json';

import store from '../../../store';

// const langPref = language.esp; //GET client's preferered language from firebase

export const translate = words => {
  const state = store.getState();
  //   console.log('store', store);
  let langPref = 'en';
  if (state.client.clientInfo.fields) {
    langPref = state.client.clientInfo.fields.Language;
  }
  //   const langPref = state.client.clientInfo.fields.Language
  //     ? state.client.clientInfo.fields.Language
  //     : 'en';
  console.log('langPref', langPref);

  return language[langPref][words];
};

//  ERROR --------- this function will need to be called AFTER the GET request to airtable for clientInfo!
