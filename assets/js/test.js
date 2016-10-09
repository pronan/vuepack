function f() {
  {
    let x;
    {
      // this is ok since it's a block scoped name
      const x = "sneaky";
    }
    // this is ok since it was declared with `let`
    x = "bar";
  }
}