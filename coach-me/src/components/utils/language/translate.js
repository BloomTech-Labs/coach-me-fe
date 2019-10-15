import language from './languages.json';

const langPref = language.esp; //GET client's preferered language from firebase

const translate = words => {
  return langPref[words];
};

export default translate;
