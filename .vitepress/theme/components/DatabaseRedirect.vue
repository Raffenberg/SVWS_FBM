<script setup lang="ts">
import { onMounted } from 'vue'
import { withBase } from 'vitepress'
const props = defineProps<{ to: string }>()
onMounted(() => window.location.replace(withBase(props.to)))
</script>

<template>
  <p>Der Inhalt ist jetzt im gemeinsamen Katalog zu finden:
    <a :href="withBase(to)">Zum passenden Kapitel</a>.
  </p>
</template>
