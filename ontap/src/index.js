
import router from "./helpers/router";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Post from "./pages/Post";
import PostForm from "./pages/PostForm";
const render = async (content, id) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    if (content.afterRender) {
        content.afterRender(id)
    }
}

router.on({
    '/': () => render(Post),
    '/add': () => render(PostForm),
    '/edit/:id': (data) => render(PostForm, data.data.id)
});

router.resolve();