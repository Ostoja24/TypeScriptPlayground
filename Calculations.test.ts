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
test('use another operator: #',() => {
    expect(() => Calculations.createCalculation(5,55,"#")).toThrow("Operator was not defined correctly")})
test('divide two numbers 0 / 5, expected error',() =>{
    expect(() => Calculations.createCalculation(0,5,"/")).toThrow("Number can't be 0, please provide another")})
test('multiple two numbers 5 * 55, expected 275',() =>{
    expect(Calculations.createCalculation(5,55,"*")).toBe(275)
})
test('multiple two numbers 5 * 5.55, expected 27.75',() =>{
    expect(Calculations.createCalculation(5,5.55,"*")).toBe(27.75)
})
test('divide two numbers 1 / 5, expected 0.2',() =>{
    expect(Calculations.createCalculation(1,5,"/")).toBe(0.2)})
test('multiple sums (1+3+5+2), expected 11',() =>{
    const result1: number = Calculations.createCalculation(1,3,"+");
    const result2: number = Calculations.createCalculation(5,2,"+");
    expect(Calculations.createCalculation(result1,result2,"+")).toBe(0.2)})
test('sum without operator',() =>{
    expect(() => Calculations.createCalculation(5,55,"")).toThrow("Operator was not defined correctly")})

