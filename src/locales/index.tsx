import {I18n} from 'i18n-js';
import {getLocales} from 'react-native-localize';

import en from './en';

const i18n = new I18n({en});

i18n.enableFallback = true;
i18n.defaultLocale = 'en';
i18n.locale = getLocales()?.[0]?.languageCode;

export default i18n;
