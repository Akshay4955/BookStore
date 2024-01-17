import {CHANGE_LANGUAGE} from './Constants';

export const changeLanguage = value => {
  return {type: CHANGE_LANGUAGE, value: value};
};
