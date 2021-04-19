<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered>
      <q-toolbar>
        <q-toolbar-title class="text-grand-hotel text-bold">
          QGram
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white" bordered>
      <q-tabs
        class="text-grey-10"
      active-color="primary"
      indicator-color="transparent">
        <q-route-tab
          icon="eva-home-outline"

          to="/"
        />
        <q-route-tab
          icon="eva-camera-outline"

          to="/camera"
        />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {

    }
  }
}
</script>
<style lang="sass">
.q-toolbar__title
  text-align: center
  font-size: 30px
.q-footer
    .q-tab__icon
      font-size: 30px
</style>
