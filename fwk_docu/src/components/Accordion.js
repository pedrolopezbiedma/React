import { useState } from "react"

import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(-1);
    const isExpanded = (index) => index === expandedIndex;

    const handleClick = (clickedIndex) => {
        isExpanded(clickedIndex) ? setExpandedIndex(-1) : setExpandedIndex(clickedIndex)
    }

    return ( 
        <div className="border-x border-t y rounded">
            { items.map((item) => {
                    return (
                        <div key={item.id} onClick={() => handleClick(item.id)}>
                            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" >
                                { item.header }
                                { isExpanded(item.id) ? <GoChevronDown className="text-2xl"/> : <GoChevronLeft className="text-2xl"/>}
                            </div>
                            { isExpanded(item.id) && <div className="border-b p-5">{ item.content }</div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion