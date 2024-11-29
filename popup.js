new Vue({
    el: '#app',
    data() {
        result: ''
    },
    methods: {
        fetchData() {
            const url = 'https://api16-normal-useast1a.tiktokglobalshop.com/api/v1/product/global/products/list';
            const params = {
                locale: 'zh-CN',
                language: 'zh-CN',
                oec_seller_id: '7495675266229570442',
                aid: '6556',
                app_name: 'i18n_ecom_shop',
                fp: 'verify_m410zxug_HcZ7RRvx_HGZB_4ZUq_Bo3G_fkLxigeBuojA',
                device_platform: 'web',
                cookie_enabled: true,
                screen_width: 1920,
                screen_height: 1080,
                browser_language: 'zh-CN',
                browser_platform: 'MacIntel',
                browser_name: 'Mozilla',
                browser_version: '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                browser_online: true,
                timezone_name: 'Asia/Shanghai',
                tab_id: 1,
                sort_type: 0,
                sort_field: 0,
                page_number: 1,
                page_size: 50,
                sku_number: 1,
                msToken: 'DZ5NuwMnFnKxeieD9wZpf7pF6CgbRpwSp5FfDA9nXNVnSuhWU96h2N0BV1oH9MNOzOIvwvB0mGBye1l7brpR8a6QzHiaYFuTc_p4KqvpCQoezaxhoaf1-X__pn6i-gnhgtEtbQ==',
                'X-Bogus': 'DFSzswVu1VhANxKNtMrqcjLNKBYf',
                _signature: '_02B4Z6wo00001OOVHBwAAIDDsWo8BdIK8FjjlRiAAF-zc7'
            };

            axios.get(url, { params })
                .then(response => {
                    this.result = JSON.stringify(response.data, null, 2);
                })
                .catch(error => {
                    console.error('请求错误:', error);
                    this.result = '请求错误: ' + error.message;
                });
        },
        exportToExcel(products) {
            // 提取需要的信息
            const formattedData = products.map(product => ({
                '产品ID': product.global_product_id,
                '产品名称': product.product_name,
                '价格': product.skus[0].global_price.sale_price_display,
                '库存数量': product.skus[0].global_stock,
                '图片链接': product.image.url_list[0] // 使用第一张图片链接
            }));
            
            // 创建Excel文件
            const worksheet = XLSX.utils.json_to_sheet(formattedData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "商品信息");
            XLSX.writeFile(workbook, "products.xlsx");
        }
    }
});