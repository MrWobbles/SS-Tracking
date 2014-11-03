var client = new WindowsAzure.MobileServiceClient(
"https://sstracking.azure-mobile.net/",
"rHdIWIMpcvQMHkfJABPJSKmnTUpRmb98"
);

var create = $.now();
var update = $.now();

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

        refreshClassList();
    });

    $('.EditItem').click(function () {
        var classId = $(this).data("classid");

        ClassTable.update({ classid: classId, _updatedAt: update, classname: classname, teacher: teacher, room: room, minage: minage, maxage: maxage, coteacher: coteacher });
    });

    refreshClassList();
});

function refreshClassList() {
    var ClassTable = client.getTable('Classes');

    $('#ClassDisplay').empty();

    ClassTable.read().then(function (Classes) {
        Class = $.map(Classes, function (item) {
            var classRow = "";
            classRow += "<li class='class'>";
            classRow += "<div>" + item.classname + "</div>";
            classRow += "<div>" + item.teacher + "</div>";
            classRow += "<div>" + item.coteacher + "</div>";
            classRow += "<div>" + item.room + "</div>";
            classRow += "<div>" + item.minage + " - " + item.maxage + "</div>";
            classRow += "<div><button data-classid="+ item.ClassId +" class='EditItem btn-small'><i class='fa fa-pencil'/></button></div>";
            classRow += "</li>";
            $('#ClassDisplay').append(classRow);
        });
    });
}