export class InvoiceData {
  static OrderDetail = class {
    constructor(ProductID, Quantity, ProductName, UnitPrice) {
      this.ProductID = ProductID;
      this.Quantity = Quantity;
      this.ProductName = ProductName;
      this.UnitPrice = UnitPrice;
    }
  };

  static Order = class {
    constructor(OrderID, OrderDate, CustomerID, ShippedDate, ShipperName, ShipTo, BillTo, Freight, OrderDetails) {
      this.OrderID = OrderID;
      this.OrderDate = OrderDate;
      this.CustomerID = CustomerID;
      this.ShippedDate = ShippedDate;
      this.ShipperName = ShipperName;
      this.ShipTo = ShipTo;
      this.BillTo = BillTo;
      this.Freight = Freight;
      this.OrderDetails = OrderDetails;
    }
  };

  static order11077 = new InvoiceData.Order(
    11077,
    new Date(2019, 0, 6),
    "RATTC",
    new Date(2019, 0, 30),
    "United Package",
    "Rattlesnake Canyon Grocery\n2817 Milton Dr.\nAlbuquerque, NM 87110\nUSA",
    "Rattlesnake Canyon Grocery\n2817 Milton Dr.\nAlbuquerque, NM 87110\nUSA",
    8.53,
    [
      new InvoiceData.OrderDetail(2, 24, "Chang", 19),
      new InvoiceData.OrderDetail(3, 4, "Aniseed Syrup", 10),
      new InvoiceData.OrderDetail(4, 1, "Chef Anton's Cajun Seasoning", 22),
      new InvoiceData.OrderDetail(6, 1, "Grandma's Boysenberry Spread", 25),
      new InvoiceData.OrderDetail(7, 1, "Uncle Bob's Organic Dried Pears", 30),
      new InvoiceData.OrderDetail(8, 2, "Northwoods Cranberry Sauce", 40),
      new InvoiceData.OrderDetail(10, 1, "Ikura", 31),
      new InvoiceData.OrderDetail(12, 2, "Queso Manchego La Pastora", 38),
      new InvoiceData.OrderDetail(13, 4, "Konbu", 6),
      new InvoiceData.OrderDetail(14, 1, "Tofu", 23.25),
      new InvoiceData.OrderDetail(16, 2, "Pavlova", 17.45),
      new InvoiceData.OrderDetail(20, 1, "Sir Rodney's Marmalade", 81),
      new InvoiceData.OrderDetail(23, 2, "Tunnbröd", 9),
      new InvoiceData.OrderDetail(32, 1, "Mascarpone Fabioli", 32),
      new InvoiceData.OrderDetail(39, 2, "Chartreuse verte", 18),
      new InvoiceData.OrderDetail(41, 3, "Jack's New England Clam Chowder", 9.65),
      new InvoiceData.OrderDetail(46, 3, "Spegesild", 12),
      new InvoiceData.OrderDetail(52, 2, "Filo Mix", 7),
      new InvoiceData.OrderDetail(55, 2, "Pâté chinois", 24),
      new InvoiceData.OrderDetail(60, 2, "Camembert Pierrot", 34),
      new InvoiceData.OrderDetail(64, 2, "Wimmers gute Semmelknödel", 33.25),
      new InvoiceData.OrderDetail(66, 1, "Louisiana Hot Spiced Okra", 17),
      new InvoiceData.OrderDetail(73, 2, "Röd Kaviar", 15),
      new InvoiceData.OrderDetail(75, 4, "Rhönbräu Klosterbier", 7.75),
      new InvoiceData.OrderDetail(77, 2, "Original Frankfurter grüne Soße", 13),
    ]
  );

  static get Order11077() {
    return this.order11077;
  }
}
