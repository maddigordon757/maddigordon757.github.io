$( document ).ready(function() {
    
    var resId = getUrlParameter('id');
    doGetInfo(resId);
});

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function doGetInfo(resId) {

    $.ajax({
        url: 'https://developers.zomato.com/api/v2.1/restaurant?res_id=' + resId,
        headers: {
            'user-key': '436cee2bb01dbb94a228dd1a7953b54e'
        },
        contentType: 'application/json; charset=utf-8',
        type: 'GET',
        dataType: 'json',
        success: function(result){
            //  console.log('succes: '+ result );
            console.log(result);
            //console.log('hi');
            var restaurant = result;
            var name = restaurant.name;
            var id = restaurant.id;
            var address = restaurant.location.address;
            var image = restaurant.featured_image;
            var menu = restaurant.menu_url;
            var rating = restaurant.user_rating.rating_text;
            var phone = restaurant.phone_numbers;
            var cuisine = restaurant.cuisines;

            $("#cuisine").text(cuisine);
            $("#rating").text(rating);
            $("#businessName").text(name);
            $("#address").text(address);
            $("#menu").attr("href", menu);
            $("#photo").attr("src", image).text(image);
            //...
        }
    });
};