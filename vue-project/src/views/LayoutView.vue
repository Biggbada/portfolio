<template>
  <div id="about-main">
    <slot name="subheader"></slot>
    <div class="flex-row-start">
      <slot name="aside"></slot>
      <slot name="content"></slot>
    </div>
  </div>
</template>
