'use client'
function error({reset,error}) {
  return (
    <>
    <h1 color='red'>{error.message}</h1>
    <button onClick={()=> reset()}>reset</button>
    </>
  )
}

export default error