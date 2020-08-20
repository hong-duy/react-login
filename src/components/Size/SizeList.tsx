import React, { useEffect, useState } from "react"
import CONFIG from "../../configs/config"
import { getList } from "../../api/HandleRequest"
import { UseSizeProp, Size } from "./SizeInterface";


function useSizes(actived: number) {
  const [sizes, setSizes] = useState<Size[]>([])
  const [error, setError] = useState('')
  useEffect(() => {
    async function fetchSizes() {
      const res = await getList(CONFIG.API_SIZE.LIST)
      if (res.isError) return setError(res.message)

      setSizes(res.result.data);
    }
    fetchSizes()
  }, [actived])

  return [sizes, error];
}

export default function SizeList({ actived, onChange }: UseSizeProp) {
  const [sizes, error] = useSizes(actived) as [Size[], string];

  /**
   * Handle click from prop
   * @param event 
   * @param item 
   */
  function handleClick(event: React.ChangeEvent<unknown>, item: any) {
    if (onChange) onChange(item, event)
  }

  return (
    <div className="d-flex flex-wrap size">
      {error && <div>{error}</div>}
      {sizes.map((item: Size, idx: number) => <span key={idx} onClick={(event) => handleClick(event, item)} className="item active">{item.title}</span>)}
    </div>
  )
}