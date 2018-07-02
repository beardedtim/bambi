const pipeP = (...fns) => startingState => fns.reduce(async (a, c) => {
  const value = await a
  return c(value)
}, startingState)

export default pipeP
