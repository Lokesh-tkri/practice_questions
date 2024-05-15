// Aryan and his friends are very fond of the pattern. For a given integer ‘N’, they want to make the N-Binary Number Triangle.

// You are required to print the pattern as shown in the examples below.
// Example:

// Input: ‘N’ = 3

// Output: 

// 1
// 0 1
// 1 0 1

public class Solution {
    public static void nBinaryTriangle(int n) {
        // Write your code here.
        for(int i=1; i<=n; i++){
            int start = i%2;
            for(int j=0; j<i; j++){
                System.out.print(start%2);
                System.out.print(" ");
                start++;
            }
            System.out.println();
        }
    }
}
