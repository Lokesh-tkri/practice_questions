// Ninja was very fond of patterns. For a given integer ‘N’, he wants to make the N-Star Diamond.
// Example:

// Input: ‘N’ = 3

// Output: 

//   *
//  ***
// *****
// *****
//  ***
//   *

public class Solution {
    public static void nStarDiamond(int n) {
        // Write your code here
        for(int i=0;i<n;i++){
            //number of spaces = i-1 
            //number of stars = 2*j + 1
            for(int k=n; k>i+1;k--){
                System.out.print(" ");
            }
            for(int j=0;j<(2*i + 1);j++){
                System.out.print("*");
            }
            System.out.println();
        }
        for(int i=n; i>0; i--){
            for(int k=n; k>i;k--){
                System.out.print(" ");
            }
            for(int j=0;j<((2*i)-1);j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
