# Sierpinski Triangle

The Sierpinski triangle is a fractal described in 1915 by Waclaw Sierpinski. It is a self similar structure that occurs at different levels of iterations, or magnifications.
The Sierpinski triangle activity illustrates the fundamental principles of fractals – how a pattern can repeat again and again at different scales and how this complex shape can be formed by simple repetition.

1. Start with a triangle.
2. Shrink the triangle to half height, and put a copy in each of the three corners
3. Repeat step 2 for the smaller triangles, again and again, for ever!

![Sierpinski Triangle](https://user-images.githubusercontent.com/16706911/76851352-5d509c80-685e-11ea-8028-7665835dca7d.png)

there are severals to Implement Sierpinski Triangle

# Iteration
like above description you can draw triangles step by step:

<div class="codeAndCanvas" data="SierpinskiTriangleDrawiteration.frag"></div>

another way is tiling triangles and add them together:

<div class="codeAndCanvas" data="SierpinskiTriangleIteration.frag"></div>

![SierpinskiSteps](https://user-images.githubusercontent.com/16706911/77071996-392dc080-6a02-11ea-952f-6e4e41cae086.png)



# Binary operation

we can achieve sierpinski with binary operation on coordinates.
but before using binary operation you should know concept of Pascal’s Triangle.

## Pascal’s Triangle

Pascal’s Triangle is a number pyramid in which every number is the sum of the two numbers above. 

![PascalTriangleAnimated2](https://user-images.githubusercontent.com/16706911/76882629-2eebb500-6890-11ea-98f8-bbbb74f02188.gif)

Pascal’s Triangle can be continued downwards forever. The Sierpinski pattern will continue, producing bigger and bigger triangles.

![Pascal's_Triangle_divisible_by_2 svg](https://user-images.githubusercontent.com/16706911/76882409-dae0d080-688f-11ea-8925-85f5a7fe3a31.png)

## Bitwise AND

A bitwise AND is a binary operation that takes two equal-length binary representations and performs the logical AND operation on each pair of the corresponding bits, which is equivalent to multiplying them.

Bitwise AND of 4-bit integers:
```
0101 (decimal 5) AND 0011 (decimal 3) = 0001 (decimal 1)
```
![image](https://user-images.githubusercontent.com/16706911/76884322-c6ea9e00-6892-11ea-9499-fb99adae747f.png)

How it works!?

![Example](https://user-images.githubusercontent.com/16706911/77084845-b7935e00-6a14-11ea-97a6-034742388aeb.png)

<div class="codeAndCanvas" data="SierpinskiTriangleBitwise.frag"></div>



