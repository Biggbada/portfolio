<script setup>
// Using ES6 import syntax
import hljs from 'highlight.js'

// Then register the languages you need

//
const highlightedCode = hljs.highlightAuto('<span>Hello World!</span>', {
  language: 'javascript'
}).value
</script>

<template>
  <pre>
    <code>
      {{ highlightedCode }}
    </code>
  </pre>
</template>
