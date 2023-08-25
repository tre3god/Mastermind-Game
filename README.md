Developing a Mastermind Game


Project Brief

MVP - Minimum Viable Product
. Built with HTML, CSS and JavaScript.
. Use Javascript for DOM manipulation.

. When guess is correct, it will tabulate and show the Mastermind's code.
. Indicators to show whether colors placed at wrong position will indicate correct hints acccordingly.
. If unsuccessful in guessing code for 10 tries, player will lose.
. Will be playing against Computer.



Timeframe 
1 week.


Technologies & Tools Used
. HTML
. CSS
. JavaScript
. Git & GitHub


Description
This is a classic Mastermind Game


Ideation Sketch
1. Board 
2. Color code (Yellow, Orange, Blue, Green, Purple, Pink)
3. Color indicators 
    - Red = correct
    - Black = wrongposition
    - White = incorrect

4. Everytime the player submits a choice, a new table will be generated with Javascript to make the next choice.   
5. Player will have 10 tries and will be able to see his past choices .
6. If after 10 tries, player choice !== Mastermind's choice, Mastermind Wins.
7. If player choice === Mastermind's choice in perfect order, Player Wins.
8. Reset button to reset the game.



Before Game 
1. Start Button
    - when clicked, will generate a secret code
2. Generate 1st table to play

During Game
3. Player will choose 4 colors and input in selection
4. Click submit
5. Generate checkers, if incorrect
6. Generate table again

After Game
6. If correct, display "player won"
7. display: none
8. Click reset
9. Clear board
10. Generate secret code
11. Generate board

