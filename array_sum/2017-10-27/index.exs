
var = [1, 2, 3, 4, 10, 11]


[1, 2, 3, 4, 10, 11]
|> Enum.sum
|> IO.puts


result = Enum.map_reduce(var, 0, fn(prev, current) -> { prev+current, prev} end)

IO.puts result 
