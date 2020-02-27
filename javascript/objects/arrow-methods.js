let obj = {
  field1: 1,
  field2: "field2",
  method() {
    console.log("Field 1 = " + this.field1);
  },
  arrowMethod: () => console.log("Field 2 = " + this.field2)
};

obj.method();
obj.arrowMethod();
