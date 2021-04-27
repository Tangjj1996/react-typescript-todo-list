import * as React from 'react'

type ButtonProps = React.ComponentPropsWithoutRef<'button'>

const About: React.FC = () => {
  const reference = React.createRef<HTMLButtonElement>()

  React.useEffect(() => {
    console.log(reference.current)
  }, [])

  return (
    <div>
      this is about <Button ref={reference}>按钮</Button>
    </div>
  )
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button type="button" {...props} ref={ref}>
      {props.children}
    </button>
  )
)

export default About
