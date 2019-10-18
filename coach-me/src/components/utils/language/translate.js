import language from './languages.json';

import store from '../../../store';

export const translate = words => {
  const state = store.getState();
  //   console.log('store', store);

  let langPref = 'English';

  if (state.client.clientinfo.language) {
    langPref = state.client.clientinfo.language;
    console.log('langPref', langPref);

    return language[langPref][words];
  }
  //   const langPref = state.client.clientinfo.language
  //     ? state.client.clientinfo.language
  //     : 'English';

  console.log('DEFAULT langPref', langPref);
  return language[langPref][words];
};

//  ERROR --------- this function will need to be called AFTER the GET request to airtable for clientInfo!
