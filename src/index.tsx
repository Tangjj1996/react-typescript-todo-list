import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from './app'

ReactDom.render(<App name="gujianjie" />, document.getElementById('app'))

interface webpackModule {
  hot: {
    accept(): void
  }
}
if ((module as unknown) as webpackModule) {
  ;((module as unknown) as webpackModule).hot.accept()
}
