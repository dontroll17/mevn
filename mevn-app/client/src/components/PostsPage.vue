<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Posts</h1>
        <h3>This file will list all the posts</h3>
        <section class="panel panel-success" v-if="posts.length !== 0">
          <div class="panel-heading">
            <p>list of posts</p>
          </div>
          <table class="table table-striped">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            <tr v-for="(post, idx) in posts" :key="post.title">
              <td>{{post.title}}</td>
              <td>{{post.description}}</td>
              <td>
                <router-link
                  :to="{ name: 'EditPost', params: { id: post._id }}">
                Edit post</router-link>
                <button class="btn btn-danger btn-sm"
                        @click="removePost(post._id)">Delete</button>
              </td>
            </tr>
          </table>
        </section>
        <section class="panel panel-danger" v-else>
          <p> There are no posts...</p>
          <div>
            <router-link :to="{name: 'NewPost'}">Add new post</router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsService from "@/services/PostsService";
  export default {
    name: 'PostsPage',
    data() {
      return {
        posts: []
      }
    },
    methods: {
      async getPosts() {
        const res = await PostsService.fetchPosts();
        this.posts = res.data.posts;
      },
      async removePost(val) {
        await PostsService.deletePost(val);
        await this.getPosts();
      }
    },
    mounted() {
      this.getPosts();
    }
  }
</script>
