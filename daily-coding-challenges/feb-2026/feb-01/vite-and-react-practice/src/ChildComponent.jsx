function ChildComponent({ day, message }) {

  return (
    <>
      <h1>hello, world!</h1>
      <p>today is { day }</p>
      <button>click me!</button>
      <p>{ message }</p>
    </>
  )
}

export default ChildComponent