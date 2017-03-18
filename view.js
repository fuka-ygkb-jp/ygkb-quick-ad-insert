$(function () {
    //「キャンセル」ボタンを押されたら
    $(document).on('click', '#cancel', function () {
        $('#tags').empty();

        top.tinymce.activeEditor.windowManager.close();

        return false;
    });

    //「改行除去」ボタンが押されたら
    $(document).on('click', '#strip_ret', function () {
        var tags = $('#tags').val();

        tags = tags.replace(/\r?\n/g, "");

        $('#tags').val(tags);

        return false;
    });

    //「挿入」ボタンを押されたら
    $(document).on('click', '#submit', function () {
        var tags = $('#tags').val();

        top.tinymce.activeEditor.selection.setContent($('#tags').val());
        top.tinymce.activeEditor.windowManager.close();

        return false;
    });
});
