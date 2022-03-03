<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Add new Post</h1>
        <form>
          <div class="form-group">
            <input class="form-control" type="text"
              name="title" id="title" placeholder="Title"
              v-model.trim="post.title">
          </div>
          <div class="form-group">
            <textarea class="form-control" name="description"
                      type="text" id="description" rows="5"
                      placeholder="Description"
                      v-model.trim="post.description">
            </textarea>
          </div>
          <div class="form-group">
            <button class="btn btn-block btn-primary"
              type="button" name="addPost" id="addPost"
              @click="addPost()">Add new Post</button>
          </div>
          <section>
            <button class="btn btn-success btn-block"
              @click="goBack()">Go to posts page</button>
          </section>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import PostsService from "@/services/PostsService";
  export default {
    name: 'NewPostPage',
    data() {
      return {
        post: {
          title: '',
          description: ''
        }
      }
    },
    methods: {
      async addPost() {
        if(this.post.title !== '' && this.post.description !== '') {
          await PostsService.addNewPost({
            title: this.post.title,
            description: this.post.description
          });
          this.$router.push({name: 'Posts'});
        }else {
          alert('Empty fields!');
        }
      },
      goBack() {
        this.$router.push({ name: 'Posts' });
      }
    }
  }
</script>
