<template>
  <div id="app">
    <header>
      <div 
        class="title"
      >
        <div 
          class="logo"
        >
          <router-link to="/">로고영역</router-link>
        </div>
        <div
          class="menu"
        >
          <div>
            <router-link to="make">
              만들기
            </router-link>
          </div>
          <div>
            메뉴 2
          </div>
          <div>
            메뉴 3
          </div>
          <div>
            메뉴 4
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style src="./assets/app.less" lang="less"></style>
<style lang="less" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  header {
    height: 184px;
    background-color: rgb(103, 58, 183);
    color: #ffffff;
    text-align: center;
    vertical-align: bottom;
    padding: 2px;

    a:link,
    a:active,
    a:focus,
    a:visited {
      color: rgb(103, 58, 183);
    }

    .title {
      height: 40px;
      color: rgb(103, 58, 183);
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 120px;
        cursor: pointer;
      }

      .menu {
        div {
          display: inline-block;
          width: 60px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
