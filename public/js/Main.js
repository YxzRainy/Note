// 文章页无目录时文章区域的宽度
var Post = $('.Post')
var Directory = $('#TableOfContents')
if (Directory.height() == 0 || Directory.css('position') == 'static') {
    Post.css({
        'max-width': '100%',
    })
}