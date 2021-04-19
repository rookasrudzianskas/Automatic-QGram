<template>
  <q-page class="constrain-more q-pa-md">
    <div class="camera-frame q-pa-md">
      <video
        ref="video"
      class="full-width" autoplay playsinline/>
    </div>
    <div class="text-center q-pa-md">
      <q-btn
        round
        color="grey-10"
        icon="eva-camera-outline"
        size="lg"
        />

      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.caption"
          label="Caption"
          class="col col-sm-6"
          dense/>
      </div>

      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.location"
          label="Location"
          class="col col-sm-6"
          dense>
          <template v-slot:append>
            <q-btn round dense flat icon="eva-navigation-2-outline" />
          </template>

        </q-input>
      </div>

      <div class="row justify-center q-mt-lg">
        <q-btn unelevated rounded color="primary" label="Post Image" />
      </div>

    </div>
  </q-page>
</template>

<script>
import { uid } from 'quasar'
export default {
  name: 'PageCamera',
  data() {
    return {
      post: {
        id: uid(),
        caption: '',
        location: '',
        photo: null,
        date: Date.now(),
      }
    }
  },
  methods: {
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      })
    }
  },
  mounted() {
    this.initCamera()
  }
}
</script>

<style lang="sass">
.camera-frame
  border: 2px solid $grey-10
  border-radius: 10px
</style>
