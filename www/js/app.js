var isonline = false;
var eventList = [];
var eventDetail = 0;
document.addEventListener("offline", onOffline, false);
document.addEventListener("online", onOnline, false);
function onOffline() {
    var modaloffline = document.getElementById('modal-offline');
    modaloffline.show({ animation: "fade" });
    isonline = false;
}
function onOnline() {
    var modaloffline = document.getElementById('modal-offline');
    modaloffline.hide({ animation: "fade" });
    isonline = true;
}
ons.bootstrap().controller('eventListCtrl', ['$scope', function ($scope) {
    getEventList();
    $scope.items = eventList;
    $scope.eventDetail = function (value) {
        eventDetail = value;
        modal.show({ animation: "fade" });
        myNavigator.pushPage('eventDetail.html', { data: { title: 'Event Detail'} });
        modal.hide({ animation: "fade" });
    };
}])
.controller('eventDetailCtrl', ['$scope', function ($scope) {
    $scope.eventDetail = eventDetail;
    $scope.checkIn = function () {
        modal.show({ animation: "fade" });
        myNavigator.pushPage('scan.html', { data: { title: 'Check In' } });
        modal.hide({ animation: "fade" });
    }
}]);
ons.ready(function () {
    if (navigator.connection.type !== Connection.NONE) isonline = true;

    var button = document.getElementById('push-button');
    var myNavigator = document.getElementById('myNavigator');

    //var storage = window.localStorage;            
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    if (password != 'null' && email != 'null') {
        var chkAuto = localStorage.getItem("chkAuto");
        document.getElementById('email').value = email;
        document.getElementById('password').value = password;
        if (chkAuto && isonline) login();
    }

    myNavigator.addEventListener('init', function (event) {
        var page = event.target;
        if (page.id === 'login') {
        }
    });
});

function scanBarcode() {
    //$(".card").css('background-image','url(http://b2b.webili.ir/wp-content/uploads/2016/02/b2b_imageProduct_FB_IMG_1453185258596.jpg)');

    console.log("start scaning");
    barcodemin.scanBarcode(function (result) {

        modal_wating.show({ animation: "fade" });
        console.log("barcod id = " + result);
        console.log("result = " + result);
        getData(result);
    }, function (error) {
        alert("Scanning failed: " + error);
    }
 );


}
var getEventList = function () {
    modal_wating.show({ animation: "fade" });
    console.log("run function getEventList");
    $.ajax({
        cache: false,
        type: 'GET',
        url: 'http://b2b.webili.ir/web_service/get_data/?action=eventList',
        async: false,
        timeout: 30000,
        success: function (data) {
            eventList = data;
            modal_wating.hide({ animation: "fade" });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            ons.notification.alert(xhr.status + " " + thrownError);
        }
    })
    modal_wating.hide({ animation: "fade" });
}
function getData(id) {
    console.log("run function");
    $.ajax({
        url: 'http://b2b.webili.ir/web_service/get_data/?action=test&id=' + id,
        data: {},
        success: function (data) {
            $(".card").css('background-image', "url(" + data[0].image_url + ")");
            $("#name").html(data[0].name);
            $("#mobile").text(data[0].mobile);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            ons.notification.alert(xhr.status + " " + thrownError);
        }
    })

    modal_wating.hide({ animation: "fade" });
}

var login = function () {
    var modal = document.getElementById('modal');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var myNavigator = document.getElementById('myNavigator');
    var chkRemem = document.getElementById('chkRemem');
    var chkAuto = document.getElementById('chkAuto');
    modal.show({ animation: "fade" });
    $.ajax({
        url: 'http://b2b.webili.ir/web_service/get_data/?action=auth&email=' + email + '&password=' + password,
        data: {},
        success: function (data) {
            if (data > 9) {
                if (chkRemem.checked) {
                    localStorage.setItem("email", email);
                    localStorage.setItem("password", password);
                    localStorage.setItem("chkAuto", chkAuto.checked);
                }
                else {
                    localStorage.clear();
                }
                myNavigator.pushPage('eventList.html', { data: { title: 'Event List' } });
            }
            else if (data < 10) ons.notification.alert('You don\' have a premission to use this app.');
            else ons.notification.alert('Email or password is wrong!');
            modal.hide({ animation: "fade" });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            ons.notification.alert(xhr.status + " " + thrownError);
            modal.hide({ animation: "fade" });
        }
    })
};

//var eventDetail = function (value) {
//    modal.show({ animation: "fade" });
//    myNavigator.pushPage('eventDetail.html', { data: { title: 'Event Detail' } });
//    modal.hide({ animation: "fade" });    
//};