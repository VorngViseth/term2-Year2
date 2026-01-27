public class Menuitem {
    String name;
    double price;
    char size;
    boolean isAvailable;

    public Menuitem(String name; double price, char size, boolean isAvailable) {
        if(price < 0) this.price = 5;
        else this.price = price;

        this.name = name;
        this.size = size;
        this.isAvailable = isAvailable;
    }

}