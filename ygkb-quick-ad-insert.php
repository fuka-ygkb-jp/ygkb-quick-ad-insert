<?php
/*
Plugin Name: Ygkb Quick Ad Insert
Plugin URI: https://ygkb.jp/apps/quick-ad-insert
Description: ビジュアルエディタに「広告タグを挿入する」ボタンを追加します。
Version: 1.1
Author: 有限工房
Author URI: https://ygkb.jp/
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
*/

/*
Copyright 2017 Yugen-Koubou

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/* ボタン登録 */
function ygkb_qai_button_regist( $buttons ) {
	$buttons[] = 'ygkb_qai_button';

	return $buttons;
}
add_filter( 'mce_buttons', 'ygkb_qai_button_regist' );

/* スクリプト登録 */
function ygkb_qai_button_script( $plugin_array ) {
    //memo: editor_plugin.js の tinymce.PluginManager.add() の第一引数とキー名を合わせること
	$plugin_array['ygkb_qai'] = plugins_url( 'editor_plugin.js', __FILE__ );

	return $plugin_array;
}
add_filter( 'mce_external_plugins', 'ygkb_qai_button_script' );
