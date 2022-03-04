<template>
  <section class="edit">
    <h1>Edit post</h1>
    <form @submit.prevent="editPost()">
      <div>
        <input type="text" name="title" placeholder="Title"
               v-model.trim="post.title">
      </div>
      <div>
        <input type="text" name="description"
               placeholder="Description" v-model.trim="post.description">
      </div>
      <div>
        <button type="submit" name="editPost">Edit post</button>
      </div>
    </form>
    <div>
      <router-link :to="{ name: 'Posts' }">Go to list of posts</router-link>
    </div>
  </section>
</template>

<script>
  import PostsService from "@/services/PostsService";
  export default {
    name: 'EditPostPage',
    data() {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async getPost() {
        const res = await PostsService.getPost({
          id: this.$route.params.id
        });
        this.post.title = res.data.title;
        this.post.description = res.data.description;
      },
      async editPost() {
        if(this.post.title !== '' && this.post.description !== '') {
          await PostsService.updatePost({
            id: this.$route.params.id,
            title: this.post.title,
            description: this.post.description
          });
          this.$router.push({ name: 'Posts' });
        }
      }
    },
    mounted() {
      this.getPost();
    }
  }
</script>
