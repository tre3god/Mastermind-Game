Developing a Mastermind Game


Project Brief

MVP - Minimum Viable Product
- Built with HTML, CSS and JavaScript.
- Use Javascript for DOM manipulation.

- When guess is correct, it will tabulate and show the Mastermind's code.
- Indicators to show whether colors placed at wrong position will indicate correct hints acccordingly.
- If unsuccessful in guessing code for 10 tries, player will lose.
- Will be playing against Computer.



Timeframe 
1 week.


Technologies & Tools Used
. HTML
. CSS
. JavaScript
. Git & GitHub


Description
This is a classic Mastermind Game

Deployment
This game is deployed on GitHub Pages, and you can play the game here:

How To Play
![How to play](https://imgur.com/2nHPz4r)



Ideation Sketch
1. Board 
2. Color code (Yellow, Orange, Blue, Green, Purple, Pink)
3. Feedback indicators 
    - Red -> absolutely correct
    - Black -> partially correct
    - White -> incorrect
 
4. Player will have 10 tries and will be able to see his past choices .
5. If after 10 tries, if Player's answer is not absolutely correct, Mastermind Wins.
6. If Player chooses the correct colors in the correct order, Player Wins.
7. Reset button to reset the game.


Key Learnings
1. Implementing moving pictures/text using marquee
![marquee](https://imgur.com/undefined)
2. Using event delegation and attaching an event listener to a parent element instead of individually attaching event listeners to every single element.
![eventdelegation](https://imgur.com/8QljatP)


Breakdown & Analysis of Codes
Below is a breakdown and analysis of some of the codes which I have categorised according to the concepts we have covered in class.

Arrays
![Array](https://imgur.com/ClA64Nk)
For the Mastermind Game, I used a constant colorCode array to have a fixed set of colors for the Mastermind to set the secret code and for the Code breaker to decipher it.

There are 3 variable arrays which I left empty to be filled using the code written.

Functions & Loops
I used a function and a while loop to generate the random colors to be put into the secret array.
![Functions](https://imgur.com/X1ZALVk)
There is also a condition in the function which makes sure that there will not be more than 2 colors in the generation of the secret code.

Using loops to ensure that every click will change the color of the buttons pressed
![loops](https://imgur.com/KiuqNh2)

Conditionals
Using conditionals to set the winning and losing condition.
![conditionals](https://imgur.com/r2m33vN)
As shown, the condition to win is when the checker identify that all feedbacks buttons are fully colored "Red", if it is then it will determine that the Player has won.

![losecondition](https://imgur.com/f9gqBA0)
And when the Player hasnt managed to get all 4 feedback buttons to be red on his last try, it will determine that the Mastermind has won.





