const reRender = async (elementRender, content, id) => {
    document.querySelector(elementRender).innerHTML = await content.render(id);
    if (content.afterRender) {
        content.afterRender();
    }
}
export default reRender;