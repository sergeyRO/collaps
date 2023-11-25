import { useState } from "react"
import ExpandedList from "./expandedList"

export interface ICollapseProps
{
    collapsedLabel?: boolean,
    expandedLabel?: boolean
}

export const collapse = ({collapsedLabel, expandedLabel}: ICollapseProps) => {
    const [collapsed, setCollapsed] = useState(collapsedLabel)
    const [expanded, setExpanded] = useState(expandedLabel)

    const ClickHandle = () =>{
        if (!collapsed) {
            setCollapsed(true) 
            setExpanded(false)
        }
        else 
        {
            setCollapsed(false)
            setExpanded(true)
        }
    }
  return (
        <>
            <button className="btn btn-primary" type="button" onClick={() => {ClickHandle()}}>
                {collapsed ? "Развернуть" : "Свернуть" }
            </button>
            <ExpandedList 
                expandedLabel={expanded}
            />
        </>
  )
}

export default collapse
