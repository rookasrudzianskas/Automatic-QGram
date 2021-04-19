<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      class="bg-white text-grey-10"
      bordered>
      <q-toolbar>
        <q-btn
          flat
          round
          icon="eva-camera-outline"
          size="18px"
          dense
          to="/camera"
          class="large-screen-only q-ma-sm"/>
        <q-separator class="large-screen-only"
          vertical
          spaced
          />
        <q-toolbar-title class="text-grand-hotel text-bold">
          QGram
        </q-toolbar-title>

        <q-btn
          flat
          round
          icon="eva-home-outline"
          size="18px"
          dense
          to="/"
          class="large-screen-only"/>

      </q-toolbar>
    </q-header>

    <q-footer class="bg-white small-screen-only"
              bordered>
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
.q-toolbar
  @media (min-width: $breakpoint-sm-min)
    height: 77px
.q-toolbar__title
  font-size: 30px
  @media (max-width: $breakpoint-xs-max)
    text-align: center
.q-footer
    .q-tab__icon
      font-size: 30px
</style>
