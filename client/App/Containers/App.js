/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// Package imports
import apolloClient from '../../apolloClient'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import AppContainer from './AppContainer'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Reactotron from '../../ReactotronConfig'

import reducer from '../Redux/Store/reducer'

//const store = createStore(reducer)

const store = createStore(reducer, undefined, Reactotron.createEnhancer())

const App = () => {

  return (
    <ApolloProvider client={apolloClient}>
      <ApolloHooksProvider client={apolloClient}>
				<Provider store={store}>
					<AppContainer />
				</Provider>
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App