package Account;

public class Account {
    private String idAccount;
    private double balance;

    public Account(String idAccount) {
        this.idAccount = idAccount;
    }

    public void depositMoney(double money) {
        balance = balance + money;
    }

    public void withdrawMoney(double money) throws NegativaBalanceException {
        if (balance - money < 0) {
            throw new NegativaBalanceException("No tienes dinero suficiente");
        }
        balance = balance - money;
    }

    public void doTransfer(Account target, double money) throws SameSourceTargetException,NegativaBalanceException {
        if (this.idAccount.equalsIgnoreCase(target.idAccount)) {
            throw new SameSourceTargetException("No puedes transferir a la misma cuenta");
        }
        if (this.balance < money) {
            throw new NegativaBalanceException("Saldo insuficiente para transferir");
        }
        this.withdrawMoney(money);
        target.depositMoney(money);
    }

    public void cancelAccount(Account target) throws SameSourceTargetException,NegativaBalanceException {
        if (!this.idAccount.equalsIgnoreCase(target.idAccount)) {
            doTransfer(target, this.balance);
        }
    }

    public String toString() {
        return idAccount + " balance: " + balance;
    }
}