var PostsArea = $('.Main .PostsArea')
function Animation() {
    PostsArea.animate(
        {
            'margin-top': 0,
            opacity: '1',
        },
        1500
    );
}
$(Animation)