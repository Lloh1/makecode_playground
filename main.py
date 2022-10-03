def main_rule():
    return internal_rule("abc")
def internal_rule(rule: str):
    return rule
def print2(statement: str):
    print(statement)
d = main_rule()
print2(d)