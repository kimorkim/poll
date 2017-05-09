<template>
  <div 
    id="make"
  >
    <header>
      <div
        class="header_set"
      >
        <div>
          <span>
            질문
          </span>
        </div>
        <div>
          <span>
            결과
          </span>
        </div>
      </div>
      <div
        class="header_bar"
      >
        <div>
        </div>
      </div>
    </header>
    <article>
      <div>
        <input-field />
      </div>
    </article>

  </div>
</template>

<script>
// import '@/components/InputField';

export default {
  name: 'make',
};
</script>
  
<style lang="less" scoped>
#make {
  flex: 1;
  display: flex;
  background-color: #ede7f6;
  flex-direction: column;
  align-items: center;

  header {
    max-width: 770px;
    width: 100%;
    height: 48px;
    margin-top: -48px;
    background-color: #ffffff;

    
    .header_set {
      flex: 1px;
      display: flex;
      align-items: center;

      div {
        height: 46px;
        text-align: center;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    .header_bar {
      div {
        height: 2px;
        width: 50%;
        background-color: rgb(103, 58, 183);
      }
    }
  }

  article {
    max-width: 770px;
    width: 100%;
    background-color: #fff;

    div {
      margin: 15px;
    }
  }
}

</style>
