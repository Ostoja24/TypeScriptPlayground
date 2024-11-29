import { Calculations } from "./Calculations";

test('add two numbers 1 + 5, expected 6',() =>{
    expect(Calculations.Calculate(1,5,"+")).toBe(6)
})
test('add two numbers -1 + 5, expected 4',() =>{
    expect(Calculations.Calculate(-1,5,"+")).toBe(4)
})
test('minus two numbers 5 - 6, expected -1',() =>{
    expect(Calculations.Calculate(5,6,"-")).toBe(-1)
})
test('use another operator: #',() => {
    expect(() => Calculations.Calculate(5,55,"#")).toThrow("Operator was not defined correctly")})
test('divide two numbers 0 / 5, expected error',() =>{
    expect(() => Calculations.Calculate(0,5,"/")).toThrow("Number can't be 0, please provide another")})
test('multiple two numbers 5 * 55, expected 275',() =>{
    expect(Calculations.Calculate(5,55,"*")).toBe(275)
})
test('multiple two numbers 5 * 5.55, expected 27.75',() =>{
    expect(Calculations.Calculate(5,5.55,"*")).toBe(27.75)
})
test('divide two numbers 1 / 5, expected 0.2',() =>{
    expect(Calculations.Calculate(1,5,"/")).toBe(0.2)})
test('multiple sums (1+3+5+2), expected 11',() =>{
    const result1: number = Calculations.Calculate(1,3,"+");
    const result2: number = Calculations.Calculate(5,2,"+");
    expect(Calculations.Calculate(result1,result2,"+")).toBe(11)})
test('sum without operator',() =>{
    expect(() => Calculations.Calculate(5,55,"")).toThrow("Operator was not defined correctly")})
test('operation about string and calculation "1 + 2 = 3"',()=>{
    expect(() => Calculations.convertStringCalculation("1 + 2")).toBe(3)});


