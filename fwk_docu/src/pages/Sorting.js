const items = [
    { name: 'Banana', color: 'bg-yellow-300', score: 1},
    { name: 'Lime', color: 'bg-green-400', score: 5},
    { name: 'Apple', color: 'bg-red-500', score: 3},
    { name: 'Orange', color: 'bg-orange-400', score: 2},
]

const getSortValue = (item) => {
    return item.name
}

const sortData = (data, order) => {

    return data.sort((a, b) => {
        const valueA = getSortValue(a);
        const valueB = getSortValue(b);

        const orderValue = order === 'asc' ? 1 : -1;

        if(typeof valueA === 'string'){
            return (valueA.localeCompare(valueB)) * orderValue
        } else {
            return (valueA - valueB) * orderValue
        }
    })
}

console.log('Resultado -->', sortData(items, 'asc'))