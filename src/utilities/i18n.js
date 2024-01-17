import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import Hindi from '../translations/Hindi.json';
import English from '../translations/English.json';
import Marathi from '../translations/Marathi.json';

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      English: {
        translation: English,
      },
      Hindi: {
        translation: Hindi,
      },
      Marathi: {
        translation: Marathi,
      },
    },
    fallbackLng: 'English',
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
