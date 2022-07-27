function FizBuz() {
  console.log("Task 1");
  for (let i = 0; i < 10; i++) {
    if ((i + 1) % 3 == 0) {
      console.log("FizBuz");
    } else if ((i + 1) % 2 == 0) {
      console.log("Fiz");
    } else {
      console.log("Bus");
    }
  }
  console.log("  ");
}
FizBuz();
