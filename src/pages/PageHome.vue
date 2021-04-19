<template>
  <q-page class="constrain q-pa-md">
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
  </q-page>
</template>

<script>
import image from '../assets/rokas.png'
import { date } from 'quasar'

export default {
  name: 'PageHome',
  data() {
    return {
      posts: [
        {
          id: 1,
          caption: 'Apple Swift Challenge 2021',
          date: 1618828566214,
          location: 'Los Angeles, United States',
          imgUrl: image,
        },

        {
          id: 2,
          caption: 'Apple Swift Challenge 2021',
          date: 1618828566214,
          location: 'Los Angeles, United States',
          imgUrl: image,
        },

        {
          id: 3,
          caption: 'Apple Swift Challenge 2021',
          date: 1618828566214,
          location: 'Los Angeles, United States',
          imgUrl: image,
        },
      ]
    }
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMMM D h:mmA')
    }
  }
}
</script>
<style lang="sass">
.card-post
  .q-img
    min-height: 200px
</style>
