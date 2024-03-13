$(document).ready(function() {
    var weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var now = new Date();
    var day = weekdays[now.getDay()];
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var fullDate = day + "，" + month + "月" + date + "日";

    $("#now-day-time").text(fullDate);

    // 添加新任务
    $('#new-task-form').on('submit', function(e) {
        e.preventDefault();

        var taskText = $('#new-task-input').val().trim();
        if (taskText) {
            $('#task-list').append(
                '<li class="task-item">' + taskText +
                ' <span class="task-date">' + new Date().toLocaleDateString() + '</span>' +
                '<button class="delete-task-btn">删除</button></li>'
            );

            $('#new-task-input').val('');
        }
    });

    // 删除任务
    $('#task-list').on('click', '.delete-task-btn', function() {
        $(this).parent('.task-item').remove();
    });




});
