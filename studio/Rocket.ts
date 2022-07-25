import { Payload } from "./Payload"

export class Rocket {
    name: string
    totalCapacityKg: number
    cargoItems: []
    astronauts: []
    constructor (name: string, totalCapacityKg: number) {
        this.name = name,
        this.totalCapacityKg = totalCapacityKg
    }

    sumMass(items: Payload[]): number {
        let mass: number = 0
        items.forEach((items, index) => {
            mass += items[index].massKg
        })
    }

    
}