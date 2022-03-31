const groupBy = require('./groupBy')

it('should group an array by string of a specified function', () => {
    const food = [
        {id: 0, type: 'meat', name: 'lamb'},
        {id: 1, type: 'meat', name: 'beef'},
        {id: 2, type: 'vegetable', name: 'lettuce'},
        {id: 3, type: 'starch', name: 'corn'}
    ]

    const foodGroupByType = {
        meat: [
            {id: 0, type: 'meat', name: 'lamb'},
            {id: 1, type: 'meat', name: 'beef'}
        ],
        vegetable: [
            {id: 2, type: 'vegetable', name: 'lettuce'}
        ],
        starch: [
            {id: 3, type: 'starch', name: 'corn'}
        ]

    }
    expect(groupBy(food, ({ type }) => type)).toEqual(foodGroupByType)
})

it('should group an array by string of a specified function', () => {
    const nums = [4.5, 4.1, 5, 6]

    const numsGroupByFloor = {
        '4': [4.5, 4.1],
        '5': [5],
        '6': [6]
    }
    expect(groupBy(nums, Math.floor)).toEqual(numsGroupByFloor)
})