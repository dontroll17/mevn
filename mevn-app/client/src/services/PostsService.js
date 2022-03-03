import api from '@/services/api';

export default {
  fetchPosts() {
    return api().get('posts');
  },
  addNewPost(param) {
    return api().post('posts', param);
  }
}
