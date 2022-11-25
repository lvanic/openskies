let show_order = document.querySelector("#show_order");
let block_hidden_order = document.querySelector(".block_hidden_order");
let succses_order = document.querySelector(".succses_order");
show_order.addEventListener("click", () => {
  block_hidden_order.style.display = "none";
  succses_order.style.display = "block";
});
