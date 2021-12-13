'use strict';
var numofitems = $('#loop .lists').length;
var limitperpage = 10;

$('#loop .lists:gt('+ (limitperpage - 1) +')').hide();
var totalpages = Math.round(numofitems / limitperpage);

// Show First Page Num of Button on Front end
$(".pagination").append("<li class='page-item active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

// Show Num of Pages Button on Front end
var currentpage = $('.pagination li.active').index();
for (var i = 2 ;i <= totalpages; i++){
    $(".pagination").append("<li class='page-item'><a class='page-link' href='javascript:void(0)'>" + i + "</a></li>");
}

// Show Next Button on Front end
$(".pagination").append("<li id='next-page'><a class='page-link' href='javascript:void(0)'>" + 'Next' + "</a></li>");


// Show All Button Data one by one on Front end
$('.pagination li.page-item').on('click',function(){
    if ($(this).hasClass('active')){
        return false;
    } else {
        var currentpage = $(this).index();
        $('.pagination li').removeClass('active');
        $(this).addClass('active');
        $('#loop .lists').hide();
        console.log(this);
        var grandtotal = limitperpage * currentpage;
        for (var i = grandtotal - limitperpage; i < grandtotal; i++){
            $('#loop .lists:eq('+ i +')').show();
        };
    }
});

// Show Next Page Data on Front end
$('#next-page').on('click',function(){
    console.log('Click Next Button');
    var currentpage = $('.pagination li.active').index();
    console.log(currentpage);
    if (currentpage === totalpages){
        return false;
    } else {
        currentpage++ ;
        $('.pagination li').removeClass('active');
        $('#loop .lists').hide();

        var grandtotal = limitperpage * currentpage;
        for (var i = grandtotal - limitperpage; i < grandtotal; i++){
            $('#loop .lists:eq('+ i +')').show();
        };
        $(".pagination li.page-item:eq(" + (currentpage - 1 ) + ")").addClass('active');
    }
});

// Show Prev Page Data on Front end
$('#prev-page').on('click',function(){
    var currentpage = $('.pagination li.active').index();
    if (currentpage === 1){
        return false;
    } else {
        currentpage -- ;
        console.log('Click Prev Button');
        console.log(currentpage);
        $('.pagination li').removeClass('active');
        $('#loop .lists').hide();

        var grandtotal = limitperpage * currentpage;
        for (var i = grandtotal - limitperpage; i < grandtotal; i++){
            $('#loop .lists:eq('+ i +')').show();
        };
        $(".pagination li.page-item:eq(" + (currentpage - 1) + ")").addClass('active');
    }
});