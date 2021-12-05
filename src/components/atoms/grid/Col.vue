<template>
  <div
    class="col"
    :class="{
      [`col-${$attrs.col}`]: $attrs.col,
      [`col-sm-${$attrs.colSm}`]: $attrs.colSm,
      [`col-md-${$attrs.colMd}`]: $attrs.colMd,
      [`col-lg-${$attrs.colLg}`]: $attrs.colLg,
    }">
    <slot />
  </div>
</template>