document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("search-btn").addEventListener("click", searchProducts);
});

async function searchProducts() {
   const query = document.getElementById("search-input").value.trim();
   
   if (query === "") {
       alert("Por favor, ingresa un producto para buscar.");
       return;
   }
   
   const mockData = [
       { producto: "iPhone 14", tienda: "Amazon", precio: "$899" },
       { producto: "iPhone 14", tienda: "eBay", precio: "$870" },
       { producto: "iPhone 14", tienda: "Walmart", precio: "$890" },
       { producto: "Samsung Galaxy S23", tienda: "Amazon", precio: "$799" },
       { producto: "Samsung Galaxy S23", tienda: "BestBuy", precio: "$820" }
   ];

   const results = mockData.filter(item => item.producto.toLowerCase().includes(query.toLowerCase()));

   const tableBody = document.querySelector("#results-table tbody");
   tableBody.innerHTML = "";

   if (results.length === 0) {
       tableBody.innerHTML = "<tr><td colspan='3'>No se encontraron resultados.</td></tr>";
       return;
   }

   results.forEach(item => {
       const row = `<tr>
                       <td>${item.producto}</td>
                       <td>${item.tienda}</td>
                       <td>${item.precio}</td>
                   </tr>`;
       tableBody.innerHTML += row;
   });
}
