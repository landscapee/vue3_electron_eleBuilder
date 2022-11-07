<template>
<svg class="svg-icon" aria-hidden="true">
  <title>{{title}} </title>
  <use ref="use" :xlink:href="iconName"></use>

</svg>

</template>

<script>
    export default {
        name: 'icon-svg',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            title: {
                type: String,
             },
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`;
            }
        }
    };
</script>

