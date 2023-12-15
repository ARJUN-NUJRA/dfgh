

function add(id){
   let input=document.getElementById(id);
   input.value=Number(input.value)+1;
   }
   
   function subtract(id){
   let input=document.getElementById(id);
   if (input.value>0){
    input.value=Number(input.value)-1;
   }
   }
   function showOrderConfirmation() {
      Swal.fire({
        title: "Confirm Order",
        text: "Are you sure you want to place this order?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, place order"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Order Placed!",
            text: "Your order has been successfully placed.",
            icon: "success"
          });
        }
      });
    }