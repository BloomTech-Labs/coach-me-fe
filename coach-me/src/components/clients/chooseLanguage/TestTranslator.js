import React from 'react';

import { translate } from '../../utils/language/translate';

const TestTranslator = () => {
  return (
    <div>
      <h1>Testing the translator function</h1>
      <h2>{translate('hello')}!</h2>
      <p>
        the above word should be in spanish if the translate function is
        working.
      </p>
    </div>
  );
};

export default TestTranslator;
