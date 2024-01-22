<template>
  <div class="mask">
    <div class="float-menu vertical">
      <div class="float-menu-item">
        <div class="sa-image" style="width: 26px; height: 26px; border-radius: 0px;">
          <div class="el-image"><!--v-if-->
            <div class="el-image__wrapper"><i class="el-icon">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"></path>
                <path fill="currentColor"
                      d="M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"></path>
              </svg>
            </i></div><!--v-if--></div>
        </div><!----></div>
      <div class="float-menu-button sa-flex sa-row-center fold" style="background: rgb(255, 96, 0);"><i class="el-icon">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor"
                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
        </svg>
      </i></div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.mask {
  background: #eee;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.float-menu.vertical {
  flex-direction: column;
  .float-menu-item {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
.float-menu {
  position: absolute;
  right: 30px;
  bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.float-menu-button {
  width: 42px;
  height: 42px;
  font-size: 20px;
  border-radius: 50%;
  color: #fff;
  transition: all 0.3s linear;
  cursor: pointer;
  transform: rotateZ(135deg);
  -webkit-transform: rotateZ(135deg);
}
</style>