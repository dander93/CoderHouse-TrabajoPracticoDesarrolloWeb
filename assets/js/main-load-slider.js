document.addEventListener('DOMContentLoaded', () => {
    const slides = Array.from(document.querySelectorAll('.slides > li'));
    const postListNodes = Array.from(document.querySelectorAll('.post-list > li'));
    const postList = postListNodes.map(elem => elem.childNodes[1]);

    postList.forEach((elem, index) => {
        let imgUrl = `url('${elem.childNodes[1].src}')`;

        slides[index].style.backgroundImage = imgUrl;
        slides[index].style.backgroundRepeat = 'no-repeat';
        slides[index].style.backgroundSize = 'cover';
        slides[index].style.backgroundAttachment = 'fixed';

        let postDescription = elem.childNodes[5].cloneNode(true);

        // slides[index].appendChild(postDescription);
    })
});