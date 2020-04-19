# Ruby Basics Practice

# 1 Print 'Hello World'
p "Hello World"

# 2 Interpolate the adjective variable into the Hello World string using #{}
adjective = 'Big Bad'

p "Hello #{adjective} World"

# 3 Save "Hello World" to a variable. Without changing the letters in your code manually, permanently change "Hello World" to all uppercased letters.
a = 'Hello World'

p a.upcase

# Nums Array and Enumerables
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1 Use .uniq to print the array with all duplicate entries removed

p nums.uniq

# 2 Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)

p nums.push 16

p nums.pop

p nums.shift

p nums.unshift

p nums.length

# 3 Use .include? to check if the array contains the number 8

p nums.include? 8

# 4 Use .find_all to find all the numbers greater than 10

p nums.find_all{|num| num > 10}

# 5 use .all? to check if all the numbers are greater than 0?

p nums.all?{|num| num > 0}

# 6 use any? to check if there are any numbers that are divisible by 8

p nums.any?{|num| num / 8}

# 7 use .count to let you know how many numbers are greater than 4

p nums.count{|num| num > 4}

# 8 use .each_with_index to print each item times its index

p nums.each_with_index

# 9 .find the number that is divisible by 7 and 5 and is greater than 0

p nums.find{|num| num % 7 == 0 && num % 5 == 0 && num > 0}

# 10 .find_index of the number that is divisible by 5 and 7 and is greater than 0

p nums.find_index{|num| num % 7 == 0 && num % 5 == 0 && num > 0}

# 11 return the .first 3 numbers

p nums.first(3)

# 12 return the .last 5 numbers

p nums.last(5)

# 13 .group_by the modulo of 3 ( % 3 )

p nums.group_by{|num| num % 3}

# 14 use minmax to return the smallest and largest number

p nums.minmax

# 15 use .reject to return all the numbers that are NOT divisible by 3

p nums.reject{|num| num % 3 != 0}

# 16 use .select to return all the numbers divisible by 5

p nums.select{|num| num % 5 == 0}