import * as React from 'react'

type ClickableListProps<T> = {
  items: T[]
  onSelect: (item: T) => void
}

function ClickableList<T>(props: ClickableListProps<T>) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          <button onClick={() => props.onSelect(item)}>choose</button>
          {item}
        </li>
      ))}
    </ul>
  )
}

// usage
const items = [1, 2, 3, 4]

function ClickableListInner<T>(
  props: ClickableListProps<T>,
  ref: React.ForwardedRef<HTMLUListElement>
) {
  return (
    <ul ref={ref}>
      {props.items.map((item, i) => (
        <li key={i}>
          <button onClick={(el) => props.onSelect(item)}>Select</button>
          {item}
        </li>
      ))}
    </ul>
  )
}

const ClickableListForward = React.forwardRef(ClickableListInner)

const Home = () => {
  const homeRef = React.createRef<HTMLUListElement>()

  React.useEffect(() => {
    console.log(homeRef)
  }, [])
  return (
    <div>
      this is home
      <ClickableList
        items={items}
        onSelect={(item) => console.log(item)}
      ></ClickableList>
      <ClickableListForward
        items={items}
        onSelect={(item) => console.log(item)}
        ref={homeRef}
      ></ClickableListForward>
    </div>
  )
}

export default Home
