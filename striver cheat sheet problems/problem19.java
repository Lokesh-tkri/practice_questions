// Aryan and his friends are very fond of patterns. For a given integer ‘N’, they want to make the Increasing Letter Triangle.
// Example:

// Input: ‘N’ = 3

// Output: 

// A
// A B
// A B C

public class Solution {
    public static void nLetterTriangle(int n) {
        // Write your code here

        for(int i=1; i<=n; i++){
            int val = 65;
            for(int j=0; j< i; j++){
                System.out.print((char)val);
                System.out.print(" ");
                val++;
            }
            System.out.println();
        }
    }
}
