// Aryan and his friends are very fond of the pattern. They want to make the Reverse N-Number Crown for a given integer' N'.

// Given 'N', print the corresponding pattern.
// Example:

// Input: ‘N’ = 3

// Output: 

// 1         1
// 1 2     2 1
// 1 2 3 3 2 1

public class Solution {
    public static void numberCrown(int n) {
        // Write your code here.
        for(int i=1; i<=n; i++){
            for(int j=1; j<=i; j++){
                System.out.print(j);
                if(j < i){
                    System.out.print(" ");
                }
            }

            for(int m=0; m<((4*(n-i)) + 1); m++){
                System.out.print(" ");
            }

            for(int k=i; k>0; k--){
                System.out.print(k);
                System.out.print(" ");
            }
            System.out.println();
        }
    }
}
