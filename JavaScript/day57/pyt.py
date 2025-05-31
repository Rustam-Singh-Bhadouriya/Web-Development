'''Hello world'''

dict = {
    "Name":"Rustam",
    "company" : "R.S.Coporation",
    "Role" : "founder chairman CEO"
}
# print(dict)
'''Update function of dictonary in python'''
dict.update(Name = "Rustam Singh Bhadouriya")
# dict.Name = "hhh" - worng way

for i in dict:
    print(i , ": "+dict[i])