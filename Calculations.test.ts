import { Calculations } from "./Calculations";

test('add two numbers 1 + 5, expected 6',() =>{
    expect(Calculations.createCalculation(1,5,"+")).toBe(6)
})
test('add two numbers -1 + 5, expected 4',() =>{
    expect(Calculations.createCalculation(-1,5,"+")).toBe(4)
})
test('minus two numbers 5 - 6, expected -1',() =>{
    expect(Calculations.createCalculation(5,6,"-")).toBe(-1)
})
// test('divide two numbers 0 / 5, expected error',() =>{
//     expect(Calculations.createCalculation(0,5,"/")).toThrowError()})
test('multiple two numbers 5 * 55, expected 275',() =>{
    expect(Calculations.createCalculation(5,55,"*")).toBe(275)
})
// test('sum without operator',() =>{
//     expect(Calculations.createCalculation(5,55,"")).toThrow("Operator was not defined correctly")})
