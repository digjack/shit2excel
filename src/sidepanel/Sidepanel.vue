<script setup lang="ts">
import { storageDemo } from '~/logic/storage'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="w-full px-4 py-5 text-center text-gray-700">
    <Logo />
    <div>Shit2Excel</div>
    <SharedSubtitle />

    <div>
 <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>
    </div>
   
    <button class="btn mt-2" @click="exportToExcel">
      Dump To Excel
    </button>
    <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div>
  </main>
</template>

<script setup>
import * as XLSX from 'xlsx';

const exportToExcel = () => {
  // 假设你有一个商品数据数组
  const products = [
    { name: '商品1', price: 100, quantity: 10 },
    { name: '商品2', price: 200, quantity: 5 },
    { name: '商品3', price: 150, quantity: 8 },
  ];

  // 将数据转换为工作表
  const worksheet = XLSX.utils.json_to_sheet(products);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, '商品信息');

  // 导出 Excel 文件
  XLSX.writeFile(workbook, '商品信息.xlsx');
};
</script>