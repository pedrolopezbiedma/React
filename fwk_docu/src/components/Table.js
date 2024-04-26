import React from 'react'

const Table = ({ items, config, keyFn }) => {
    return(
        <div>
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        { config.map((column) => {
                            return (
                                <React.Fragment key={column.label}>
                                    { column.header }
                                </React.Fragment>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    { items.map((item) => {
                        return (
                            <tr key={keyFn(item)} className="border-b">
                                { config.map((column) => {
                                    return (
                                        <td key={column.label} className="p-3">{column.render(item)}</td>
                                    )
                                })}
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table