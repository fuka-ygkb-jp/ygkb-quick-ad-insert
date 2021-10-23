$(function () {
    //テキストボックスにフォーカス当てる
    $('#tags').focus();

    //「キャンセル」ボタンを押されたら
    $('#cancel').on('click', function () {
        $('#tags').empty();

        top.tinymce.activeEditor.windowManager.close();

        return false;
    });

    //「改行除去」ボタンが押されたら
    $('#strip_ret').on('click', function () {
        var val = $('#tags').val();

        val = val.replace(/\r?\n/g, "");

        $('#tags').val(val);

        return false;
    });

    //「挿入」ボタンを押されたら
    $('#submit').on('click', function () {
        var mce = top.tinymce.activeEditor;
        mce.selection.setContent($('#tags').val());
        mce.windowManager.close();

        return false;
    });
});
