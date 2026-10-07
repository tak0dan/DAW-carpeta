package testJframe;

public class TestJframe_Tester {
    public static void main(String[] args) {
        System.out.println("=== testJframe.TestJframe Tester ===\n");

        TestJframe frame = new TestJframe();

        System.out.println("TestJframe instance created: " + frame.getClass().getSimpleName());

        frame.setVisible(true);
        System.out.println("setVisible(true) called");

        frame.setVisible(false);
        System.out.println("setVisible(false) called");

        System.out.println("\n=== TestJframe Tests Passed ===");
    }
}