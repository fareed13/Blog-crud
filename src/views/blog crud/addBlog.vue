<template>
  <div class="Blog-parent">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto mt-10" color="#5E6F7F" dark max-width="75%">
          <v-card-title>
            <v-icon large left>mdi-comment-processing-outline</v-icon>

            <span v-if="this.$route.params.id" class="text-h6 font-weight-light"
              >Please Update blog</span
            >
            <span v-else class="text-h6 font-weight-light">Add New Blogs</span>
          </v-card-title>
          <v-row class="ml-1">
            <v-col cols="8">
              <v-text-field
                v-model="blogdummy.name"
                label="Enter Name"
              ></v-text-field>
              <v-textarea
                v-model="blogdummy.blogtext"
                class="mx-2"
                label="Write Your Blog"
                rows="1"
                prepend-icon="mdi-comment"
              ></v-textarea>

              <v-file-input
                @change="captureImage"
                v-model="blogdummy.img"
                label="File input"
                prepend-icon="mdi-camera"
              ></v-file-input>

              <!-- <v-text-field
                         v-model="blogdummy.img"
                         truncate-length="18"></v-text-field> -->
            </v-col>
          </v-row>

          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center" justify="end">
                <v-btn v-if="this.$route.params.id" @click="editPost">
                  <v-icon @click="updatePost = true" class="mr-1"
                    >mdi-checkbox-marked-circle</v-icon
                  >
                  confirm update
                </v-btn>
                <v-btn
                  v-else-if="!this.$route.params.id"
                  class="mr-3"
                  @click="addPost"
                >
                  <v-icon @click="addPost1 = true" class="mr-1"
                    >mdi-checkbox-marked-circle</v-icon
                  >
                  Add Your Blog
                </v-btn>
                <v-btn
                  v-else-if="!this.$route.params.id"
                  @click="$router.push('blogBody')"
                >
                  <v-icon class="mr-1">mdi-checkbox-marked-circle</v-icon>
                  View Recent Blog
                </v-btn>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-snackbar v-model="addPost1"
          >Congurats your blog added
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="addPost1 = false"
              >close Notification</v-btn
            >
          </template>
        </v-snackbar>
      </v-col>
      <v-col cols="12">
        <v-snackbar v-model="updatePost"
          >Congurats your blog Updated
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="updatePost = false"
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
  name: "addBlog",
  props: {},
  data() {
    return {
      addPost1: false,
      updatePost: false,
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
    async addPost() {
      const result = await axios.post("http://localhost:3000/Post", {
        name: this.blogdummy.name,
        blogtext: this.blogdummy.blogtext,
        img: this.blogdummy.img,
      });
      if (result.status == 201) {
        this.addPost1 = true;
        this.goTo();
      }
      //  alert("add blog done");
      console.warn(result);
    },
    async editPost() {
      console.log(this.blogdummy);
      const result = await axios.put(
        "http://localhost:3000/Post/" + this.$route.params.id,
        {
          name: this.blogdummy.name,
          blogtext: this.blogdummy.blogtext,
          img: this.blogdummy.img,
        }
      );
      if (result.status == 200) {
        this.updatePost = true;
        this.goTo();
      }
      console.warn(result);
    },
    goTo() {
      setTimeout(() => this.$router.push({ path: "/blogBody" }), 2000);
    },
    // convert image into base64
    captureImage(event) {
      // console.log(event);
      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.blogdummy.img = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
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
