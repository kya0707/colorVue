<template>
  <div :style="{ backgroundColor: colors.hex }">
    <h3 :style="{ color: colors.hex }">{{ colors.hex }}</h3>
    <h3 >{{ colors.hex }}</h3>
    <ul>
      <li><photoshop-picker v-model="colors"></photoshop-picker></li>
      <li><sketch-picker v-model="colors"></sketch-picker></li>
      <li><compact-picker v-model="colors"></compact-picker></li>
      <li><swatches-picker v-model="colors"></swatches-picker></li>
      <input type="color" v-model="color"/>
    </ul>
    <table border='1'>
      <tr>
        <td width="100px" height="100px" @click="cngClr(0)" :style="{ backgroundColor:cls[0].sepaColorsHex }">{{msg[0]}}</td>
        <td width="100px" height="100px" @click="cngClr(1)" :style="{ backgroundColor:cls[1].sepaColorsHex }">{{msg[1]}}</td>
        <td width="100px" height="100px" @click="cngClr(2)" :style="{ backgroundColor:cls[2].sepaColorsHex }">{{msg[2]}}</td>
        <td width="100px" height="100px" @click="cngClr(3)" :style="{ backgroundColor:cls[3].sepaColorsHex }">{{msg[3]}}</td>
        <td width="100px" height="100px" @click="cngClr(4)" :style="{ backgroundColor:cls[4].sepaColorsHex }">{{msg[4]}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Photoshop } from 'vue-color'
import { Sketch } from 'vue-color'
import { Compact } from 'vue-color'
import { Swatches } from 'vue-color'

var defaultProps = {
  hex: '#FF0000',
  hsl: {
    h: 0,
    s: 1,
    l: 0.5,
    a: 1
  },
  hsv: {
    h: 0,
    s: 1,
    v: 1,
    a: 1
  },
  rgba: {
    r: 255,
    g: 0,
    b: 0,
    a: 1
  },
  a: 1
}

export default {
  components: {
    'sketch-picker': Sketch,
    'photoshop-picker': Photoshop,
    'compact-picker': Compact,
    'swatches-picker': Swatches
  },
  data () {
    return {
      colors: defaultProps,
      msg: [
        1,
        2,
        3,
        4,
        5,
      ],
      cls: [
        {sepaColorsHex:defaultProps},
        {sepaColorsHex:defaultProps},
        {sepaColorsHex:defaultProps},
        {sepaColorsHex:defaultProps},
        {sepaColorsHex:defaultProps},
      ]
    }
  },
  methods: {
    cngClr: function (index) {
        var clsHex = {sepaColorsHex:defaultProps}
        clsHex.sepaColorsHex = this.colors.hex;
        this.cls.splice(index,1,clsHex);
        this.msg[0] = '1'
        this.msg[1] = '2'
        this.msg[2] = '3'
        this.msg[3] = '4'
        this.msg[4] = '5'
        this.msg[index] = 'target'
    },
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
