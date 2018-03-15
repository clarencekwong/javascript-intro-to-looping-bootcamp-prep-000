function whileLoop(d) {
   while (d > 0) {
     console.log(--d)
     if (d === 0) {
       return 'done'
     }
   }
}