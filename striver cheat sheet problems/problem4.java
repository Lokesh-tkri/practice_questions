// Programming languages have some conditional / decision-making statements that execute when some specific condition is fulfilled.
// Switch-case is one of the ways to implement them.
// In a menu-driven program, the user is given a set of choices of things to do (the menu) and then is asked to select a menu item.
// There are 2 choices in the menu:
// Choice 1 is to find the area of a circle having radius 'r'.
// Choice 2 is to find the area of a rectangle having dimensions 'l' and 'b'.
// You are given the choice 'ch' and an array 'a'.
// If ‘ch’ is 1, ‘a’ contains a single number ‘r’. If ‘ch’ is 2, ‘a’ contains 2 numbers, ‘l’ and ‘b’.
// Consider the choice and print the appropriate area.
// Example :
// Input: ‘ch’ = 2 and ‘a’ = [3, 2]
// Output: area = 6

public class MyClass {
    public static double areaSwitchCase(int ch, double []a) {
        double retVal = 0;
            switch (ch) {
                case 1:
                    retVal = Math.PI*(a[0])*(a[0]);
                    break;
                case 2:
                    retVal = a[0] * a[1];
                    break;
            }
         return retVal;
    }
    
    public static void main(String args[]) {
      double [] dimen1 = {1};
      System.out.println(areaSwitchCase(1, dimen1));
    }
}
