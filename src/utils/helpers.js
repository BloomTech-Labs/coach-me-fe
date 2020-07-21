import React from 'react'
import { Provider } from 'react-redux'
import store from '../store';
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

export const Helper = ui => {
  return {
    ...render(
      <Provider store={store}>
          <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store,
  }
}