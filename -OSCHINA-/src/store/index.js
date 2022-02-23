import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sharecount:12,
    storecount:12,
    article:{
      keyword:"Visual Studio Code",
      title:{url:'https://www.oschina.net/news/141711/python-programming-in-vs-code-is-now-faster',name:'微软：VS Code 是性能和体验最好的 Python 代码编辑器'},
      body:[
        "微软已发布2021年5月针对 Visual Studio Code 的 Python 扩展更新，此次更新引入了 Pylance 作为 Python 的默认语言服务器和用于 Python 脚本的自动重载调试器，以及提升启动速度。据介绍，Windows 和 macOS 用户的启动时间缩短了 10％，Linux 用户的启动时间缩短了 20％。",
        '<a href="https://www.oschina.net/news/116917/microsofts-pylance-vs-code-python" target="_blank">Pylance</a> 是微软开发的 Python 语言支持扩展，可提供智能建议和类型信息，旨在帮助开发者更快速地编写代码。Pylance 基于微软的 Python Pyright 静态类型检查工具，该工具于2019年发布，可帮助开发者快速清理并自动补全代码片段。',
        '<img alt="" src="https://oscimg.oschina.net/oscnet/up-5b490485c4af0c11b45a784422c9b6bb52d.png" class="zoom-in-cursor">',
        'Visual Studio 的 Pylance 和 Python 项目经理 Savannah Ostrowski<a href="https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fwww.tectalk.co%2Fmicrosoft-python-programming-in-visual-studio-code-is-now-faster-and-smarter-than-ever%2F" target="_blank">表示</a>，VS Code 的 Python 扩展是最受欢迎的扩展，此次升级对 Pylance 的支持提供了他们认为是<strong> VS Code 有史以来性能最强、用户最友好的 Python 编辑体验</strong>',
        'Ostrowski 还说到，<a href="https://www.oschina.net/news/116917/microsofts-pylance-vs-code-python" target="_blank">自去年推出该插件以来，</a> 微软一直在通过 Pylance 扩展来增强对 Python 语言的支持。微软一直在致力于为开发者提供更好的语言支持，无论他们使用的是 Pylance 或是其他语言服务器，并且计划在未来集中精力为用户提供开源的语言支持选项。他还提到微软已投入资源来标准化语言服务器（通过语言服务器协议）与 Python 扩展进行通信的方式。',
        '此外，VS Code 的 Python 扩展在仅支持 Django 和 Flask 之后，新的调试器为 Python 脚本带来了实时重载功能。这意味着即使调试器遇到断点，也可应用对代码的更改，而无需重新加载调试器以使它们生效。'

      ],
      time:"2021-05-16",
      author:"局长",
      authorurl:"https://my.oschina.net/hardbone"
    },
    gitbox:{
      title:{
        name:"Microsoft/vscode",
        url:"https://gitee.com/microsoft/vscode",
      },
      body:"Visual Studio Code 是一个运行于 OS X，Windows 和 Linux 之上的，针对于编写现代 Web 和云应用的跨平台编辑器",
      recenthand:[
        {id:"a699ffae",name:"Reenable notebook smoke test",url:"https://gitee.com/login?redirect_to_url=%2Fmicrosoft%2Fvscode%2Fcommit%2Fa699ffaee62010c4634d301da2bbdb7646b8d1da",
        mailtoname:"Rob Lourens",mailtourl:"mailto:roblourens@gmail.com",time:"2021-02-13 15:48"},
        {id:"3a442c69",name:"Fix broken markdown cells",url:"https://gitee.com/login?redirect_to_url=%2Fmicrosoft%2Fvscode%2Fcommit%2F3a442c6939b2515fc8109f90886ee6fcae193137",
        mailtoname:"Rob Lourens",mailtourl:"mailto:roblourens@gmail.com",time:"2021-02-13 15:40"},
        {id:"992cf6bd",name:"Update node-fetch (#116560)",url:"https://gitee.com/microsoft/vscode/commit/992cf6bd44d89f85b50199d52ff34ca14fd5358f",
        mailtoname:"Ladislau Szomoru",mailtourl:"mailto:3372902+lszomoru@users.noreply.github.com",time:"2021-02-13 10:28"}
      ],
      time:"2021-02-13"
    },
    recommend:[{title:"鸟哥惠新宸：从 Web 初学者到 PHP 核心开发者",url:"https://www.oschina.net/news/140991"},
    {title:"Babel 项目陷入财务困境，尤雨溪力挺负责人",url:"https://www.oschina.net/news/141291/babel-funding"},
    {title:"阿里巴巴主导的 Weex 因活跃度不够从 Apache Incubator 退休",url:"https://www.oschina.net/news/141619/vote-for-retirement-of-weex"},
    {title:"微软：VS Code 是性能和体验最好的 Python 代码编辑器",url:"https://www.oschina.net/news/141711/python-programming-in-vs-code-is-now-faster"}],
    otherarticle:[
      { title:"国内各大高校纷纷为 Rocky Linux 提供更新源",
        url:"https://www.oschina.net/news/141209/rocky-linux-update-mirror",
        body:"前述 在51劳动节当天Rocky Linux发布了，在短短的12天时间内，国内各大高校，纷纷为Rocky Linux提供更新源服务，其中包括：南京大学、上海交通大学、山东大学，目前还有很多其它高校也正在准备当中，相信在不久将有更多源加入其中。 官方源 参考链接：https://mirror.rockylinux.org/mirrormanager/mirrors 国内源 后续将...",
        commend:"6",
        collection:"10"
      },
      {title:"Apache ECharts 5.1 发布，新增支持地理坐标系和地图系列的 SVG 底图",
      url:"https://www.oschina.net/news/141218/apache-echarts-5-1-released-officially",
      body:"在最近发布的 Apache ECharts 5.1 版本中，新增支持了地理坐标系和地图系列的 SVG 底图，可以用来灵活地创造出非常酷的可视化作品；图例组件全面更新，默认更接近数据的样式，让数据与图例之间产生更符合直观的关联。 除此之外，我们还在这个版本中改进了非常多的功能，让我们一起来了解一下吧！ 地理坐标系和地图系列的...",
      commend:"6",
      collection:"28"},
      {title:"Microsoft 宣布新的开源项目 eBPF for Windows",
      url:"https://www.oschina.net/news/141127/microsoft-announce-epic-for-windows",
      body:"Microsoft 发布了新的开源项目 eBPF for Windows，以使 eBPF 在 Windows 10 和 Windows Server 2016 及更高版本上工作。 eBPF 是 kernel 3.15 中引入的新设计，将原先的 BPF 发展成一个指令集更复杂、应用范围更广的“内核虚拟机”，支持在用户态将 C 语言编写的一小段“内核代码”注入到内核中运行，以提供更多的可编程...",
      commend:"1",
      collection:"7"},
      {title:"Rust 2021 版本计划发布",
      url:"https://www.oschina.net/news/141124/rust-2021-edition-plan",
      body:'Rust 开发团队宣布 Rust 语言的第三个版本 Rust 2021 计划于今年 10 月发布。 Rust 1.0 的发布确立了 "稳定前进（stability without stagnation）"作为 Rust 的更新原则。自 1.0 版本以来，一旦一个功能在稳定版上发布，Rust 就会承诺在未来的所有版本中支持该功能。然而，有些时候，必须对语言做一些不向后兼容的改动，...',
      commend:"5",
      collection:"2"}
    ],
    moreotherarticle:[
      {title:"Rust 发布 6 周年",
      url:"https://www.oschina.net/news/141709/rust-6-years",
      body:"今日，Rust 官方发文庆祝 Rust 发布 6 周年。 Rust 是一门系统编程语言，专注于系统安全，支持函数式和命令式以及泛型等编程范式。其首先在 2006 年作为 Mozilla 员工 Graydon Hoare 的私人项目出现，并于 2009 年开始接受 Mozilla 赞助。第一个有版本号的 Rust 编译器于 2012 年 1 月发布，而其第一个稳定版本 Rust 1.0...",
      commend:"4",collection:"0"},
      {title:"Python 之父：明年在 Python 中实现至少 1 倍提速",
      url:"https://www.oschina.net/news/141969/faster-cpython-dark",
      body:"Python 之父 Guido van Rossum 在 2021 年 Python 语言峰会上透露了一些有关 Python 的发展计划表示，其短期计划是在 Python 3.11 版本中实现至少提速 1 倍。按照官方的发布周期，目前处于测试阶段的 Python 3.10 计划于今年 10 月发布，Python 3.11 则预计于 2022 年发布。 2020 年 11 月，Guido 在退休一年后宣布再度复...",
      commend:"1",collection:"3"},
      {title:"ShardingSphere 核心团队组建商业公司 SphereEx，已完成天使轮融资",
      url:"https://www.oschina.net/news/141465/sphereex-angel-investment",
      body:"据报道，数据库中间件 ShardingSphere 团队成员组建的商业公司「SphereEx」已于近日完成数百万美元天使轮融资，由红杉中国种子基金和初心资本领投。 SphereEx 由 ShardingSphere 的核心团队创立，SphereEx CEO 兼创始人张亮（@张亮_Apache）是开源项目 ElasticJob 和 ShardingSphere（均已捐赠给 Apache 软件基金会）的作...",
      commend:"5",collection:"5"},
      {title:"Anolis OS 8.2 正式版发布，100% 兼容 CentOS 8",
      url:"https://www.oschina.net/news/141281/anolis-os-8-2-released",
      body:"Anolis OS 8.2 的首个正式发布版本已 GA。 简介 Anolis OS 8 是OpenAnolis社区发行的开源Linux发行版，与CentOS 8 100% 兼容，支持多计算架构，提供稳定、高性能、安全、可靠的操作系统。 本次发布的GA版是Anolis OS 8.2 的首个正式发布版本，支持x86_64 和aarch64架构，搭载双内核RHCK（RHEL Compatible Kernel）和ANC...",
      commend:"6",collection:"11"},
      {title:"Flask 2.0 版本发布",
      url:"https://www.oschina.net/news/141445/flask-2-0-released",
      body:"本文已获李辉授权转载。 原文地址：https://greyli.com/flask2/ Flask 以及 Flask 依赖的 5 个 Pallets 项目都在今天发布了新的主版本（下面的链接指向各个项目的主版本变动日志）： Flask 2.0 Werkzeug 2.0 Jinja 3.0 Click 8.0 ItsDangerous 2.0 MarkupSafe 2.0 你可以使用下面的命令更新 Flask： pip install -U f...",
      commend:"3",collection:"8"},
      {title:"微软将威胁和漏洞管理功能引入 Linux",
      url:"https://www.oschina.net/news/141288/microsoft-brings-threat-and-vulnerability-management-to-linux",
      body:"微软将其 TVM 功能带到 Windows 系统之外，现已支持 Linux 和 macOS。 微软正在逐步推进该公司的端点防御产品 Microsoft Defender for Endpoint（以前称为 Microsoft Defender Advanced Thread Protection）的持续进步，让 IT 专业人员能够使用这个工具对 Linux 设备的安全进行监控。 其中该产品的威胁和漏洞管理（TVM）...",
      commend:"5",collection:"5"},

    ],
    cplumnitem:[{
      header:"高手问答",
      bgstyle:"https://static.oschina.net/new-osc/img/page/detail/bg-question-header-sm.jpg",
      color:"rgb(72, 187, 121)",
      iconpic:"https://static.oschina.net/new-osc/img/icon/icon-wonderful-question.svg",
      more:"往期",
      moreurl:"https://www.oschina.net/question/topic/masteronline",
      articles:[
        {title:"关于 MySQL 主从相关",url:"https://www.oschina.net/question/4252687_2322150"},
        {title:"技术人修炼之道",url:"https://www.oschina.net/question/4252687_2322038"},
        {title:"与 Spring Cloud Alibaba 开源项目负责人一起深入理解 Spring Cloud",url:"https://www.oschina.net/question/4252687_2321939"}]
    },
    {
      header:"软件快讯",
      bgstyle:"https://static.oschina.net/new-osc/img/page/detail/bg-project-header-sm.jpg",
      color:"rgb(87, 83, 188)",
      iconpic:"https://static.oschina.net/new-osc/img/icon/icon-box-circle.svg",
      more:"更多",
      moreurl:"https://www.oschina.net/news/project",
      articles:[
        {title:"pacebox-springboot 2020.0.2.3 发布",url:"https://www.oschina.net/news/142050/pacebox-springboot-2020-0-2-3-released"},
        {title:"layui 2.6.7 发布，原生态 Web UI 组件库",url:"https://www.oschina.net/news/142033/layui-2-6-7-released"},
        {title:"Go 语言开源社区系统 BBS-GO 3.2.6 发布，新增反作弊系统",url:"https://www.oschina.net/news/142018/bbs-go-3-2-6-released"}]
    },
    {
      header:"每日一博",
      color:"rgb(57, 110, 184)",
      bgstyle:"https://static.oschina.net/new-osc/img/page/detail/bg-blog-header-sm.jpg",
      iconpic:"https://www.oschina.net/blog?tab=daily",
      more:"更多",
      moreurl:"",
      articles:[
        {title:"低代码平台如何一步步摧毁开发团队的效率与创新！",url:"https://my.oschina.net/didispace/blog/5048752"},
        {title:"CSP浅析与绕过",url:"https://my.oschina.net/hetianlab/blog/5048412"},
        {title:"Flutter Web插件实现：打通JavaScript和Dart",url:"https://my.oschina.net/yushulx/blog/5048228"}]
    },
    {
      header:"一周热点",
      bgstyle:"https://static.oschina.net/new-osc/img/page/detail/bg-news-header-sm.jpg",
      color:"rgb(171, 87, 84)",
      iconpic:"https://static.oschina.net/new-osc/img/icon/icon-weeklyview-circle.svg",
      more:"更多",
      moreurl:"https://www.oschina.net/question/topic/weekly-news",
      articles:[
        {title:"Java 16、PHP协程提案激辩 | Docker获融资、SUSE准备IPO、“开源”进入“十四五”",url:"https://www.oschina.net/question/3820517_2321705"},
        {title:"JB出了远程IDE工具、7-Zip出了Linux版 | 吴晟成首位中国人ASF董事",url:"https://www.oschina.net/question/3820517_2321608"},
        {title:"Flutter 2发布 | 个人搞开源怎么赚钱",url:"https://www.oschina.net/question/3820517_2321498"}]
    }
  ],
  linkcard:[
    {title:"源创计划",img:"https://static.oschina.net/new-osc/img/page/detail/bg-sharing-plan@2x.jpg",
    btn:"立即入驻",btnurl:"https://www.oschina.net/sharing-plan",
    container:["自媒体入驻开源社区，","获百万流量，打造个人技术品牌"]},
    {title:"新闻投递",img:"https://static.oschina.net/new-osc/img/page/detail/bg-publish-news@2x.jpg",
    btn:"立即投递",btnurl:"https://www.oschina.net/home/go?page=admin%2Fnew-release",
    container:["欢迎投递软件、IT 行业","相关新闻。"]}
  ],
  commendattent:[
    {img:"https://oscimg.oschina.net/oscnet/up-a0c7d951ad2d8e4070acbdff8f13588e.jpg!/both/50x50?t=1487546552000",
    name:"Suremotoo",container:"开源软件作者",url:"https://my.oschina.net/Suremotoo"},
    {img:"https://oscimg.oschina.net/oscnet/up-d2ec3f5a341b0fb78eaa7ed12408f590.jpg!/both/50x50?t=1484611961000",
    name:"逅弈逐码",article:15,visit:9.2,url:"https://my.oschina.net/u/3216837"},
    {img:"https://static.oschina.net/uploads/user/60/121058_50.jpg?t=1462921757000",name:"ada_young",article:91,visit:4.3,url:"https://my.oschina.net/cng1985"},
    {img:"https://static.oschina.net/uploads/user/896/1793074_50.jpg?t=1423310234000",name:"cuberl",container:"开源软件作者",url:"https://my.oschina.net/u/1793074"},
    {img:"https://oscimg.oschina.net/oscnet/up-4cb5bb713da9918a3c3f1197b976f716.jpg!/both/50x50",name:"杨亚洲-专注mongodb及高性能中间件",article:24,visit:17.3,url:"https://my.oschina.net/u/4087916"},
  ],
  },
  mutations: {
    shareincrement(state){
      state.sharecount++;
    },
    storeincrement(state){
      state.storecount++;
    },
  },
  actions: {
  },
  modules: {
  }
})
