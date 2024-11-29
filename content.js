chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "export") {
        let products = [];
        // 假设商品信息在类名为"product"的元素中
        document.querySelectorAll('.product').forEach(product => {
            let name = product.querySelector('.product-name').innerText;
            let price = product.querySelector('.product-price').innerText;
            products.push({ name, price });
        });

        // 创建Excel文件
        const worksheet = XLSX.utils.json_to_sheet(products);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "商品信息");
        XLSX.writeFile(workbook, "products.xlsx");
    }
});