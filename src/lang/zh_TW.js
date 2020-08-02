const zh_CN = {
    'Remember me': '記住密碼',
    'Log in': '登錄',
    'Login': '登錄',
    'Submitting': '正在提交中...',
    'Login successful': '登錄成功！',
    'Login failed': '登錄失敗！',
    'Please input your Username!': '請輸入您的用戶名！',
    'Please input your Password!': '請輸入您的密碼！',
    // control
    'Overview': '概覽',
    'SSL-TLS': 'SSL-TLS',
    'Firewall': '防火牆',
    'Page Rules': '頁面規則',
    'Network': '網路',
    'Cache': '緩存',
    'Scrape Shield': '內容保護',
    'Switch successfully': '切換成功！',
    'Switching failed': '切換失敗：{msg}',
    'Add domain name successfully': '添加域名成功',
    'Failed to add domain': '添加域名失敗：{msg}',
    'Please input your Zone Name': '請輸入您的域名！',
    'Zone Name': '域名',
    'Submit': '提交',
    'Zone': '域名',
    'Status': '狀態',
    'Operation': '操作',

    'Record Type': '記錄類型',
    'Host Name': '記錄名',
    'Content': '記錄值',
    'TTL': 'TTL',
    'Add a Dnsrecord': '添加記錄',

    'Failed to load dns record': '載入dns記錄失敗！{msg}',
    'Added record successfully': '添加記錄成功！',
    'Update record successfully': '更新記錄成功',

    'Record Name': '記錄名稱',
    'Record Content': '記錄內容',
    'CDN': 'CDN',
    'Please input your Record Name': '請輸入您的記錄名稱',
    'Please input your Record Type': '請輸入您的記錄類型',
    'Please input your Record Content': '請輸入您的記錄內容',
    'Please input your TTL': '請輸入您的TTL',
    'Please input your CDN': '請輸入您的CDN',

    'Manage': '管理',
    'Update completed': '更新成功！',
    'Successfully deleted': '刪除成功！',

    'You sure you want to delete it?': '確定要刪除嗎？',
    'Yes': '確定',
    'No': '不',
    'Cancel': '取消',

    'Enable HSTS (Strict-Transport-Security)': '啟用 HSTS (Strict-Transport-Security)',
    'Provide HSTS headers for all HTTPS requests': '為所有 HTTPS 請求提供 HSTS 標頭',
    'Maximum age header (max-age)': '最長期限標頭 (max-age)',
    'Specify the duration of HSTS header caching in the browser': '指定 HSTS 標頭在瀏覽器中緩存的持續時間',
    '0 (disabled)': '0（禁用）',
    'Apply HSTS policy to subdomains (includeSubDomains)': '將 HSTS 策略應用於子域 (includeSubDomains)',
    'Every domain under this domain will inherit the same HSTS header': '此域下的每個域將繼承相同的 HSTS 標頭',
    'Warning': '警告：',
    'If any of your subdomains do not support HTTPS, these subdomains will become inaccessible.': '如果您的任何子域不支持 HTTPS，這些子域將變為不可訪問。',
    'Preloading': '預載入',
    'Allow browser to automatically preload HSTS configuration': '允許瀏覽器自動預載入 HSTS 配置',
    'Preloading may make websites that do not support HTTPS completely inaccessible.': '預載入可能會使不支持 HTTPS 的網站完全不可訪問。',
    'Sniffless header': '無嗅探標頭',
    'Send the "X-Content-Type-Options: nosniff" header to prevent Internet Explorer and Google Chrome from sniffing around in the declared Content-Type via MIME.': '發送 「X-Content-Type-Options: nosniff」 標頭，來防止 Internet Explorer 和 Google Chrome 瀏覽器通過 MIME 在聲明的 Content-Type 中四處嗅探。',
    'HTTP Strict Transport Security (HSTS)': 'HTTP 嚴格傳輸安全 (HSTS)',
    'You will need to specify the full path of the file.': '您將需要指定文件的完整路徑。',
    '<p>HTTP Strict Transport Security (HSTS) can greatly improve the security of a website. However, when enabling HSTS, keep the following important considerations in mind:</p><strong>HTTPS (SSL) must be enabled to use HSTS. </strong><ul><li> If you turn on HSTS, but your website does not support HTTPS, the browser will not accept HSTS settings. </li><li>If you enable HSTS but leave Cloudflare, you need to continue to support HTTPS through a new service provider, otherwise, visitors will not be able to access your site until you support HTTPS. </li><li>If Cloudflare’s HTTPS is turned off after HSTS is enabled and there is no valid SSL certificate on the origin server, visitors will not be able to access your website. </li><li>Note: Cloudflare’s HTTP can be disabled in several ways: masking subdomains in DNS records, "suspending" Cloudflare services, or using a custom SSL certificate that is incorrectly configured on your Cloudflare dashboard (e.g. , Invalid SSL certificate, expired certificate, or mismatched hostname). </li></ul><p>If you need to disable HTTPS on your domain, you must first disable HSTS in your Cloudflare dashboard and wait until the maximum period has passed (to ensure that every browser is aware of this change) Before you can disable HTTPS. The average maximum period is six months (you can set the maximum period in the next step). If you delete HTTPS before disabling HSTS, visitors will not be able to access your site until the maximum period is reached or you support HTTPS again. Since disabling HTTPS on HSTS-enabled websites may cause these consequences, we strongly recommend that you deploy the HTTPS service before enabling this feature</p>'
        : '<div><p>HTTP 嚴格傳輸安全 (HTTP Strict Transport Security, HSTS) 可以大幅提高網站的安全性。但是，啟用 HSTS 時，請謹記以下重要注意事項：</p><strong>必須啟用 HTTPS (SSL) 才能使用 HSTS。</strong><ul><li>如果您打開 HSTS，但您的網站不支持 HTTPS，瀏覽器將不接受 HSTS 設置。</li><li>如果您啟用了 HSTS 但離開了 Cloudflare，您需要通過新的服務提供商繼續支持 HTTPS，否則，在您支持 HTTPS 之前，訪問者將無法訪問您的站點。</li><li>如果在啟用 HSTS 後關閉了 Cloudflare 的 HTTPS，並且源伺服器上沒有有效的 SSL 證書，訪問者將無法訪問您的網站。</li><li>注意：可以通過以下幾種方法禁用 Cloudflare 的 HTTP：在 DNS 記錄中遮蔽子域，「暫停」 Cloudflare 服務，或通過您的 Cloudflare 儀錶板配置錯誤的自定義 SSL 證書（例如，無效的 SSL 證書、過期證書或不匹配的主機名）。</li></ul><p>如果您需要在域上禁用 HTTPS，必須先在您的 Cloudflare 儀錶板中禁用 HSTS，並等到最長期限過去（以確保每個瀏覽器都知道此更改），然後才能禁用 HTTPS。平均最長期限為六個月（您可以在下一步中設置最長期限）。如果您在禁用 HSTS 之前刪除了 HTTPS，訪問者將無法訪問您的網站，直至達到最長期限或您再次支持 HTTPS。由於在啟用 HSTS 的網站上禁用 HTTPS 可能會導致這些後果，因此我們強烈建議您先部署 HTTPS 服務再啟用此功能</p></div>',
    'If not configured correctly, HTTP Strict Transport Security (HSTS) may make your website inaccessible for a long time.': '如果配置不正確，HTTP 嚴格傳輸安全 (HSTS) 可能會使您的網站長時間不可訪問。',


    // cache
    'URL must not be empty': 'URL不得為空',
    'If your server is shut down, Cloudflare will use our cache to serve the static pages of your website.': '如果您的伺服器關閉，Cloudflare 將使用我們的緩存為您的網站的靜態頁面提供服務。',
    'Temporarily bypass our cache to see the changes made to your origin server in real time. <br />Note: Enabling this feature can significantly speed up the loading speed of the origin server. The development mode does not clear the cache, so you need to clear the files after the development mode expires.': '暫時繞過我們的緩存可以實時查看對您的源伺服器進行的更改。<br />注意：啟用此功能可顯著加快源伺服器的載入速度。開發模式不會清除緩存，因此需要在開發模式過期後清除文件。',
    'Custom clear': '自定義清除',
    'Clear cache': '清除緩存',

    'Clear all caches, use with caution': '清理全部緩存，慎用',
    'Are you sure you want to clear all caches': '您確定要清理全部緩存嗎？',
    'Clean up all': '清理全部',
    'Currently, wildcards are not supported when clearing a single URL. You can clear up to 30 URLs at once. Separate URLs one per line.': '目前進行單個 URL 清除時不支持通配符。您一次最多可以清除 30 個 URL。按照每行一個的方式分隔 URL。',
    'Example': '示例：',
    'Clear the cache files to force Cloudflare to extract the latest versions of these files from your web server. You can erase files selectively, or you can erase all files at the same time. <br /><strong>Note:</strong> Clearing the cache may temporarily degrade the performance of your website and increase the time it takes to load files on your origin server.'
        : '<div>清除緩存文件以強制 Cloudflare 從您的 Web 伺服器中提取這些文件的最新版本。您可以選擇性地清除文件，也可以同時清除所有文件。<br /><strong>注意：</strong>清除緩存可能會使您的網站性能暫時降級，並延長在您的源伺服器上載入文件的時間。</div>',
    'Development Mode™': '開發模式™',
    'Cache level': '緩存級別',
    'No query string': '沒有查詢字元串',
    'Ignore query string': '忽略查詢字元串',
    'Standard': '標準',
    'Determine the amount of static content you want Cloudflare to cache your website. Increasing the cache can shorten the page load time.': '確定您希望 Cloudflare 對您的網站進行緩存的靜態內容量。增加緩存可以縮短頁面載入時間。',
    'Browser cache TTL': '瀏覽器緩存 TTL',
    'Follow existing headers': '遵循現有標頭',
    'Determine how long Cloudflare instructs visitors’ browsers to cache files. During this period, the browser will load files from its local cache, thereby improving page loading speed.': '確定 Cloudflare 指示訪問者的瀏覽器緩存文件的時長。在此期間，瀏覽器會從其本地緩存中載入文件，從而提高頁面載入速度。',
    // Netword
    'Speed up your website with HTTP/2': '使用 HTTP/2 加速您的網站',
    'Use QUIC to accelerate HTTP requests. QUIC provides higher encryption and performance than TCP and TLS.': '使用 QUIC 加速 HTTP 請求，QUIC 提供比 TCP 和 TLS 更高的加密和性能。',
    'Improve the performance of clients that have previously connected to your website.': '提高之前已連接到您網站的客戶端的性能。',
    'Allow a WebSocket connection with your origin server. <br />Concurrent connection criteria applicable to your plan: low': '<div>允許與您的源伺服器建立 WebSocket 連接。<br />適用於您所用計劃的並發連接準則：low</div>',
    "Onion routing allows traffic from legitimate users on the Tor network to be routed through Cloudflare's onion service instead of exit nodes, thereby improving user privacy and achieving more detailed protection.": '洋蔥路由允許通過 Cloudflare 的洋蔥服務而不是退出節點路由來自 Tor 網路上合法用戶的流量，從而改善用戶的隱私並實現更細化的保護。',
    'Contains the country code of the visitor』s location and all requests sent to your website. <br /><strong>Note:</strong> You must retrieve the IP geolocation information from the CF-IPCountry HTTP header.': '包含訪問者位置的國家/地區代碼和所有發送到您網站的請求。<br /><strong>注意：</strong>您必須從 CF-IPCountry HTTP 標頭減檢索 IP 地理位置信息。',
    'HTTP/3 (using QUIC)': 'HTTP/3（使用 QUIC）',
    '0-RTT connection recovery': '0-RTT 連接恢復',
    'Onion routing': '洋蔥路由',
    'IP geolocation': 'IP 地理位置',

    // Operation
    'Manage DNS': '管理DNS記錄',
    'Delete': '刪除',

    //Overview
    'Development model': '開發模式',
    'Quick operation': '快速操作',
    'Under Attack Mode': 'Under Attack 模式',
    'Temporarily bypass our cache. View changes made to your source server in real time.': '暫時繞過我們的緩存。實時查看對您的源伺服器進行的更改。',
    'Close (Enterprise)': '關閉（Enterprise）',
    'Basic (essentially off)': '基本（本質上為關）',
    'low': '低',
    'medium': '中',
    'high': '高',
    'under_attack': '無敵',
    'Display JavaScript challenges when visitors visit your site.': '在訪問者訪問您的站點時顯示 JavaScript 質詢。',

    //PageRules
    'URL/description': 'URL/說明',
    'Failed to get page rules': '獲取頁面規則失敗',
    'Page rules': '頁面規則',
    '<div>Page rules are used to control which Cloudflare settings are triggered for a given URL. Only one page rule is triggered for each URL, so if you sort the page rules in order of priority, this is very useful. Please set the URL mode as specific as possible.<br />You have {number} page rules left.</div>'
        : '頁面規則用於控制針對給定的 URL 觸發哪些 Cloudflare 設置。針對每個 URL 僅觸發一個頁面規則，因此，如果您按照優先順序順序對頁面規則進行排序，則這非常有用，請儘可能將 URL 模式設置得具體些。<br />您剩下 {number} 個頁面規則。',
    // : '{number}',

    //ScrapeShield
    'Email address obfuscation technique': '電子郵件地址混淆技術',
    'Display an obfuscated email address on your website to prevent automated programs and spammers from obtaining it, while for human visitors, no visible changes will be made to the address.': '在您的網站上顯示經過模糊處理的電子郵件地址，以防止機自動程序和垃圾郵件製造者獲取該地址，而對於人類訪問者，則不會對地址進行任何可見更改。',
    'Server side exclusion': '伺服器端排除',
    'Automatically hide specific content to prevent visitors with a bad reputation from viewing': '自動隱藏特定內容以防聲譽不好的訪問者查看',
    'Hotlink protection': 'Hotlink 保護',
    'Prevent offsite links pointing to your images.': '防止站外鏈接指向您的圖像。',

    //SslTls
    'Always use HTTPS': '始終使用 HTTPS',
    'Redirect all requests using the "http" scheme to "https". This will apply to all http requests in the area.': '將所有使用方案 「http」 的請求重定向到 「https」。這將應用於該區域的所有 http 請求。',
    'Random encryption': '隨機加密',
    'Random encryption allows browsers to know that your site is provided through an encrypted connection, allowing them to benefit from the performance improvements of HTTP/2. The browser will continue to display "http" in the address bar instead of "https".': '隨機加密可以讓瀏覽器知道您的站點通過加密連接提供，從而讓它們從 HTTP/2 的性能改進中受益。瀏覽器將繼續在地址欄中顯示 「http」，而不是 「https」。',
    'Automatic HTTPS rewrite': '自動 HTTPS 重寫',
    'Automatic HTTPS rewriting helps correct mixed content by changing "http" to "https" for all resources or links on websites that can be served by HTTPS.': '自動 HTTPS 重寫通過將可以使用 HTTPS 提供服務的網站上所有資源或鏈接的 「http」 更改為 「https」 來幫助修正混合內容。',
    'Your SSL/TLS encryption mode is {mode}': '您的 SSL/TLS 加密模式為 {mode}',
    'No encryption applied': '未應用加密',
    'Close (unsafe)': '關閉（不安全）',
    'Flexible': '靈活',
    'Encrypt the traffic between the browser and Cloudflare': '加密瀏覽器與 Cloudflare 之間的流量',
    'End-to-end encryption, using self-signed certificate on the server': '端到端加密，使用伺服器上的自簽名證書',
    'Full': '完全',
    'End-to-end encryption, but a trusted CA certificate or Cloudflare Origin CA certificate is required on the server': '端到端加密，但伺服器上需要有受信任的 CA 證書或 Cloudflare Origin CA 證書',
    'Complete (strict)': '完全（嚴格）',
    'This setting was last changed': '此設置上次更改時間為',
    'Minimum TLS version': '最低 TLS 版本',
    'Only allow HTTPS connections from visitors who support the selected TLS protocol version or higher.': '僅允許來自支持所選 TLS 協議版本或更高版本的訪問者的 HTTPS 連接。',
    'Click to switch': '點擊切換',
    'Turn off HTTP Strict Transport Security (HSTS)': '關閉HTTP 嚴格傳輸安全 (HSTS)',
    'Enable HTTP Strict Transport Security (HSTS)': '啟用HTTP 嚴格傳輸安全 (HSTS)',
    'Enforce web security policies on your website.': '對您的網站強制執行 Web 安全策略。',

    // Frame
    'Console': '控制台',
    'Domain management': '域名管理',
    'Domain list': '域名列表',
    'Add domain': '添加域名',
    'Visit Author': '訪問作者博客',
    'Visit Cloudflare': '訪問 Cloudflare',
    'Sign out': '退出登錄',


    'Click close': '點擊關閉',
    'Click to open': '點擊開啟',
    'No right to operate': '無權操作',
    // <FormattedMessage id='Manage'/>

}
export default zh_CN