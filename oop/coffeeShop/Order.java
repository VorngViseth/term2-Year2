public class Order {
    Menuitem[] items;
    String customerName;
    double total;

    public order(String customerName, Menuitem[], items) {
        this.customerName = customerName;
        this.items = items;
        this.total = calculateTotal();
    }

    public double calculateTotal() {
        double total;
        for(Menuitem item : items) total += item.price;
        
        return total;
    }
}