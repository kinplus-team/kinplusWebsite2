import { useEffect } from "react";

export default function useDocumentTitle( title ) {
  if (typeof title !== "string") {
    throw new Error("Title must be a string!");
  }

  useEffect(() => {
    document.title = `${title} - Kinplus Technologies`
  }, [title])

  return null
}
