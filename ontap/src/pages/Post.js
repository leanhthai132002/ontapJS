import { deletePost, getPosts } from "../api/post";
import reRender from "../helpers/reRender";
const Post = {
  render: async () => {
    const response = await getPosts();
    const { data } = response;

    return `
          <div class="container">
          <div class="row">        
        
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Ảnh</th>
                            <th>Mô tả ngắn</th>
                            <th>Mô tả</th>
                            <th>Trạng thái</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${data
                      .map(
                        (post) => `
                        <tr>
                            <td>${post.id}</td>
                            <td>${post.title}</td>
                            <td><img style="width: 100px; heigh: 100px" src="${post.thumbnail}" alt=""></td>
                            <td>${post.short_desc}</td>
                            <td>${post.desc}</td>
                            <td>${post.status}</td>
                            <td> 
                                <button class='btn btn-danger' data-id="${post.id}" >Xoá</button>
                                <a href="/edit/${post.id}"> <button class="btn btn-warning">Edit</button></a>
                            </td>
                        </tr>
                        `
                      )
                      .join("")}
                    </tbody>
                </table>
          </div>
        </div>
    </div>
    `;
  },
  afterRender: () => {
    const deleteBtns = document.querySelectorAll(".btn-danger");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const btnId = btn.dataset.id;
        confirm("a diu sua");
        await deletePost(btnId);
        await reRender("#content", Post);
      });
    });
  },
};
export default Post;
