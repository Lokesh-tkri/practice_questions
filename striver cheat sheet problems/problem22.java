// Sam is researching on Alpha-Triangles. So, he needs to create them for different integers ‘N’.

// An Alpha-Triangle is represented by the triangular pattern of alphabets in reverse order.

// For every value of ‘N’, help sam to print the corresponding Alpha-Triangle.
// Example:

// Input: ‘N’ = 3

// Output: 
// C
// C B 
// C B A

public class Solution {
    public static void alphaTriangle(int n) {
        // Write your code here
        for(int i=1; i<=n; i++){
            int val = 64;
            val += n;
            for(int j=0; j<i; j++){
                System.out.print((char)val);
                System.out.print(" ");
                val--;
            }
            System.out.println();
        }
    }
}
