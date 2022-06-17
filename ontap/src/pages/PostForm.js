import { createPost, getPost, updatePost } from "../api/post";
import router from "../helpers/router";

const PostForm = {
  render: async (id) => {
    let post = {
      title: "",
      thumbnail: "",
      short_desc: "",
      desc: "",
      status: 0,
    };
    if (id) {
      const response = await getPost(id);
      post = response.data;
    }

    return `
        <form>
            <div class='form-group'>
                <label>Tiêu đề</label>
                <input
                    value="${post.title}"
                    class='form-control'
                    id='title'
                />
            </div>
            <div class='form-group'>
                <label>Ảnh</label>
                <input
                    value="${post.thumbnail}"
                    class='form-control'
                    id='thumbnail'
                />
            </div>
            <div>
                <img id="show-thumbnail" />
            </div>
            <div class='form-group'>
                <label>Mô tả ngắn</label>
                <input
                    value="${post.short_desc}"
                    class='form-control'
                    id='short_desc'
                />
            </div>
            <div class='form-group'>
                <label>Mô tả</label>
                <input
                    value="${post.desc}"
                    class='form-control'
                    id='desc'
                />
            </div>
            <div class='form-group'>
                <label>Trạng thái</label>
                <input
                    value="${post.status}"
                    class='form-control'
                    id='status'
                />
            </div>
            <div class='form-group'>
                <button type='button' class='btn btn-success' id='btn'>
                    ${id ? "Cập nhật" : "Tạo mới"}
                </button>
            </div>
        </form>
        `;
  },
  afterRender: (id) => {
    // console.log('afterRender', id);
    const submitBtn = document.querySelector("#btn");
    submitBtn.addEventListener("click", async () => {
      const title = document.querySelector("#title").value;
      const thumbnail = document.querySelector("#thumbnail").value;
      const short_desc = document.querySelector("#short_desc").value;
      const desc = document.querySelector("#desc").value;
      const status = document.querySelector("#status").value;

      const submitData = {
        title: title,
        thumbnail: thumbnail,
        short_desc: short_desc,
        desc: desc,
        status: status,
      };


      if (id) {
        await updatePost(id, submitData);
      } else {
        await createPost(submitData);
      }

      router.navigate("/");
    });

    const avatarElement = document.querySelector("#thumbnail");
    avatarElement.addEventListener("input", () => {
      const avatarValue = avatarElement.value;

      const imgElement = document.querySelector("#show-thumbnail");
      imgElement.src = avatarValue;
      imgElement.width = 100;
      imgElement.height = 100;
    });
  },
};
export default PostForm;
