# Ruby enumerable diagnostic

# Feel free to work on the problems in any order

words = %w(We the People of the United States, in Order to form a more
perfect Union, establish Justice, insure domestic
Tranquility, provide for the common defence, promote the
general Welfare, and secure the Blessings of Liberty to
ourselves and our Posterity, do ordain and establish this
Constitution for the United States of America.)



even_nums = [0, 2, 4, 6]
odd_nums = [1, 5, 7, 9]
mixed_nums = [0, 2, 4, 7]


  # Question 1
  # Write ruby code to return the longest entry in the list supplied (words)
  # Assume each entry in the list implements a length method that returns
  # a Fixnum.
  def longest(list)
    long = " "
    list.each do |word|
      if (long.size < word.size)
        long = word
      end
    end
    p long
  end

  longest(words)

  # Question 2
  # Write ruby code to return the sum 1 to 99 (expect 4950)
  # (i.e. apply the `+` operator).
  # Assume each entry implements a `+` method.
  def sum
    a = 0
    for i in 1 .. 99 do
        a += i
    end
    p a
  end

  sum

  # Question 3
  # Write ruby code that returns true if some of the entries
  # in a list of numbers are odd (test the three given number arrays)
  def some_odd(numbers)
    for i in numbers do 
        if i % 2 != 0
            return p true
        end
    end
    return p false
  end

  some_odd(even_nums)

  # Question 4
  # Write ruby code that returns true if every entry in a
  # list of numbers are even (test the three given number arrays)
  def every_even(numbers)
    sum = 0
    numbers.each do |numbs|
        sum = numbs += sum
    end
    p sum
    if sum % 2 == 0
        return p true
    else
    return p false
    end
  end

  every_even(mixed_nums)
  every_even(even_nums)

  # Question 5
  # Write ruby code that returns an array with all of the
  # entries from a list of words capitalized (i.e. 'foo' becomes 'Foo').

  def transform(words)
    p words.map { |word| word.capitalize }
  end


  transform(words)

  
