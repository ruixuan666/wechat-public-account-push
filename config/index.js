export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wx41b9c199c71e2505",

  // 公众号APP_SECRET
  APP_SECRET: "c1f3de6670f6871afc1e2e7d9223bd3b",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "老婆",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "wMZE1Gk2aOpP5aVMgKc5Y5rME5mFXlRS6f7ZYE3VL0Q",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "wMZE1Gk2aOpP5aVMgKc5Y5rME5mFXlRS6f7ZYE3VL0Q",
      // 所在省份
      province: "甘肃",
      // 所在城市
      city: "兰州",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://s.weibo.com/top/summary/"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "JOg5FEbTmcLYF3NauEN7mRoy3fYVKzGOQuxVKO1QmAA",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oWOe759XERpWD_uk9ToNKuQbLJkQ",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "甘肃",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "兰州",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "老婆", "year": "1998", "date": "01-08"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 0,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2021-12-01"},
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "everyday_oneself", contents: "我会一遍一遍的告诉你我有多爱你，直到你知道为止"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "世界上最好看的人在我眼睛里，不信你看！",
"我从来都不骗人，如果我骗你了，那也骗的是仙女",
"说吧，你为什么要下凡",
"看见你，我觉得再没有什么是不美的；因为你用你的美；点缀了所有的一切！",
"我们的每一张合照，都是在向世间证明天使的存在。",
"以前不相信有人会为了美人放弃江山，看到你，我瞬间懂了",
"见过你的人都说我肤浅，谈恋爱只看颜值。",
"你这出去不用带钱，直接刷脸就行了",
"可以笑一下吗，我的咖啡忘记搁糖了",
"不要以为你长得漂亮，身材好，大眼睛，双眼皮，说话声音好听，走路样子好看就可以随便欺负我。",
"青翠的柳丝，怎能比及你的秀发；碧绿涟漪，怎能比及你的眸子",
"漂亮女人是金子，气质女人是钻石，聪明女人是宝藏，可爱女人是名画，据我考证，你是世界上最大的宝藏，里面装满了金子钻石名画。",
"上天太偏心了！为什么要把所有的优点都集中在你一个人身上？!",
"请你不要经常出现在街上好吗？不然交通事故会增加的！",
"求你不要再打扮了，给其他的女人留点自信吧！",
"西湖美不美，美；东湖美不美 ，美！不过，有你在我面前，足以使我陶醉。",   
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
