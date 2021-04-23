import * as React from 'react'

interface appProp {
  name: string
}
const App: React.FC<appProp> = ({ name }) => {
  return <div>this is a test {name}.</div>
}

export default App
