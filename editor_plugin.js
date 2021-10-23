(function () {
    tinymce.create('tinymce.plugins.YgkbQuickAdInsert', {
        init: function (ed, url) {
            // ボタン定義
            ed.addButton('ygkb_qai_button', {
                title: '広告タグを挿入する',
                image: url + '/button.svg',
                cmd: 'ygkb_qai_open_view'
            });

            // ボタン動作定義
            ed.addCommand('ygkb_qai_open_view', function () {
                ed.windowManager.open({
                    url: url + '/view.html',
                    width: 640,
                    height: 300,
                    title: '広告タグをテキストボックスに貼り付けてください。'
                }, {
                    custom_param: 1
                });
            });
        },
        createControl: function (n, cm) {
            return null;
        }
    });

    tinymce.PluginManager.add(
        'ygkb_qai',
        tinymce.plugins.YgkbQuickAdInsert
    );
})();
