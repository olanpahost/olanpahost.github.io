$('document').ready(function () {
    let counter = 0,
        toLoad = 5,
        endReached = false;
    endReached = LoadGoods(0, 3, endReached, counter);
    const MinSearch = (a, b) => (a > b)?b:a;
    const NoScroll = () => {
        // let scrollHeight = Math.min(//блок, що дозволяє не промотувати сторінку при створенні нових елементів
        //     document.body.scrollHeight, document.documentElement.scrollHeight,
        //     document.body.offsetHeight, document.documentElement.offsetHeight,
        //     document.body.clientHeight, document.documentElement.clientHeight
        // );
        window.scrollTo(0,0);
    };
    $("#button").on('click', function () {//обробка події про підвантаження товарів
        num = $(PARENT_ROW).find($(".white-block")).length;
        endReached = LoadGoods(num, toLoad, endReached, counter)
    });

    $('.merchandises').on('click', '.merchand__item-picture [title]', function (e) {
        e.preventDefault();
        let address = $(this).attr('title');
        $('.main').load(address);
    });//end click;
    function LoadGoods(num, x, endReached, counter) {//функція підвантаження товарів
        if (!endReached) {
            $.ajax({
                url: "doc/smartphones.json",
                type: "GET",
                success: function (data) {
                    const lengthData = data.length;
                    const amountToLoad = MinSearch((num + x), lengthData);
                    let slide = [];
                    if (num - lengthData) {
                        for (let i = num; i < amountToLoad; i++) {
                            ++counter;
                            let sliderAm = data[i].images.length;//the number of the good images
                            let whiteBlock = $("<div>", {class: "col-12 col-md-6 col-lg-4 p-0 white-block"});//створення нового рядка
                            let item = $("<div>", {class: "merchand_item"}).appendTo(whiteBlock),
                                item_pict = $("<div>", {class: "merchand__item-picture"}).appendTo(item);


                            let blockInfo = $("<div>", {class: "merchand_item__info"}).appendTo(item);

                            $('<h4>', {class: "h4__item"}).append(data[i].title).appendTo(blockInfo);
                            let priceBlock = $('<div>', {class: "merchand_item__info-price"}).appendTo(blockInfo);
                            let stars = $('<div>', {class: "merchand_item-stars"}).appendTo(priceBlock);
                            for (let j = 0; j <= (+data[i].stars - 0.5); j++) {//stars
                                stars.append((j < 0.5 + data[i].stars) ? $('<i>', {class: "fas fa-star fa-sm"}) : $('<i>', {class: "fas .fa-star-half-alt"}));
                            }

                            if (sliderAm > 0) {//вставка рисунків слайдера
                                for (let j = 0; j < sliderAm; j++) {
                                    slide[j] = $("<div>").append("<img" + " src=" + "" + data[i].images[j] + ' title="html/page.html"' + '>');
                                    slide[j].appendTo(item_pict);
                                }
                            } else {
                                slide[0] = $("<div>", {class: "text-centered"}).html('зображення відсутнє').appendTo(item_pict);
                            }
                            let price = $('<div>', {class: "merchand_item-price"}).append($('<span>').html(data[i].price)),
                                buttonAdd = $('<button>', {class: "button"}).html('add to cart')
                                    .attr({
                                        'data-id': data[i].id,
                                        'data-price': data[i].price,
                                        'data-title': data[i].title
                                    });
                            priceBlock.append(price, buttonAdd);
                            counter = 0;

                            ApplPlugin(item_pict);
                            whiteBlock.appendTo($(PARENT_ROW))
                        }

                        if ($(PARENT_ROW).find($(".white-block")).length == lengthData) {
                            endReached = true;
                            $("#button").hide();
                        }
                    }
                    NoScroll();
                },
                error: function () {
                    console.log('дані не завантажились');
                }
            });//end ajax
            return endReached;
        }//end if

    }// end Function

});//end