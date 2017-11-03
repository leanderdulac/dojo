defmodule Math do 
  def array_sum(array) do
    Enum.reduce(array, 0, fn(item, acc) -> item + acc end)
  end
end

[1, 2, 3, 4]
|> Math.array_sum
|> IO.puts
