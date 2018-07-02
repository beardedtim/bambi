const composeP = (...fns) => start => fns.reduceRight(async (a, c) => {
  const value = await a
  return c(value)
}, start)

export default composeP
