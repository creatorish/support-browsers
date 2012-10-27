jQuery Support Browser Plugin
======================
サイトなどのブラウザの対応状況をアイコンで表示できるjQueryプラグイン

デモ
------
<a href="http://dev.creatorish.com/demo/support-browsers/" target="_blank">http://dev.creatorish.com/demo/support-browsers/</a>

使い方
------

### HTMLマークアップ ###

    <ul id="support" class="support-browser">
        <li>IE6-</li>
        <li>IE7</li>
        <li>IE8</li>
        <li>IE9</li>
        <li>IE7-9</li>
        <li>Chrome</li>
        <li>Opera</li>
        <li>Firefox14</li>
        <li>Safari</li>
        <li>iPhone</li>
        <li>iPad5</li>
        <li>Android</li>
    </ul>

### JavaScript ###

    <script src="jquery.js"></script>
    <script src="support-util.js"></script>
    <script src="support-browser.js"></script>
    <script>
        $("#support").SupportBrowser();
    </script>

表記できるブラウザや端末
------

+    IE
+    Chrome
+    Opera
+    Firefox
+    Safari
+    iPhone
+    iPad
+    Android

バージョン表記
------

### バージョン指定なし ###

    <li>IE6</li>
    <li>IE7</li>

### IE6、IE7の個別バージョン指定 ###

    <li>IE6</li>
    <li>IE</li>
    <li>Chrome</li>
    <li>Firefox</li>

### IE6以上のバージョン指定 ###

    <li>IE6-</li>

### IE6以上IE8以下のバージョン指定 ###

    <li>IE6-9</li>

### iOS5以上のiPadのバージョン指定 ###

    <li>iPad5</li>

Support Utiliy JSとの連携
------

このプラグインは<a href="http://creatorish.com/lab/4151" target="http://creatorish.com/lab/4151">Support Utility JS</a>と連携することができます。

同ライブラリが読み込まれている場合、SupportBrowserは現在閲覧中のブラウザが
指定した対応ブラウザかどうかのフラグを返します。

    <script>
        var support = $("#support").SupportBrowser();
        if (!support) {
            alert("非対応ブラウザです");
        }
    </script>
    
簡易的なブラウザ対応チェックにお使いください。

アイコン
--------
同梱のアイコンはこちらを利用させていただきました
[High-res browser logos]: http://paulirish.com/2010/high-res-browser-icons/
[Icon Finder]: http://www.iconfinder.com/

アイコンを替えたい場合は、imagesフォルダにあるアイコンを上書きして差し替えてください。  
差し替えた画像の大きさが30px*30pxでないときは、CSSの以下の箇所を修正してください。

23,24行目 ― 30pxの部分を差し替えた画像の大きさに変更  
32行目 ― heightが増えた分12pxに追加します。（例:heightが40pxになったとき→22px）  
topの値はバージョン表記の位置なので、上付き、下付きなどの調整はここで行います。

ライセンス
--------
[MIT]: http://www.opensource.org/licenses/mit-license.php
Copyright &copy; 2012 creatorish.com
Distributed under the [MIT License][mit].

作者
--------
creatorish yuu  
Weblog: <http://creatorish.com>  
Facebook: <http://facebook.com/creatorish>  
Twitter: <http://twitter.jp/creatorish>