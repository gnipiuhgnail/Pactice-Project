   <template>
  <svg :class="svgClass" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  iconClass: {
    type: String,
    required: true,
  },
});

const iconName = computed(() => `#icon-${props.iconClass}`);
const svgClass = computed(() => {
  if (props.iconClass) {
    return `svg-icon icon-${props.iconClass}`;
  }
  return "svg-icon";
});
</script>

<style lang='scss'>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>
