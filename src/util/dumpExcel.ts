import * as XLSX from 'xlsx';

export function exportToExcel() {

    const headers = { name: '商品名称',  quantity: '数量', price: '价格' }

    // 假设你有一个商品数据数组
    const products = [
        { name: '商品1', price: 100, quantity: 10 },
        { name: '商品2', price: 200, quantity: 5 },
        { name: '商品3', price: 150, quantity: 8 },
        { name: '商品1', price: 100, quantity: 10 },
        { name: '商品2', price: 200, quantity: 5 },
        { name: '商品3', price: 150, quantity: 8 },
        { name: '商品1', price: 100, quantity: 10 },
        { name: '商品2', price: 200, quantity: 5 },
        { name: '商品3', price: 150, quantity: 8 },
        { name: '商品1', price: 100, quantity: 10 },
        { name: '商品2', price: 200, quantity: 5 },
        { name: '商品3', price: 150, quantity: 8 },
    ];
    dumpToExcel(products, headers);
};

function dumpToExcel(items: any[], headers: { [key: string]: string }) {
    const headerRow = Object.values(headers);
    const dataWithHeaders = [
        headerRow,
        ...items.map(item => 
            headerRow.map(header => item[Object.keys(headers).find(key => headers[key] === header) as string])
        )
    ];
    // 将数据转换为工作表
    const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeaders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '商品信息');

    // 导出 Excel 文件
    XLSX.writeFile(workbook, '商品信息.xlsx');
    return true;
};