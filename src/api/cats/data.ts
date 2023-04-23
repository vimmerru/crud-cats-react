import { Cat } from "."

export const breeds = [{
    id: '1',
    name: 'Scottish Fold'
}, {
    id: '2',
    name: 'Persian'
}]

export const cats = new Map<string, Cat>([
    ["xxx", {
        id: "xxx",
        name: "Barsic",
        breedId: breeds[0].id,
    }]
])