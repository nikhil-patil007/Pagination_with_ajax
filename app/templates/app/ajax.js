// Show First Page Num of Button on Front end
var endofpage = '{{pages}}';

$(".pagination").append("<li class='page-item active'><a class='page-link' href='javascript:void(0)'>" + 1 + "</a></li>");

// For Check Current Index
var currentindex = $('.pagination li.active').index();

// Show Num of Pages Button on Front end
for (var i = 2 ;i <= endofpage; i++){
    $(".pagination").append("<li class='page-item'><a class='page-link' href='javascript:void(0)' data="+ i +">" + i + "</a></li>");
}

// Show Next Button on Front end
$(".pagination").append("<li id='next-page'><a class='page-link' href='javascript:void(0)' data=''>" + 'Next' + "</a></li>");

$('.pagination li.page-item').on('click',function(){
    if ($(this).hasClass('active')){
        return false;
    } else {
        var currentpage = $(this).index();
        console.log(currentpage)
        var page_no = currentpage;
        $('.pagination li').removeClass('active');
        $(this).addClass('active');
        $.ajax({
            type: "POST",
            // define url name
            url: "{% url 'home' %}", 
            data : {    
                page_no : page_no, 
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
            // handle a successful response
            success: function (response) {
                if ($(this).hasClass('active')){
                    return false;
                } else {
                    $('#lists').html('')
                    $("#nuun").html('')
                    $("#nuun").append("<p class='page-link'>" + currentpage + '&#160' + 'Out Of'+ ' ' + endofpage +"</p>")

                    $.each(response.results, function(i, val) {
                        //append to post
                        for(var j=1 ; j <= i ; j++){j};
                        $('#lists').append("<tr style='background:#e9ecef'><td>" + j  + '</td><td>' + "<img src= " + val.imaged + " class='bg-light d-inline-flex justify-content-center align-items-center align-top' style='height: 50px; width: 50px; border-radius: 500px;' alt='' />" + '</td><td>' + val.categ + '</td><td>'+ val.modeld +'</td><td>'+ val.named +'</td><td>'+ val.disd + '</td><td>'+ val.sized + '</td><td>' + val.colord + '</td></tr>')
                    });
                };
            },
            error: function () {
                    alert('Page Not Founded');
                }
        }); 
    }
});

$("#next-page").on('click',function(){
    var currentpage = $('.pagination li.active').index();
    if (currentpage == endofpage){
        console.log('Click Next Button');
        return false;
    }else{
        var currentpage = $('.pagination li.active').index();
        var nextpage = currentpage + 1;
        console.log(nextpage)
        $.ajax({
            type: "POST",
            // define url name
            url: "{% url 'home' %}", 
            data : {    
                page_no : nextpage, 
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
            // handle a successful response
            success: function (response) {
                if ($(this).hasClass('active')){
                    return false;
                } else {
                    $('.pagination li').removeClass('active');
                    $('#lists').html('')
                    $("#nuun").html('')
                    $("#nuun").append("<p class='page-link'>" + nextpage + '&#160' + 'Out Of'+ ' ' + endofpage +"</p>")
                    
                    $.each(response.results, function(i, val) {
                        //append to post
                        for(var j=1 ; j <= i ; j++){j};
                        $('#lists').append("<tr style='background:#e9ecef'><td>" + j  + '</td><td>' + "<img src= " + val.imaged + " class='bg-light d-inline-flex justify-content-center align-items-center align-top' style='height: 50px; width: 50px; border-radius: 500px;' alt='' />" + '</td><td>' + val.categ + '</td><td>'+ val.modeld +'</td><td>'+ val.named +'</td><td>'+ val.disd + '</td><td>'+ val.sized + '</td><td>' + val.colord + '</td></tr>')
                    });
                    $(".pagination li.page-item:eq(" + (nextpage - 1 ) + ")").addClass('active');
                };
            },
            error: function () {
                return false;
            }
        }); 
    }
});

$("#prev-page").on('click',function(){
    var currentpage = $('.pagination li.active').index();
    if (currentpage === 1){
        console.log('Click Next Button');
        return false;
    }else{
        var currentpage = $('.pagination li.active').index();
        var nextpage = currentpage - 1;
        console.log(nextpage)
        $.ajax({
            type: "POST",
            // define url name
            url: "{% url 'home' %}", 
            data : {    
                page_no : nextpage, 
                csrfmiddlewaretoken: '{{ csrf_token }}',
            },
            // handle a successful response
            success: function (response) {
                if ($(this).hasClass('active')){
                    return false;
                } else {
                    $('.pagination li').removeClass('active');
                    $('#lists').html('')
                    $("#nuun").html('')
                    $("#nuun").append("<p class='page-link'>" + nextpage + '&#160' + 'Out Of'+ ' ' + endofpage +"</p>")
                    
                    $.each(response.results, function(i, val) {
                        //append to post
                        for(var j=1 ; j <= i ; j++){j};
                        $('#lists').append("<tr style='background:#e9ecef'><td>" + j  + '</td><td>' + "<img src= " + val.imaged + " class='bg-light d-inline-flex justify-content-center align-items-center align-top' style='height: 50px; width: 50px; border-radius: 500px;' alt='' />" + '</td><td>' + val.categ + '</td><td>'+ val.modeld +'</td><td>'+ val.named +'</td><td>'+ val.disd + '</td><td>'+ val.sized + '</td><td>' + val.colord + '</td></tr>')
                    });
                    $(".pagination li.page-item:eq(" + (nextpage - 1 ) + ")").addClass('active');
                };
            },
            error: function () {
                return false;
            }
        }); 
    }
});