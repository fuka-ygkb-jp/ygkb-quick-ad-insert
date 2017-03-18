(function () {

    tinymce.create(
        'tinymce.plugins.MyButtons',
        {
            init: function (ed, url) {
                ed.addButton(
                    'input_text',
                    {
                        title: '広告タグを挿入する',
                        image: url + '/button1.svg',
                        cmd: 'insert_tag_cmd'
                    }
                );

                ed.addCommand('insert_tag_cmd', function () {
                    ed.windowManager.open(
                        {
                            url: url + '/view.html',
                            width: 640,
                            height: 480,
                            title: '広告タグをテキストボックスに貼り付けてください。'
                        },
                        {
                            custom_param: 1
                        });
                });
            },
            createControl: function (n, cm) {
                return null;
            }
        }
    );
    tinymce.PluginManager.add(
        'custom_button_script',
        tinymce.plugins.MyButtons
    );
})();
