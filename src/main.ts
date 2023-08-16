// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active: boolean,
    albums: stringOrNumberArray
}

type userId = stringOrNumber

// Literal types
let myName: 'Dave'

let username: 'Dave' | 'John' | 'Amy'

username = "Amy"

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMessage = (message: any): void => {
    console.log(message)
}

logMessage('Hello')
logMessage(add(2, 3))

let subtract = function(c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = function(c, d) {
    return c * d
}

logMessage(multiply(2, 2))