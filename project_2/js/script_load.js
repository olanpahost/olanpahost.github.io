$('document').ready(function() {

    var num = 1,//counter for posts

        NNN = true;

   function MinSearch(a,b){

        if (a>b){console.log('min=lengthData='+b);  return b;}

        else{console.log('min=num='+a);return a;}

    }

$('#button').on('click',function () {

    console.log('NNN='+NNN);

    if (NNN){

    $.ajax({

        url: "doc/dataBlog.json",

        type: "GET",

        success: function (data) {

            var lengthData = data.length,

                c = MinSearch((num + 4), lengthData),

                elem=[],

                childElem=[];

            if (num < lengthData) {

                for (var i = (num - 1); i < c; i++) {

                    console.log('i=' + i);

                    num++;

                    elem[i] = $("<div></div>").addClass('row new').insertBefore('#button');//створення нового рядка

                    childElem[1] = $("<div></div>",{class:"col-md-4 col-lg-4 hidden-sm hidden-xs"}).appendTo(elem[i]);

                    childElem[2] = $("<div></div>",{class:"col-md-8 col-lg-8 col-sm-12 col-sx-12"}).appendTo(elem[i]);

                    childElem[3] = $("<a/>").attr('href','#');

                    childElem[4] = $("<a></a>").attr('href','#');

                    childElem[5] = $("<h2/>").text(data[i]["title"]);

                    childElem[6] = $('<ul/>').addClass("DateAuthorTitle");

                    childElem[7] = $('<ul/>').addClass("DateAuthorTitle");

                    childElem[8] = $('<div/>').addClass("Article").text(data[i]["text"]).append('<a href="#">...&gt; </a>');

                    $('<img>').attr('src', data[i]["image"]).appendTo(childElem[3].attr('class', "img").appendTo(childElem[1]));//image of new post inserting



                   childElem[4].append(childElem[5]).appendTo(childElem[2]);//заголовок до посту



                    childElem[6].append('<li>' + data[i]["date"] + '</li> <li> by <a href="#">' + data[i]["author"] + '</a> </li>' +

                    ' <li> <a href="#">' + data[i]["tag"] + '</a> </li> ').appendTo(childElem[2]);

                    childElem[8].appendTo(childElem[2]);//анотація статті

                    childElem[7].append(' <li> <i class="fa fa-eye" aria-hidden="true"></i> <span>' + data[i]["views"] + '</span> </li>' +

                        ' <li><i class="fa fa-comment-o" aria-hidden="true"></i> <a href="#"><span>19</span></a> </li> ')

                  .appendTo(childElem[2]);

                }

            }

            if (c === lengthData) {

                NNN = false;

                num = 1;

                $('#MoreArt').css('display', 'none');

                $('#LessArt').css('display', 'inline');

            }//end if

            var scrollHeight = Math.max(//блок, що дозволяє не промотувати сторінку при створенні нових елементів

                document.body.scrollHeight, document.documentElement.scrollHeight,

                document.body.offsetHeight, document.documentElement.offsetHeight,

                document.body.clientHeight, document.documentElement.clientHeight

            );

            window.scrollTo(0, scrollHeight)

        },//end success

        error: function(){console.log('дані не завантажились');}

    })//end ajax

    }else{$('div.row.new').remove();

        NNN = true;

    $('#MoreArt').css('display', 'inline');

    $('#LessArt').css('display', 'none');}

})//end click
})//end

