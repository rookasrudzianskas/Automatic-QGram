<template>
  <q-page class="constrain q-pa-md">
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-sm-8">
        <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post q-mb-md"
          flat
          bordered>
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img src="../assets/rokas.png">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label
                class="text-bold"
              >
                rookasrudzianskas
              </q-item-label>
              <q-item-label caption>
                {{ post.location }}
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-separator />

          <q-img :src="post.imgUrl"/>

          <q-card-section>
            <div>{{ post.caption}}</div>
            <div class="text-caption text-grey">{{ post.date | niceDate}}</div>
          </q-card-section>

        </q-card>
      </div>
      <div class="col-4 large-screen-only">
        <q-item class="fixed">
          <q-item-section avatar>
            <q-avatar size="48px">
              <img src="../assets/rokas.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label
              class="text-bold"
            >
              rookasrudzianskas
            </q-item-label>
            <q-item-label caption>
              Rookas Rudzianskas
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </div>

  </q-page>
</template>

<script>
import image from '../assets/rokas.png'
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPosts() {
      this.$axios.get('http://localhost:3000/posts').then(response => {
        this.posts = response.data
      }).catch(err => {
        console.log("err", err)
      })
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMMM D h:mmA')
    }
  },
  created() {
    this.getPosts()
  }
}
</script>
<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>
