import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

ReactDom.render(<App />, document.getElementById('app'))

interface webpackModule {
  hot: {
    accept(): void
  }
}
if ((module as unknown) as webpackModule) {
  ;((module as unknown) as webpackModule).hot.accept()
}
