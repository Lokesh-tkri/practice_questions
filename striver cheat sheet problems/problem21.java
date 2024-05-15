// Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Reverse Letter Triangle.

// You must print a matrix corresponding to the given Reverse Letter Triangle.
// Example:

// Input: ‘N’ = 3

// Output: 

// A B C
// A B
// A

public class Solution {
    public static void nLetterTriangle(int n) {
        // Write your code here
        
        for(int i=0; i<n; i++){
            int val = 65;
            for(int j=n; j>i; j--){
                System.out.print((char)val);
                System.out.print(" ");
                val++;
            }
            System.out.println();
        }
    }
}
