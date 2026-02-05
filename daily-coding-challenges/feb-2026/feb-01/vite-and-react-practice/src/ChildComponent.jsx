function ChildComponent({ day, message, iceCream }) {

  return (
    <>
      <h1>hello, world!</h1>
      <p>today is { day }</p>
      <button onClick={iceCream}>click me!</button>
      <p>{ message }</p>
    </>
  )
}

export default ChildComponent