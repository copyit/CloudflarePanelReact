const ja_JP = {
    "Remember me": "パスワードを覚えてください",
    "Log in": "ログイン",
    "Login": "ログイン",
    "Submitting": "提出中です",
    "Login successful": "ログイン成功！",
    "Login failed": "ログイン失敗！",
    "Please input your Username!": "ユーザー名を入力してください。",
    "Please input your Password!": "パスワードを入力してください。",
    "Overview": "概要",
    "SSL-TLS": "SSL-TLS",
    "Firewall": "防火壁",
    "Page Rules": "ページのルール",
    "Network": "ネットワーク",
    "Cache": "キャッシュ",
    "Scrape Shield": "内容の保護",
    "Switch successfully": "切り替え成功！",
    "Switching failed": "切替失敗:{msg}",
    "Add domain name successfully": "ドメインの追加に成功しました",
    "Failed to add domain": "ドメイン名の追加に失敗しました:{msg}",
    "Please input your Zone Name": "ドメイン名を入力してください。",
    "Zone Name": "ドメイン名",
    "Submit": "送信",
    "Zone": "ドメイン名",
    "Status": "状態",
    "Operation": "操作",
    "Record Type": "レコードの種類",
    "Host Name": "レコード名",
    "Content": "レコード値",
    "TTL": "TT",
    "Add a Dnsrecord": "レコードを追加",
    "Failed to load dns record": "dnsレコードの読み込みに失敗しました。{msg}",
    "Added record successfully": "レコードの追加に成功しました。",
    "Update record successfully": "記録の更新に成功しました",
    "Record Name": "レコード名",
    "Record Content": "内容を記録する",
    "CDN": "CDN",
    "Please input your Record Name": "レコード名を入力してください。",
    "Please input your Record Type": "記録の種類を入力してください。",
    "Please input your Record Content": "記録内容を入力してください。",
    "Please input your TTL": "TTLを入力してください",
    "Please input your CDN": "CDNを入力してください",
    "Manage": "管理",
    "Update completed": "更新成功！",
    "Successfully deleted": "削除成功！",
    "You sure you want to delete it?": "本当に削除しますか？",
    "Yes": "を選択します",
    "No": "いいえ、",
    "Cancel": "キャンセル",
    "Enable HSTS (Strict-Transport-Security)": "HSTSを有効にします。",
    "Provide HSTS headers for all HTTPS requests": "すべてのHTTPS要求にHSTSヘッダを提供する。",
    "Maximum age header (max-age)": "最長期限ヘッダ（max-age）",
    "Specify the duration of HSTS header caching in the browser": "HSTSヘッダがブラウザにキャッシュされる持続時間を指定します。",
    "0 (disabled)": "0(無効)",
    "Apply HSTS policy to subdomains (includeSubDomains)": "HSTSポリシーをサブドメインに適用する。",
    "Every domain under this domain will inherit the same HSTS header": "このドメインの各ドメインは同じHSTSヘッダを継承します。",
    "Warning": "警告:",
    "If any of your subdomains do not support HTTPS, these subdomains will become inaccessible.": "あなたのサブドメインがHTTPSをサポートしていない場合、これらのサブドメインはアクセス不可になります。",
    "Preloading": "プリロード",
    "Allow browser to automatically preload HSTS configuration": "ブラウザがHSTS設定を自動でプリロードすることを許可します。",
    "Preloading may make websites that do not support HTTPS completely inaccessible.": "プリローディングはHTTPSをサポートしていないウェブサイトを完全にアクセスできなくする可能性があります。",
    "Sniffless header": "嗅覚なし",
    "Send the \"X-Content-Type-Options: nosniff\" header to prevent Internet Explorer and Google Chrome from sniffing around in the declared Content-Type via MIME.": "「X-Connect-Type-Options:nosniff」のヘッダを送信して、Internet ExplorerとGoogle ChromeブラウザがMIMEを通じて声明のContent-Typeの中であちこち嗅ぎ分けることを防止します。",
    "HTTP Strict Transport Security (HSTS)": "HTTP厳格伝送安全（HSTS）",
    "You will need to specify the full path of the file.": "ファイルのフルパスを指定する必要があります。",
    "<p>HTTP Strict Transport Security (HSTS) can greatly improve the security of a website. However, when enabling HSTS, keep the following important considerations in mind:</p><strong>HTTPS (SSL) must be enabled to use HSTS. </strong><ul><li> If you turn on HSTS, but your website does not support HTTPS, the browser will not accept HSTS settings. </li><li>If you enable HSTS but leave Cloudflare, you need to continue to support HTTPS through a new service provider, otherwise, visitors will not be able to access your site until you support HTTPS. </li><li>If Cloudflare’s HTTPS is turned off after HSTS is enabled and there is no valid SSL certificate on the origin server, visitors will not be able to access your website. </li><li>Note: Cloudflare’s HTTP can be disabled in several ways: masking subdomains in DNS records, \"suspending\" Cloudflare services, or using a custom SSL certificate that is incorrectly configured on your Cloudflare dashboard (e.g. , Invalid SSL certificate, expired certificate, or mismatched hostname). </li></ul><p>If you need to disable HTTPS on your domain, you must first disable HSTS in your Cloudflare dashboard and wait until the maximum period has passed (to ensure that every browser is aware of this change) Before you can disable HTTPS. The average maximum period is six months (you can set the maximum period in the next step). If you delete HTTPS before disabling HSTS, visitors will not be able to access your site until the maximum period is reached or you support HTTPS again. Since disabling HTTPS on HSTS-enabled websites may cause these consequences, we strongly recommend that you deploy the HTTPS service before enabling this feature</p>": "＜div＞＜p＞HTTP厳格トランスポートセキュリティ（HTTP Strict Transport Security、HSTS）は、サイトのセキュリティを大幅に向上させることができます。ただし、HSTSを有効にするには、以下の重要な注意事項をメモしてください。</strong><ul><li>HSTSを開けば、あなたのサイトはHTTPSをサポートしていません。ブラウザはHSTSの設定を受け付けません。</li><li>HSTSを有効にしてもCloudflareを離れたら、新しいサービスプロバイダを通じてHTTPSをサポートし続ける必要があります。そうでなければ、HTTPSをサポートする前に、訪問者はあなたのサイトにアクセスできなくなります。</li><li>HSTSを有効にした後、CloudflareのHTTPSをオフにし、ソースサーバに有効なSSL証明書がないと、訪問者はあなたのウェブサイトにアクセスできません。＜li＞＜li＞注意：CloudflareのHTTPは、DNS記録において、サブドメインを隠し、“一時停止”Cloudflareサービス、またはCloudflareメータボードを介して、誤ったカスタムSSL証明書（例えば、無効なSSL証明書、期限切れ証明書、または不一致のホスト名）を設定することができます。</li></ul><p>もしあなたがドメイン上でHTTPSを無効にする必要があるなら、まずあなたのCloudflareメーターボードの中でHSTSを無効にして、そして最長期限が過ぎたら（各ブラウザがこの変更を知っていることを確認するため）、HTTPSを無効にすることができます。平均最長期間は6ヶ月です。HSTSを無効にする前にHTTPSを削除したら、訪問者はあなたのウェブサイトにアクセスできなくなります。最長期限に達するまでは、またHTTPSをサポートします。HSTSを有効にするウェブサイトでHTTPSを無効にすると、これらの結果につながる可能性があるので、HTTPSサービスを先に展開してからこの機能を有効にすることを強く推奨します。",
    "If not configured correctly, HTTP Strict Transport Security (HSTS) may make your website inaccessible for a long time.": "正しく設定されていない場合、HTTPの厳密なトランスポート安全（HSTS）は、ウェブサイトに長時間アクセスできなくなる可能性があります。",
    "URL must not be empty": "URLは空にしてはいけません",
    "If your server is shut down, Cloudflare will use our cache to serve the static pages of your website.": "サーバがオフになったら、Cloudflareは私たちのキャッシュを使ってあなたのウェブサイトの静止ページにサービスを提供します。",
    "Temporarily bypass our cache to see the changes made to your origin server in real time. <br />Note: Enabling this feature can significantly speed up the loading speed of the origin server. The development mode does not clear the cache, so you need to clear the files after the development mode expires.": "一時的にキャッシュを避けて、ソースサーバの変更をリアルタイムで確認できます。<br/>この機能を有効にすると、ソースサーバのロード速度が著しく速くなります。開発モードはキャッシュをクリアしませんので、開発モードが切れたらファイルをクリアする必要があります。",
    "Custom clear": "カスタムクリア",
    "Clear cache": "キャッシュをクリア",
    "Clear all caches, use with caution": "キャッシュを全部整理して、慎重に使います。",
    "Are you sure you want to clear all caches": "本当にキャッシュを全部整理しますか？",
    "Clean up all": "全部整理します",
    "Currently, wildcards are not supported when clearing a single URL. You can clear up to 30 URLs at once. Separate URLs one per line.": "現在は単一のURLクリアを行っていますが、ワイルドカードはサポートされていません。一回で最大30個のURLをクリアできます。URLは行ごとに一つずつ区切られます。",
    "Example": "例:",
    "Clear the cache files to force Cloudflare to extract the latest versions of these files from your web server. You can erase files selectively, or you can erase all files at the same time. <br /><strong>Note:</strong> Clearing the cache may temporarily degrade the performance of your website and increase the time it takes to load files on your origin server.": "＜div＞キャッシュファイルをクリアして、Cloudflareを強制的にWebサーバからこれらのファイルの最新バージョンを抽出します。ファイルを選択的にクリアすることもできますし、すべてのファイルを同時にクリアすることもできます。<br/><strong>キャッシュをクリアすると、ウェブサイトの機能が一時的に低下し、ソースサーバにファイルをロードする時間が長くなります。</div>",
    "Development Mode™": "開発モード™",
    "Cache level": "キャッシュレベル",
    "No query string": "クエリー文字列がありません。",
    "Ignore query string": "クエリー文字列を無視する",
    "Standard": "標準",
    "Determine the amount of static content you want Cloudflare to cache your website. Increasing the cache can shorten the page load time.": "Cloudflareがあなたのサイトをキャッシュする静的な容量を指定します。キャッシュを追加するとページの読み込み時間が短縮されます。",
    "Browser cache TTL": "ブラウザキャッシュTTL",
    "Follow existing headers": "既存のヘッダに従う",
    "Determine how long Cloudflare instructs visitors’ browsers to cache files. During this period, the browser will load files from its local cache, thereby improving page loading speed.": "Cloudflareは、訪問者のブラウザキャッシュファイルの時間を指定します。この期間中は、ブラウザがローカルキャッシュからファイルを読み込み、ページの読み込み速度を向上させます。",
    "Speed up your website with HTTP/2": "HTTP/2を使ってあなたのサイトを加速します。",
    "Use QUIC to accelerate HTTP requests. QUIC provides higher encryption and performance than TCP and TLS.": "QUICCを用いてHTTP要求を加速し、QUICCはTCPとTLSより高い暗号化と性能を提供する。",
    "Improve the performance of clients that have previously connected to your website.": "ウェブサイトに接続されているクライアントの性能を向上させます。",
    "Allow a WebSocket connection with your origin server. <br />Concurrent connection criteria applicable to your plan: low": "＜div＞あなたのソースサーバとWebSocket接続を確立することができます。<br/>あなたの計画の同時接続基準に適用されます。low</div>",
    "Onion routing allows traffic from legitimate users on the Tor network to be routed through Cloudflare's onion service instead of exit nodes, thereby improving user privacy and achieving more detailed protection.": "タマネギルートは、Cloudflareのタマネギサービスによって、ノードを終了してTorネットワーク上の合法的なユーザからのトラフィックをルーティングするのではなく、Cloudflareのサービスによって、ユーザのプライバシーを改善し、より詳細な保護を実現することができる。",
    "Contains the country code of the visitor’s location and all requests sent to your website. <br /><strong>Note:</strong> You must retrieve the IP geolocation information from the CF-IPCountry HTTP header.": "訪問者の位置を含む国/地域コードとあなたのサイトに送るすべての要請。<br/><strong>注意：<strong>CF-IPCountry HTTPヘッダからIP地理位置情報を検索しなければなりません。",
    "HTTP/3 (using QUIC)": "HTTP/3（QUICCを使用）",
    "0-RTT connection recovery": "0-RTT接続復旧",
    "Onion routing": "たまねぎルート",
    "IP geolocation": "IP地理位置",
    "Manage DNS": "DNSレコードの管理",
    "Delete": "削除",
    "Development model": "開発モード",
    "Quick operation": "クイック操作",
    "Under Attack Mode": "Under Attackモード",
    "Temporarily bypass our cache. View changes made to your source server in real time.": "私たちのキャッシュを避けてください。ソースサーバの変更をリアルタイムで確認します。",
    "Close (Enterprise)": "クローズ(Enterprise)",
    "Basic (essentially off)": "基本（本質的には関係）",
    "low": "低い",
    "medium": "にある",
    "high": "高さ",
    "under_attack": "無敵",
    "Display JavaScript challenges when visitors visit your site.": "訪問者があなたのサイトに訪問する時、JavaScriptの質問を表示します。",
    "URL/description": "URL/説明",
    "Failed to get page rules": "ページルールの取得に失敗しました。",
    "Page rules": "ページのルール",
    "<div>Page rules are used to control which Cloudflare settings are triggered for a given URL. Only one page rule is triggered for each URL, so if you sort the page rules in order of priority, this is very useful. Please set the URL mode as specific as possible.<br />You have {number} page rules left.</div>": "ページルールは、所定のURLに対してどのCloudflare設定をトリガするかを制御するために使用されます。各URLについてはページルールが1つしか触発されませんので、優先順位順にページルールを並べ替えるととても役立ちます。URLモードをできるだけ具体的に設定してください。<br/>ページルールを残しています。",
    "Email address obfuscation technique": "メールアドレスの紛らわしい技術",
    "Display an obfuscated email address on your website to prevent automated programs and spammers from obtaining it, while for human visitors, no visible changes will be made to the address.": "あなたのサイトには、マシンの自動プログラムや迷惑メールの作成者がこのアドレスを取得するのを防ぐために、ぼかし処理された電子メールアドレスが表示されますが、人間の訪問者に対しては、アドレスは表示されません。",
    "Server side exclusion": "サーバから削除",
    "Automatically hide specific content to prevent visitors with a bad reputation from viewing": "特定の内容を自動的に隠して、評判の悪い訪問者の確認を防ぐ。",
    "Hotlink protection": "Hotlink保護",
    "Prevent offsite links pointing to your images.": "サイト外のリンクがあなたの画像を指すことを防止します。",
    "Always use HTTPS": "常にHTTPSを使う",
    "Redirect all requests using the \"http\" scheme to \"https\". This will apply to all http requests in the area.": "すべての使用スキーム「http」の要求を「https」にリダイレクトする。これはこの領域のすべてのhttp要求に適用される。",
    "Random encryption": "ランダム暗号化",
    "Random encryption allows browsers to know that your site is provided through an encrypted connection, allowing them to benefit from the performance improvements of HTTP/2. The browser will continue to display \"http\" in the address bar instead of \"https\".": "ランダム暗号化は、あなたのサイトが暗号化された接続によって提供されていることをブラウザに知らせ、HTTP/2の性能向上から利益を得ることができます。ブラウザは引き続きアドレスバーに「http」ではなく「https」を表示します。",
    "Automatic HTTPS rewrite": "自動HTTPS書き換え",
    "Automatic HTTPS rewriting helps correct mixed content by changing \"http\" to \"https\" for all resources or links on websites that can be served by HTTPS.": "自動HTTPS書き換えは、HTTPSを利用してサービスを提供できるサイト上のすべてのリソースまたはリンクの「http」を「https」に変更することで、ミックスコンテンツの修正を助ける。",
    "Your SSL/TLS encryption mode is {mode}": "あなたのSSL/TLS暗号化モードは{mode}です。",
    "No encryption applied": "暗号化が適用されていません",
    "Close (unsafe)": "閉じる(安全でない)",
    "Flexible": "機敏である",
    "Encrypt the traffic between the browser and Cloudflare": "ブラウザとCloudflareの流量を暗号化します。",
    "End-to-end encryption, using self-signed certificate on the server": "エンド暗号化を行い、サーバ上の自署名証明書を使用します。",
    "Full": "まったく",
    "End-to-end encryption, but a trusted CA certificate or Cloudflare Origin CA certificate is required on the server": "エンド暗号化が必要ですが、サーバー上で信頼されているCA証明書またはCloudflare Origin CA証明書が必要です。",
    "Complete (strict)": "まったく",
    "This setting was last changed": "この設定の最後の変更時間は",
    "Minimum TLS version": "最低TLSバージョン",
    "Only allow HTTPS connections from visitors who support the selected TLS protocol version or higher.": "選択されたTLSプロトコルのバージョンまたはより高いバージョンをサポートする訪問者からのHTTPS接続のみが許可されます。",
    "Click to switch": "クリックで切り替え",
    "Turn off HTTP Strict Transport Security (HSTS)": "HTTPをオフにして、厳格な転送安全（HSTS）",
    "Enable HTTP Strict Transport Security (HSTS)": "HTTPの厳密な伝送安全（HSTS）を有効にします。",
    "Enforce web security policies on your website.": "あなたのウェブサイトに強制的にWebセキュリティポリシーを実行します。",
    "Console": "コンソール",
    "Domain management": "ドメイン管理",
    "Domain list": "ドメイン名のリスト",
    "Add domain": "ドメイン名を追加",
    "Visit Author": "作者のブログにアクセス",
    "Visit Cloudflare": "Cloudflareにアクセス",
    "Sign out": "ログアウト",
    "Click close": "クリックして閉じる",
    "Click to open": "クリックして開く",
    "No right to operate": "操作権がない"
}
export default ja_JP