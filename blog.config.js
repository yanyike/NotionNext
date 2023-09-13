// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
常量博客 = {
  // 重要的 page_id！来自 https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5 的重复模板
  NOTION_PAGE_ID：
        process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',
  PSEUDO_STATIC：process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以.html结尾。
  NEXT_REVALIDATE_SECOND：process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5、 // 更新内容秒服务器间隔单位(秒)；即每个页面有5个的纯静态期、此期间无论多少次访问都不会抓取概念数据；调大该值有助于节省Vercel资源、同时提升访问速度，但同时也导致文章更新出现延迟。
  主题：process.env.NEXT_PUBLIC_THEME || 'simple', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog ，简单的
  THEME_SWITCH：process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG：process.env.NEXT_PUBLIC_LANG || 'zh-CN', // 例如 'zh-CN','en-US' 请参阅 /lib/lang.js 了解更多信息。
  SINCE: 2021, // 例如，如果将此字段留空，则将使用当前年份。
  外观：process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // 浅日间模式 ， 深夜模式， auto 根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME：process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // 夜间模式起至时间，假时关闭根据时间自动切换夜间模式

  // 3.14.1版本后，欢迎在此配置，英文逗号隔开，即可支持多个欢迎语打字效果。
  GREETING_WORDS：process.env.NEXT_PUBLIC_GREETING_WORDS || '嗨，欢迎来到我的个人网站🎉。',

  CUSTOM_MENU：process.env.NEXT_PUBLIC_CUSTOM_MENU || ture, // 支持菜单类型，从3.12.0版本开始，各主题将逐步支持灵活的二级菜单配置，替代了原来的页面类型，此配置是尝试功能、默认关闭。

  作者：process.env.NEXT_PUBLIC_AUTHOR || ' 闫也', // 您的昵称 例如 tangly1024
  生物：process.env.NEXT_PUBLIC_BIO || '一个普通的干饭人🍚', // 作者简介
  链接：process.env.NEXT_PUBLIC_LINK || 'https://yanyike.cc', // 网站地址
  关键词：process.env.NEXT_PUBLIC_KEYWORD || '概念，博客', // 网站关键词 英文逗号隔开

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL：process.env.NEXT_PUBLIC_CONTACT_EMAIL || ' Yecoooooemail@gmail.com', // 邮箱地址 Email@tangly1024.com
  CONTACT_WEIBO：process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER：process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的twitter个人主页
  CONTACT_GITHUB：process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_TELEGRAM：process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || 'https://t.me/yanyike', // 你的电报地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN：process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn首页
  CONTACT_INSTAGRAM：process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的 Instagram 地址
  CONTACT_BILIBILI：process.env.NEXT_PUBLIC_CONTACT_BILIBILI || 'https://m.bilibili.com/space/269960398', // B站主页
  CONTACT_YOUTUBE：process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || 'https://youtube.com/@yanyike?si=MpFA2EmdepXU0yQL', // Youtube主页

  NOTION_HOST：process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // 概念域名，您可以选择用自己的域名进行反向代理，如果不修改什么是反向代理，请勿这样做

  BLOG_FAVICON：process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // 博客favicon配置，默认使用/public/favicon.ico，支持在线图片，如https://img.imesong.com/favicon.png

  // 开始************网站字体********************

  FONT_STYLE：process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线：参考https://www.jianshu.com/p/55e410bd2115
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL：[
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS：[
    // '"LXGW文凯"',
    '“萍芳SC”',
    '-苹果系统',
    'BlinkMacSystemFont',
    '“Hiragino Sans GB”'，
    '“微软雅黑”',
    '“Segoe UI 表情符号”',
    '“Segoe UI 符号”',
    '“Segoe UI”'，
    '“Noto Sans SC”'，
    'HarmonyOS_Regular',
    '“Helvetica Neue”'，
    '黑体',
    '“来源 Han Sans SC”',
    '阿里尔',
    '无衬线字体'，
    ''苹果色表情符号''
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  字体衬线：[
    // '"LXGW文凯"',
    '苦的'，
    '“诺托衬线 SC”'，
    '模拟太阳',
    '“英语字体格式一种”'，
    《时代》，
    '衬线',
    '“Segoe UI 表情符号”',
    '“Segoe UI 符号”',
    ''苹果色表情符号''
  ],
  FONT_AWESOME：process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // 结束************网站字体********************
  CAN_COPY：process.env.NEXT_PUBLIC_CAN_COPY || true, // 默认是否允许允许复制页面内容，如果设置为false、则全栈禁止复制内容。
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU：process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // 自定义右键菜单，覆盖系统菜单

  // 外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // 例如 ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // 例如 ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否货物(左变右,右变左) 已支持主题: hexo next Medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE：假，

  // 一个小插件展示你的 facebook 粉丝页面~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE：process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 边栏 Facebook Page widget 的标题栏，填''则无标题栏 例如 FACEBOOK 粉丝团'
  FACEBOOK_PAGE：process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook 页面的链接 例如 https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID：process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 来启用 Messenger 聊天功能
  FACEBOOK_APP_ID：process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 来启用Messenger聊天功能 获取：https://developers.facebook.com/

  BEI_AN：process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号闽ICP备XXXXXXX

  // 开始********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH：process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 代码块默认主题
  PRISM_THEME_SWITCH：process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深度模式代码主题切换；开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH：process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH：process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深度模式主题

  CODE_MAC_BAR：process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS：process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 是否显示行号
  CODE_COLLAPSE：process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 是否折叠代码框
  // END********代码相关********

  // 美人鱼图表CDN
  MERMAID_CDN：process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // 二维码CDN
  QR_CODE_CDN：process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // 使用十六进制值，不要忘记 '#' 例如 #ffefc
  BACKGROUND_DARK: '#000000', // 使用十六进制值，不要忘记'#'
  SUB_PATH: '', // 将其留空，除非您想部署在文件夹中

  POST_SHARE_BAR_ENABLE：process.env.NEXT_PUBLIC_POST_SHARE_BAR || ' true', // 文章分享功能，将在底部显示一条分享条
  POSTS_SHARE_SERVICES：process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服务，按顺序显示，逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare, okshare、tumblr、livejournal、mailru、viber、工作场所、口袋、instapaper、hatena

  POST_URL_PREFIX：process.env.NEXT_PUBLIC_POST_URL_PREFIX || '文章'，
  // POST类型文章的默认路径导出，例如默认POST类型的路径是 /article/[slug]
  // 如果该配置为 '' 空，则文章将没有远端路径，使用场景：希望文章远端路径为 /post 的情况支持多级
  // 支持类似WP可自订文章链接格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先实作 %year%/%month%/%day%
  // 例：如想链接改成外部文章+时间记，可变数量： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE：process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW：process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', // 是否在列表加载文章预览
  POST_PREVIEW_LINES: 12, // 预览博客行数
  POST_RECOMMEND_COUNT: 6, // 推荐文章数量
  POSTS_PER_PAGE: 12, // 每页帖子数
  POSTS_SORT_BY：process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 '日期'按时间,'notion'由notion控制

  ALGOLIA_APP_ID：process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY：process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY：process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX：process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个索引数据库
  // ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在构建时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_DISABLE_GALLERY_CLICK：process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, //画册视图禁止点击，方便在友链页面的画册插入链接

  // ********动态效果相关********
  // 鼠标点击烟花特效
  烟花：process.env.NEXT_PUBLIC_FIREWORKS || false, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  烟花颜色：[
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 樱花飘落效果
  樱花：process.env.NEXT_PUBLIC_SAKURA || false, // 开关
  // 漂浮线段效果
  嵌套：process.env.NEXT_PUBLIC_NEST || false, // 开关
  // 动态彩带效果
  FLUTTERINGRIBBON：process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 开关
  // 静态彩带效果
  功能区：process.env.NEXT_PUBLIC_RIBBON || false, // 开关
  // 星空雨效果黑夜模式才会生效
  STARRY_SKY：process.env.NEXT_PUBLIC_STARRY_SKY || false, // 开关

  // ********相关挂件组件********
  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID：process.env.NEXT_PUBLIC_CHATBASE_ID || 无效的，
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED：process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL：process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID：process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID

  // 悬浮挂件
  WIDGET_PET：process.env.NEXT_PUBLIC_WIDGET_PET || false, // 是否显示宠物挂件
  WIDGET_PET_LINK：
        process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
        'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu /live2d-widget-models
  WIDGET_PET_SWITCH_THEME：process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER：process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE：process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，再打开自动播放，就会隐藏类似背景音乐的方式播放，无法取消和暂停
  音乐播放器自动播放：
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，但是自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE：process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用lrc歌词，1：lrc格式的字符串，3：lrc文件url）（前提是有配置歌词路径，对会议无效）
  MUSIC_PLAYER_CDN_URL：
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
        'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER：process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序列表，随机随机
  MUSIC_PLAYER_AUDIO_LIST：[
    // 示例音乐列表。除以下配置外，森林配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      艺术家：“Falcom Sound Team jdk”，
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      覆盖：
            'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      艺术家：“Falcom Sound Team jdk”，
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      覆盖：
            'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING：process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启MetingJS，从平台获取歌单。会覆盖自定义的MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER：
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[网易、腾讯、酷狗、虾米、百度]
  MUSIC_PLAYER_METING_ID：
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 回复的 id
  MUSIC_PLAYER_METING_LRC_TYPE：
        process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用lrc歌词，1：lrc格式的字符串，3：lrc文件url）

  // ********相关挂件组件********
  // ----> 评论互动可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  // artalk 评论插件
  COMMENT_ARTALK_SERVER：process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert地址 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS：process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS：process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || 'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // 推酷
  COMMENT_TWIKOO_ENV_ID：process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO 框架地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE：process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL：process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.min.js', // twikoo客户端cdn

  // 话语
  COMMENT_UTTERRANCES_REPO：
        process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名称，例如我是 'tangly1024/NotionNext'；更多文档参考 https://utteranc.es/

  // giscus @参见 https://giscus.app/
  COMMENT_GISCUS_REPO：process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的 Github 仓库名称 例如 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID：process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你看到的Github Repo ID 例如（设置完成giscus即可）
  COMMENT_GISCUS_CATEGORY_ID：
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions内的Category ID (设定完成giscus看到即可)
  COMMENT_GISCUS_MAPPING：
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github讨论使用哪种方式来标定文章，默认'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED：
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否开启文章表情符号 '1' 开启 "0" 关闭默认开启
  COMMENT_GISCUS_EMIT_METADATA：
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取元数据 '1' 开启 '0' 关闭默认关闭
  COMMENT_GISCUS_INPUT_POSITION：
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 发表留言位置 'bottom' 尾部 'top' 顶部, 预设 'bottom'
  COMMENT_GISCUS_LANG：process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 语言 例如 'en', 'zh-TW', 'zh-CN', 预设 'en'
  COMMENT_GISCUS_LOADING：
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 加载是否渐进式加载，默认 'lazy'
  COMMENT_GISCUS_CROSSORIGIN：
        process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨网域，默认 'anonymous'

  COMMENT_CUSDIS_APP_ID：process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 参见 https://cusdis.com/
  COMMENT_CUSDIS_HOST：
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // 数据主机，如果您使用自托管版本，请更改此设置
  COMMENT_CUSDIS_SCRIPT_SRC：
        process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
        '/js/cusdis.es.js', // 如果您使用的是自托管版本，请更改此设置

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO：process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的 Github 仓库名称，例如 'NotionNext'
  COMMENT_GITALK_OWNER：process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 你的用户名 例如 tangly1024
  COMMENT_GITALK_ADMIN：process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理员用户名、一般是自己 例如 'tangly1024'
  COMMENT_GITALK_CLIENT_ID：
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // 例如20位ID，在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET：
        process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // 例如40位ID，在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL：process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL：process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM：process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室参见https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID：process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID：process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN：process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID：process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id -%E5%92%8C-应用程序密钥
  COMMENT_VALINE_APP_KEY：process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS：process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', //配置适用于国内自定义域名用户，海外版本会自动检测（无需手动填写）的 @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER：
        process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论 https://github.com/DesertsP/Valine-Admin 其次查看评论，以及邮件通知，垃圾评论过滤等功能

  COMMENT_WALINE_SERVER_URL：process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 请配置完整的 Waline 评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT：process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下面COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面链接
  // HOSTNAME: Web提及绑定的网域通常，即所在站网址
  // TWITTER_USERNAME：评论显示区域需要的资讯
  // TOKEN: 网页提及的API token
  COMMENT_WEBMENTION：{
    启用：process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || 错误的，
    身份验证：process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
    主机名：process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
    TWITTER_USERNAME：process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
    令牌：process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || ”
  },

  // <---- 评论插件

  // ----> 站点统计
  ANALYTICS_VERCEL：process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE：process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问量参见http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID：process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // 例如导出要百度填写统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID：process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', //导出要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID：process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // Google Analytics 的 ID 例如：G-XXXXXXXXXX

  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER：process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // 例如 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER：process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // 例如 https://ackee.tangly1024.com ，不要以斜杠结尾
  ANALYTICS_ACKEE_DOMAIN_ID：process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // 例如 '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION：
        process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // 删除该值或替换为您自己的google站点验证码

  SEO_BAIDU_SITE_VERIFICATION：
        process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // 删除该值或替换为您自己的google站点验证码

  // <---- 站点统计

  // START----> 相关相关

  // 谷歌广告
  ADSENSE_GOOGLE_ID：process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告 ID 例如 ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST：process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE：process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '3806269138', // Google AdScene>广告>按单元广告>新建文章内嵌广告粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW：process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '1510444138', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE：process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '4980048999', // Google AdScene> 广告> 按单元广告> 新建广告
  ADSENSE_GOOGLE_SLOT_AUTO：process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '8807314373', // Google AdScene>广告>按单元广告>新建展示广告（自动广告）

  // 万维广告
  AD_WWADS_ID：process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT：process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // 是否开启WWADS广告发光插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads

  // END<---- 相关

  // 自定义配置概念数据库字段名
  NOTION_PROPERTY_NAME：{
    密码：process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || '密码'，
    类型：process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 当类型文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当类型文章类型与此值相同时，为单页。
    类型通知：
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当类型文章类型与此值相同时，为公告。
    type_menu：process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当输入文章类型与此值相同时，为菜单。
    类型子菜单：
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当类型文章类型与此值相同时，为子菜单。
    标题：process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    状态：process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || '地位'，
    状态发布：
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    状态不可见：
          process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ，除其他页面状态不会显示在博客上
    摘要：process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || '概括'，
    slug：process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || '蛞蝓',
    类别：process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || '类别'，
    日期：process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || '日期'，
    标签： process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || '标签',
    图标：process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || '图标'
  },

  // RSS 订阅
  ENABLE_RSS：process.env.NEXT_PUBLIC_ENABLE_RSS || true, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID：process.env.MAILCHIMP_LIST_ID || null, //开启mailichimp邮件订阅客户列表ID ，具体使用方法参见文档
  MAILCHIMP_API_KEY：process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // 作废配置
  头像：process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  标题：process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // 站点标题，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE：
        process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图，会被概念中的封面图覆盖，若无封面图使用代码中的 /public/bg_image.jpg 文件
  描述：
        process.env.NEXT_PUBLIC_DESCRIPTION || '欢迎来到我的博客', // 站点描述，被概念中的页面描述覆盖

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER：process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', //懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE：process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片其他默认Notion:(https://notion.so/ images/xx) ，亚马逊(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW：process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影

  // 开发相关
  NOTION_ACCESS_TOKEN：process.env.NOTION_ACCESS_TOKEN || '', // 如果您不想公开数据库，则很有用
  调试：process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE：process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build', // 缓存在开发调试和备份过程中切换开关，正式部署开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === '生产', // 区分开发环境和生产环境（参考：https://vercel.com/docs/environment-variables#system-environment-variables） isProd: process.env .VERCEL_ENV === '生产' // 区分开发和生产环境（参考：https://vercel.com/docs/environment-variables#system-environment-variables）
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本号
}

module.exports = 博客
