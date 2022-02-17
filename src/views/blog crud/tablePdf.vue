<template>
  <div class="wrappers">
    <v-row>
      <v-col cols="6" offset="2">
        <div id="content" ref="content">
            <img src="../../../src/assets/logo.png" alt="">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                  <th class="text-left">status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>
                    <v-icon style="color: red">{{ item.icon }}</v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-list-item class="grow">
        <v-row align="center" justify="end">
          <v-btn @click="exportToPDF"> Save PDF </v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </div>
</template>


<script>
// in this pdf i use html2pdf not jspdf html2pdf print exact Ui of page
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          icon: "mdi-pencil",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          icon: "mdi-delete",
        },
        {
          name: "Eclair",
          calories: 262,
          icon: "mdi-delete",
        },
        {
          name: "Cupcake",
          calories: 305,
          icon: "mdi-delete",
        },
        {
          name: "Gingerbread",
          calories: 356,
          icon: "mdi-pencil",
        },
        {
          name: "Jelly bean",
          calories: 375,
          icon: "mdi-pencil",
        },
        {
          name: "Lollipop",
          calories: 392,
          icon: "mdi-delete",
        },
        {
          name: "Honeycomb",
          calories: 408,
          icon: "mdi-pencil",
        },
        {
          name: "Donut",
          calories: 452,
          icon: "mdi-delete",
        },
        {
          name: "KitKat",
          calories: 518,
          icon: "mdi-pencil",
        },
      ],
    };
  },
  methods: {
    exportToPDF() {
      html2pdf(this.$refs.content, {
        margin: 1,
        filename: "document.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { dpi: 192, letterRendering: true },
        jsPDF: { unit: "in", format: "letter", orientation: "landscape" },
      });
    },
  },
};
</script>

<style>
</style>