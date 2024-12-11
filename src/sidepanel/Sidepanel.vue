<script setup lang="ts">
import { storageDemo } from '~/logic/storage'
import { exportToExcel } from '~/util/dumpExcel'
import * as XLSX from 'xlsx';
function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main class="w-full px-4 py-5 text-center text-gray-700">
    <!-- <Logo /> -->
    <div>Shit2Excel</div>
    <!-- <SharedSubtitle /> -->

    <!-- <div>
 <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>
    </div> -->
    <button class="btn mt-2" @click="exportToExcel">
      Dump To Excel
    </button>
    <!-- <div class="mt-2">
      <span class="opacity-50">Storage:</span> {{ storageDemo }}
    </div> -->
  </main>
</template>