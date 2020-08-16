import React from 'react'
import { UseImageProp } from './ImageInterface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function ImageList({ items, clsName, prefixUrl ,onChange }: UseImageProp) {

  const handleChange = onChange;

  function handleSelect(event: React.ChangeEvent<unknown>, item: any) {
    if (handleChange) {
      handleChange(item, event)
    }
  }

  if (!items.length) return <div className={clsName}>No items</div>

  return (
    <div className={clsName ?? 'row'}>
      {
        items.map((item: any, idx: number) =>
          <div className="col-md-4" key={idx}>
            <div className="single-item inner-box">
              <figure className="image-box">
                <picture>
                  <img className="img-fluid" src={`${prefixUrl}${item.media_url}`} alt="" />
                </picture>
                <div className="time">
                  <span>Ngày tạo: </span>
                  <span>{item.created_at}</span>
                </div>
                <div className="overlay-box">
                  <div className="overlay-inner">
                    <div className="content">
                      <span className="handle-action" onClick={(event) => handleSelect(event, item)}>
                        <FontAwesomeIcon icon={faPlusCircle} size="lg" className="" />
                      </span>
                    </div>
                  </div>
                </div>
              </figure>
              <div className="lower-content">
                <div className="text">{item.media_title}</div>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}
