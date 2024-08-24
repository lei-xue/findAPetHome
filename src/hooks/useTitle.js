import { useEffect } from "react"

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Pet Adoption`
  })
  return (null)
}
