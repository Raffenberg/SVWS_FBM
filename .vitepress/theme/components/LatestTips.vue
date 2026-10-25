<script setup lang="ts">
import { useData, withBase } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <table class="latest-tips" v-if="frontmatter.latestTips?.length">
    <thead><tr><th>Datum</th><th>Programm</th><th>Veröffentlichter Hinweis</th></tr></thead>
    <tbody>
      <tr v-for="tip in frontmatter.latestTips" :key="tip.link">
        <td>{{ tip.date }}</td><td>{{ tip.product }}</td>
        <td><a :href="withBase(tip.link)">{{ tip.title }}</a></td>
      </tr>
    </tbody>
  </table>
</template>
