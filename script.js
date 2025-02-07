function searchProduct() {
    let input = document.getElementById("search-input").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    let found = false; // Biến kiểm tra xem có kết quả hay không

    products.forEach(product => {
        let title = product.querySelector("h3").textContent.toLowerCase();
        if (title.includes(input)) {
            product.style.display = "block"; // Hiển thị sản phẩm nếu khớp với từ khóa tìm kiếm
            found = true;
        } else {
            product.style.display = "none"; // Ẩn các sản phẩm không khớp
        }
    });

    if (!found) {
        alert("Không tìm thấy sản phẩm phù hợp!");
    }
}
