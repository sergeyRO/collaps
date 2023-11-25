import { useState } from "react"
import { ICollapseProps } from "./collapse"

export const expandedList = ({expandedLabel}:ICollapseProps) => {
    let maxHeight='0px'
    !expandedLabel ? maxHeight='0px' : maxHeight='150px'

  return (
    <div className="collapse" style={{
        maxHeight:`${maxHeight}`,
        overflow:'hidden',
        transition:'all 2s 0s'}}>
        <div className="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
    </div>
  )
}

export default expandedList
