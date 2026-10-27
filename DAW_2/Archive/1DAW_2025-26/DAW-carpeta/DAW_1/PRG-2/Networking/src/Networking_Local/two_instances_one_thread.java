package Networking_Local;

class two_instances_one_thread {
public static void main(String args[] ) {
	YesNoThread y = new YesNoThread("YES");
	YesNoThread n = new YesNoThread("NO");
	y.start();
	n.start();
}
}
class YesNoThread extends Thread {
	private String YesNo;
	static int count=0;
	public YesNoThread(String s) {
		super();
		YesNo=s;
}
public void run() {
	int i;
	for (i=1;i<=20; i++)
		System.out.print(++count+":"+YesNo+" ");
}
}