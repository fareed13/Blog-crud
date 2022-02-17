<template>
  <div class="Blog-parent">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" color="#5E6F7F" dark max-width="75%">
          <v-card-title>
            <v-icon large left>mdi-file-download</v-icon>
            <span class="text-h6 font-weight-light"
              >Download PDF of your Blog</span
            >
          </v-card-title>
          <v-row class="ml-1">
            <v-col cols="8">
              <v-avatar class="ml-3 mt-3 mb-3">
                <img :src="blogdummy.img" />
              </v-avatar>
              <v-text-field
                disabled
                v-model="blogdummy.name"
                label="Enter Name"
              ></v-text-field>
              <v-textarea
                disabled
                v-model="blogdummy.blogtext"
                class="mx-2"
                label="Write Your Blog"
                rows="1"
                prepend-icon="mdi-comment"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center" justify="end">
                <v-btn @click="generatePdf">
                  <v-icon @click="pdfpop = true" class="mr-1"
                    >mdi-download</v-icon
                  >
                  Save PDF
                </v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-snackbar v-model="pdfpop"
          >Generating PDF start
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="pdfpop = false"
              >close Notification</v-btn
            >
          </template>
        </v-snackbar>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import jspdf from "jspdf";
export default {
  name: "pdfPage",
  props: {},
  data() {
    return {
      fareed: "fareed ahmed",
      pdfpop: false,
      blogdummy: [{ name: "", blogtext: "", img: "" }],
    };
  },
  methods: {
    async getdata() {
      let result = await axios.get(
        "http://localhost:3000/Post/" + this.$route.params.id
      );
      this.blogdummy = result.data;
      //  console.log(this.blogdummy)
      //  console.log(result);
    },
    generatePdf() {
      let pdfName = "Blog Daily";
      var doc = new jspdf();
      doc.text("Daily Blog", 50, 22); // set your margins
      doc.text(this.blogdummy.img, 60, 60);
      doc.text(this.blogdummy.blogtext, 10, 60);
      doc.text("Blog By" + "", 80, 80);
      doc.text(this.blogdummy.name, 105, 85);

      doc.setFontSize(20); //optional
      doc.setTextColor(40); //optional
      // doc.setFontStyle('normal');//optional

      doc.save(pdfName + ".pdf");
    },
  },
  async mounted() {
    this.getdata();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
