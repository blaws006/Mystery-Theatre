 // Initial global variables

 const general = 20;
 const juniorSenior = 10;

 function buyTicket() {
     let age = prompt('How old are you?'); // Prompt passes age as an argument to the next function
     let price; // Start price off as undefined
     if (age < 12 || age > 65) {
         price = juniorSenior;
         alert('Initial price is: ' + juniorSenior);
     } else {
         price = general;
         alert('Initial price is: ' + general);
     }
     let matinee = prompt('Is this a matinee'); // Pass prompt and pricing values off as arguments to the next
     matineeDiscount(matinee.toLowerCase(), price);
 }

 function matineeDiscount(discount, price) {
    
     if (discount === 'yes' || discount === 'y') {
         alert('Final balance: ' + (parseInt(price) - 3));
     } else {
         alert('Final balance: ' + parseInt(price));
     }
 }