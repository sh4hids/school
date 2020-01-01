def cheese_and_crackers(cheese_count, boxes_of_crackers):
    print(f"You have {cheese_count} cheeses!")
    print(f"You have {boxes_of_crackers} boxes of crackers!")
    print(f"That's a great thing!\n")

print("We can just give the functions numbers")
cheese_and_crackers(20, 35)

print("OR, can pass the numbers from variables")
number_of_cheeses = 36
amount_of_crackers = 60

cheese_and_crackers(number_of_cheeses, amount_of_crackers)
