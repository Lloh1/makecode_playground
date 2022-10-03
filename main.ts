function main_rule () {
    return internal_rule("abc")
}
function internal_rule (rule: string) {
    return rule
}
function print2 (statement: string) {
    console.log(statement)
}
let d = main_rule()
print2(d)
