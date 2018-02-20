export const cloneType = base => {
  if (Array.isArray(base)) {
    return []
  }

  return {}
}