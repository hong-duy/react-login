import React, { useEffect, useState } from "react"
import CONFIG from "../../configs/config"
import { getList } from "../../api/HandleRequest"
import { UseSizeProp, Size } from "./SizeInterface";

function useSizes() {
  const [sizes, setSizes] = useState<Size[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    let current = true;
    async function fetchSizes() {
      const res = await getList(CONFIG.API_SIZE.LIST)
      if (res.isError) return setError(res.message)
      if (current) setSizes(res.result.data)
    }
    fetchSizes()

    return () => { current = false }
  }, [])

  return [sizes, setSizes, error];
}

export default function SizeList({ onChange }: UseSizeProp) {
  const [sizes, setSizes, error] = useSizes() as [Size[], React.Dispatch<React.SetStateAction<Size[]>>, string];

  /**
   * Handle click from prop
   * @param event 
   * @param item 
   */
  function handleClick(event: React.ChangeEvent<unknown>, item: Size) {
    const sizeChecked = sizes.filter((i: Size) => {
      i.id === item.id ? i.selected = true : i.selected = false;

      return i;
    })

    setSizes(sizeChecked);

    if (onChange) onChange(item, event)
  }

  return (
    <div className="d-flex flex-wrap size">
      {error && <div>{error}</div>}
      {sizes.map((item: Size, idx: number) => <span key={idx} onClick={(event) => handleClick(event, item)} className={`item ${item.selected === true ? 'active': ''}`}>{item.title}</span>)}
    </div>
  )
}