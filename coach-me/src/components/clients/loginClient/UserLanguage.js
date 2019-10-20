import React from 'react';

const UserLanguage = props => {
  const { config, handleChange, setconfig } = props;
  const nextstep = e => {
    e.preventDefault();
    props.next();
  };

  return (
    <div>
      <h1>Choose Language</h1>
      <form>
        <label>English</label>
        <input
          type='checkbox'
          name='language'
          onChange={handleChange}
          value='English'
        />
        <label>Español</label>
        <input
          type='checkbox'
          name='language'
          onChange={handleChange}
          value='Spanish'
        />
        <button type='submit'> add</button>
      </form>
      <button onClick={nextstep} type='button'>
        Next
      </button>
    </div>
  );
};
export default UserLanguage;
