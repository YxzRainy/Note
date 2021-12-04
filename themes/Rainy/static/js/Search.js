SearchBox(300)


// 获取搜索框、搜索按钮、清空搜索、结果输出对应的元素
var searchInput = document.querySelector('.SearchInput');
var searchResults = document.querySelector('.SearchResults');
// 用jq的方法获取元素，并为其设置动画
var searchResult = $('.SearchResults')
var seaechItem = document.querySelector('.result-item');

// 申明保存文章的标题、链接、内容的数组变量
var searchValue = '',
    arrItems = [],
    arrContents = [],
    arrLinks = [],
    arrTitles = [],
    arrResults = [],
    indexItem = [],
    itemLength = 0;
var tmpDiv = document.createElement('div');
tmpDiv.className = 'result-item TransitionOne';

// ajax 的兼容写法
var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        xml = xhr.responseXML;
        arrItems = xml.getElementsByTagName('item');
        itemLength = arrItems.length;

        // 遍历并保存所有文章对应的标题、链接、内容到对应的数组中
        // 同时过滤掉 HTML 标签
        for (i = 0; i < itemLength; i++) {
            arrContents[i] = arrItems[i].getElementsByTagName('description')[0].
                childNodes[0].nodeValue.replace(/<.*?>/g, '');
            arrLinks[i] = arrItems[i].getElementsByTagName('link')[0].
                childNodes[0].nodeValue.replace(/<.*?>/g, '');
            arrTitles[i] = arrItems[i].getElementsByTagName('title')[0].
                childNodes[0].nodeValue.replace(/<.*?>/g, '');
        }
    }
}

// 开始获取根目录下 index.xml 文件内的数据
xhr.open('get', '/Sub/Blog/index.xml', true);
xhr.send();



// 输入框内容变化后就开始匹配，可以不用点按钮
// 经测试，onkeydown, onchange 等方法效果不太理想，
// 存在输入延迟等问题，最后发现触发 input 事件最理想，
// 并且可以处理中文输入法拼写的变化
searchInput.oninput = function () {
    //    延迟执行
    setTimeout(searchConfirm, 0);
}



function searchConfirm() {
    if (searchInput.value == '') {
        searchResult.fadeOut(300)
    } else if (searchInput.value.search(/^\s+$/) >= 0) {
        // 检测输入值全是空白的情况
        searchInit();
        var itemDiv = tmpDiv.cloneNode(true);
        itemDiv.innerText = '请输入关键字...';
        searchResults.appendChild(itemDiv);

    } else {
        // 合法输入值的情况
        searchInit();
        searchValue = searchInput.value;
        // 在标题、内容中查找
        searchMatching(arrTitles, arrContents, searchValue);
    }
}


// 每次搜索完成后的初始化
function searchInit() {
    arrResults = [];
    indexItem = [];
    searchResults.innerHTML = '';
    searchResult.fadeIn(300)
    // searchResults.style.display = 'block';


}

function searchMatching(arr1, arr2, input) {
    // 忽略输入大小写
    input = new RegExp(input, 'i');
    // 在所有文章标题、内容中匹配查询值
    for (i = 0; i < itemLength; i++) {
        if (arr1[i].search(input) !== -1 || arr2[i].search(input) !== -1) {
            // 优先搜索标题
            if (arr1[i].search(input) !== -1) {
                var arr = arr1;
            } else {
                var arr = arr2;
            }
            indexItem.push(i);  // 保存匹配值的索引
            var indexContent = arr[i].search(input);
            // 此时 input 为 RegExp 格式 /input/i，转换为原 input 字符串长度
            var l = input.toString().length - 3;
            var step = 10;

            // 将匹配到内容的地方进行黄色标记，并包括周围一定数量的文本
            arrResults.push(arr[i].slice(indexContent - step, indexContent) +
                '<mark>' + arr[i].slice(indexContent, indexContent + l) + '</mark>' +
                arr[i].slice(indexContent + l, indexContent + l + step));
        }
    }

    // 输出总共匹配到的数目
    var totalDiv = tmpDiv.cloneNode(true);
    totalDiv.innerHTML = '共检索到 <strong>' + indexItem.length + '</strong> 篇文章';
    searchResults.appendChild(totalDiv);

    // 未匹配到内容的情况
    // if (indexItem.length == 0) {
    //     var itemDiv = tmpDiv.cloneNode(true);
    //     itemDiv.innerText = '未匹配到内容...';
    //     searchResults.appendChild(itemDiv);
    // }

    // 将所有匹配内容进行组合
    for (i = 0; i < arrResults.length; i++) {
        var itemDiv = tmpDiv.cloneNode(true);
        itemDiv.innerHTML = '<strong>' + arrTitles[indexItem[i]] +
            '</strong><br/>' + arrResults[i];
        itemDiv.setAttribute('onclick', 'changeHref(arrLinks[indexItem[' + i + ']])');
        searchResults.appendChild(itemDiv);
        // 点击项目检索结果后关闭搜索框
        var SearchItems = $('[onclick]')

        SearchItems.click(function () {
            // 清空搜索框内容
            searchInput.value = '';
            searchResult.fadeOut(300)
            // 关闭搜索框和遮罩
            Box.fadeOut(300);
            Mask.fadeOut(300);
        });

        // ItemsFirst.click(function () {
        //     console.log(666666666)
        // });

    }
}

function changeHref(href) {

    // 在当前页面点开链接的情况
    location.href = href;

    // 在新标签页面打开链接的代码，与上面二者只能取一个，自行决定
    // window.open(href);
}






function SearchBox(time) {

    // 创建对话框遮罩
    Mask = $('<div></div>');
    var body = $('body');
    Mask.appendTo(body);
    Mask.attr('class', 'SearchDialogMask');
    // 创建对话框
    Box = $('<dialog></dialog>');
    Box.appendTo(body);
    Box.attr('class', 'SearchDialogBox MinWidth');
    // 创建搜索框内容
    var Content = $('<div></div>');
    Content.attr('class', 'Content');
    Content.appendTo(Box);
    var SearchArea = $('<div></div>');
    SearchArea.attr('class', 'SearchArea');
    SearchArea.appendTo(Content);

    var SearchInput = $('<input type="text" class="SearchInput" placeholder="搜索文章" />');
    SearchInput.appendTo(SearchArea);

    var SearchResults = $('<div class="SearchResults HideScroll"></div>')
    SearchResults.appendTo(SearchArea);

    // 创建关闭按钮框
    var CloseBox = $('<div class="CloseBox TransitionOne"></div>');
    CloseBox.appendTo(Box);
    // 创建关闭按钮图标
    var Close = $('<svg class="Icon TransitionOne" aria-hidden="true"><use href="#Icon-Close"></use></svg>');
    Close.appendTo(CloseBox);
    Close.attr('class', 'Close');

    // 对话框效果
    var SearchDialog = $('.SearchDialogBox');
    SearchDialog.fadeIn(time);
    $('.SearchDialogBox .CloseBox').click(function () {
        // 清空搜索框内容
        searchInput.value = '';
        searchResult.fadeOut(300)
        // 关闭搜索框和遮罩
        Box.fadeOut(time);
        Mask.fadeOut(time);
    });
    Box.css({
        display: 'none',

    })
    Mask.css({
        display: 'none',

    })
}
// 点击按钮弹出对话框
function GetEl() {
    Search = $('#SearchBox .Search');
}

function SearchClick() {
    Search.click(function () {
        Box.fadeIn(300);
        Mask.fadeIn(300);
    });

}


$(GetEl)
$(SearchClick)