function areYouPlayingBanjo(name) {
    if (name.charAt(0) === "R" || name.charAt (0) === "r"){
       return (name + " plays banjo")
   } else {
       return (name + " does not play banjo")
     }
   }
   

/*
KATA DESCRIPTION:

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.

PSEDUO:

return plays or does not play banjo based on the first letter of a name.
R and r both return "plays banjo" which everything else returns "does not play banjo".
   
.charAt will help with looking at the first letter of a string, treating 
the letters of the string as index numbers.
   
The solution needed be able to distinguish between R and r.*/
   