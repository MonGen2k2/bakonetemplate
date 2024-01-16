$("form").validate({
    rules: {
        // simple rule, converted to {required:true}
        name: {
            required: true,
            maxlength: 50,
            regex: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/i
        },
        // compound rule
        email: {
            required: true,
            email: true
        },

        password: {
            required: true,
        },

    },

    messages: {
        // simple rule, converted to {required:true}
        name: {
            required: "Vui lòng nhập vào họ và tên",
            maxlength: "không được có nhiều hơn 50 kí tự",
            regex: 'không được có các kí tự đặc biệt'
        },

        // compound rule
        email: {
            required: 'Vui lòng nhập vào email',
            email: 'Vui lòng nhập đúng định dạng email'
        },

        messages: {
            required: 'Vui lòng nhập vào message',
        },

    }
});
// regex username
$.validator.addMethod(
    // regex dưới đây là làm thêm cho chữ regex trên
    "regex",
    function(value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    "Please check your input."
);

// jqClick
$('.portfolio button').click(function(e) {
    e.preventDefault();
    // xóa active class ra khỏi button đang active
    $('button.active').removeClass('active');
    $(this).addClass('active')

    const dataValue = $(this).attr('data');
    // Lấy 8 cái div
    const alldivs = $('.portfolio > .row > div');
    if (dataValue == 'all') {
        alldivs.show();
        return;
    }
    // Lấy div tương đương với data
    // vd: web-desgin
    // portfolio > .row >div[data= web-design]
    const showDivs = $(`.portfolio > .row > div[data= ${dataValue}]`)

    // Lấy những div ẩn
    const hidenDivs = alldivs.not(showDivs);

    showDivs.show();
    hidenDivs.hide();
});

// menu xổ xuống
// jqScroll
// window là biến toàn cục có sẵn của js
$(window).scroll(function() {
    // đo khoảng cách từ window đổ xuống đo từ top
    // console.log($(window).scrollTop())

    if ($(window).scrollTop() >= $('#portfolio').offset().top) {
        $('.navbar').addClass('fixed-top');
        $('header').addClass('dummy-padding-top');
    } else {
        $('.navbar').removeClass('fixed-top')
        $('header').removeClass('dummy-padding-top');


    }
});