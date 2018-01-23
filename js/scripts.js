// Empty JS for your own code to be here
/*
JS-SF-9
Maddy Gordon
  Please add all Javascript code to this file.
*/
$( document ).ready(function() {
    doSearch(null);
});

$('#submit').click(function () {
    doSearch($('#search').val());
    return false;
});

function doSearch(search) {

    var url;
    if (search != null) { 
        url = 'https://developers.zomato.com/api/v2.1/search?entity_id=306&entity_type=city&establishment_type=1&q='+search;
    } else {
        url = 'https://developers.zomato.com/api/v2.1/search?entity_id=306&entity_type=city&establishment_type=1';
    }

    $.ajax({
        url: url,
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
            console.log(result.restaurants.length);
            for (i = 0; i < result.restaurants.length; i++) { 
                console.log(result.restaurants[i].restaurant.name);
                var restaurant = result.restaurants[i].restaurant;
                var name = restaurant.name;
                var id = restaurant.id
                var nameDisplay = "<tr><td><a href='info.html?id="+id+"'>"+ name +"</a></td></tr>";
                
                $('#myTable tr:last').after(nameDisplay);
            }
        }
    });
}

/* Bakery 31, Juice Bar, Brewery, Coffee Shop, Pizzeria */