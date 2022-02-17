<template>
  <div class="Blog-parent">
    <router-link :to="{ name: 'tablePdf' }">Table Pdf</router-link>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" color="#947093" dark max-width="75%">
          <v-card-title>
            <h1 style="margin-left: 20%">Add your daily activity in Blog</h1>
          </v-card-title>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center">
                <v-col>
                  <router-link :to="{ name: 'addBlog' }"
                    >Add New blog</router-link
                  >
                  <!-- <v-btn
                           @click="$router.push('addBlog')">Add blog</v-btn> -->
                  <!-- <v-btn
                          @click="generatePdf">
                           
                           Save PDF
                           </v-btn> -->
                </v-col>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <!-- <v-btn>show blog</v-btn> -->
        <v-card
          v-for="(blog, index) in blogdummy"
          :key="index"
          class="mx-auto mt-10"
          color="#8FBC8F"
          dark
          max-width="75%"
        >
          <v-avatar class="ml-3 mt-3">
            <img :src="blog.img" />
          </v-avatar>
          <v-card-title>
            <v-icon large left>mdi-comment-text-outline</v-icon>
            <v-text-field
              disabled
              v-model="blog.name"
              class="text-h6 font-weight-light"
              >{{ blog.name }}</v-text-field
            >
          </v-card-title>

          <v-textarea
            disabled
            v-model="blog.blogtext"
            class="mx-2"
            label="Your Blog"
            rows="4"
            prepend-icon="mdi-comment"
            >{{ blog.blogtext }}</v-textarea
          >
          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center">
                <div class="action-button">
                  <v-btn
                    @click="updatePost(blog.id, index)"
                    class="mr-5 py-5"
                    small
                  >
                    <v-icon class="mr-1">mdi-pencil</v-icon>
                    Update Blog
                  </v-btn>

                  <v-btn
                    class="mr-5 py-5"
                    @click="deletePost(blog.id, index)"
                    small
                  >
                    <v-icon @click="deletePop = true" class="mr-1"
                      >mdi-delete</v-icon
                    >
                    Delete Blog
                  </v-btn>

                  <v-btn @click="pagePdf(blog.id, index)">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    print PDF
                  </v-btn>
                </div>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-snackbar v-model="deletePop"
          >Blog deleted successfully
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="deletePop = false"
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
export default {
  name: "blogBody",
  props: {},
  data() {
    return {
      deletePop: false,
      blogdummy: [{ name: "", blogtext: "", img: "" }],
    };
  },
  methods: {
    async getdata() {
      let result = await axios.get("http://localhost:3000/Post");
      this.blogdummy = result.data;
      //  console.log(this.blogdummy)
      //  console.log(result);
    },
    async deletePost(id, index) {
      let result = await axios.delete("http://localhost:3000/Post/" + id);
      // var index = this.blogdummy.indexOf(id)
      if (result.status == 200) {
        this.deletePop = true;
        this.blogdummy.splice(index, 1);
      }
      console.warn(result);
    },

    updatePost(itemid) {
      this.$router.push({ name: "addBlog", params: { id: itemid } });
      // console.log(this.$route.params.itemid)
    },
    pagePdf(itemid) {
      this.$router.push({ name: "pdfPage", params: { id: itemid } });
      // console.log(this.$route.params.itemid)
    },
  },
  async mounted() {
    this.getdata();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-application a {
  cursor: pointer;
  background-color: black;
  padding: 11px;
  border: 1px solid black;
  border-radius: 8px;
  color: white !important;
  text-decoration: none;
  display: block;
  text-align: center;
  margin: 2%;
}
</style>
