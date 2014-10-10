var client = new WindowsAzure.MobileServiceClient(
"https://sstracking.azure-mobile.net/",
"rHdIWIMpcvQMHkfJABPJSKmnTUpRmb98"
);

$(document).ready(function () {

    /* ---------- Placeholder Fix for IE ---------- */
    $('input, textarea').placeholder();

    /* ---------- Auto Height texarea ---------- */
    $('textarea').autosize();

    var ClassTable = client.getTable('Classes');

    $('.AddClass').click(function () {
        var classname = $('.Class').val();
        var teacher = $('.Teacher').val();
        var room = $('.Room').val();
        var minage = $('.MinAge').val();
        var maxage = $('.MaxAge').val();
        var coteacher = $('.CoTeacher').val();

        ClassTable.insert({_createdAt: create, _updatedAt: update, classname: classname, teacher: teacher, room: room, minage: minage, maxage: maxage, coteacher: coteacher });

        $('.Class').val('');
        $('.Teacher').val('');
        $('.Room').val('');
        $('.MinAge').val('');
        $('.MaxAge').val('');
        $('.CoTeacher').val('');
    });

});

function refreshClassTable() {
    var ClassTable = client.getTable('Classes');

    //http://azure.microsoft.com/en-us/documentation/articles/mobile-services-html-get-started-data/
}