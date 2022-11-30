<template>
  <div class="app-container">
    <div id="main">
      <!-- common header -->
      <myheader />
      <div class="main-container">
        <el-scrollbar class='page-component__scroll'>
          <!-- content -->
          <nuxt />
        </el-scrollbar>
      </div>
      <!-- common footer -->
      <myfooter />
    </div>
  </div>
</template>
<script>
import "~/assets/css/app.css";
import "~/assets/css/chunk.css";
import "~/assets/css/iconfont.css";
import "~/assets/css/main.css";

import myheader from "./myheader";
import myfooter from "./myfooter";

export default {
  components: {
    myheader,
    myfooter,
  },
};
</script>

