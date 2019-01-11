
<template>
  <div>
    <Layout>
      <Header>
        <div>
          <Menu mode="horizontal" @on-select="onMenuSelect" theme="dark" active-name="define">
            <MenuItem name="test1">
              <Icon type="ios-paper"></Icon>
              测试1
            </MenuItem>
            <MenuItem name="test2">
              <Icon type="ios-people"></Icon>
              测试2
            </MenuItem>
          </Menu>
        </div>

      </Header>
      <Content>
        <router-view/>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    methods: {
      onMenuSelect(name) {
        this.$router.push(name)
      }
    }
  }
</script>

