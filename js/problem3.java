// Programming languages have some conditional / decision-making statements that execute when some specific condition is fulfilled.


// If-else is one of the ways to implement them.


// You are given two numbers 'a' and 'b'.


// Compare the numbers and print the relation.


// Print “smaller”, “greater” or “equal” when ‘a’ is smaller than ‘b’, greater than ‘b’, or equal to ‘b’ respectively.


// Example :

// Input: ‘a’ = 5 and ‘b’ = 3

// Output: greater



class Solution {
    public static String compareIfElse(int a, int b) {
        String retVal;
        if(a>b){
            retVal = "greater";
        }else if(a<b){
            retVal = "smaller";
        }else{
            retVal = "equal";
        }
        return retVal;
    }
    public static void main(String[] args) {
        System.out.println(compareIfElse(6,8));
        System.out.println(compareIfElse(5,5));
        System.out.println(compareIfElse(6,5));
    }
}
