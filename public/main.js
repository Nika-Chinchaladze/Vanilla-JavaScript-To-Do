// EDIT BUTTON FUNCTIONALITY
const editButtons = document.querySelectorAll(".edit-btn");

for (const btn of editButtons) {
    btn.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        // get data
        const id = li.querySelector(".p-id").textContent;
        const title = li.querySelector(".p-title").textContent;
        const author = li.querySelector(".p-author").textContent;
        const image = li.querySelector("img").src;
        const price = li.querySelector(".p-price").textContent;
        // set data
        document.getElementById("title-input").setAttribute("value", title);
        document.getElementById("author-input").setAttribute("value", author);
        document.getElementById("image-input").setAttribute("value", image);
        document.getElementById("price-input").setAttribute("value", price);
        // modify sibmit button and action url
        document.getElementById("submit-btn").textContent = "Update";
        document.getElementById("form-element").action = `/update/${id}`;
    });
}
