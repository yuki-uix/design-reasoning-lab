# 谈判才是产品：六个实验拆解一个 AI 设计工具的思考方式

> 本文是开源研究项目 Design Reasoning Lab 第一篇 case study 的中文版，面向公众号 / 掘金发布。英文原文与全部证据链（原始导出文件、截图、43 条原子观察记录、4 条 findings）都在仓库里：
> **https://github.com/yuki-uix/design-reasoning-lab**
>
> 所有实验运行于 2026-07-07 至 2026-07-10。研究对象 Claude Design 处于 Research Preview 阶段，你读到本文时产品可能已经变了。

---

## 一、两个工具，一个设计师

有个实验你自己就能做。拿一份写得还算清楚的设计 brief——比如"给忙碌的父母做一个习惯打卡工具，安静温暖，柔和的绿色，圆润的字体"——丢给两个不同的 AI 设计工具。我把它丢给了 Claude Design（Anthropic 的 Research Preview）和 v0（Vercel 的生成器），换账号、换会话，反复跑了四天。

回来的产物不只是"氛围相似"。它们共享一套具体到可以点名的设计语言：色相 90–95 附近的暖白底色、色相 150 附近的鼠尾草绿、来自同一个短名单的圆润人文无衬线字体（[OBS-021](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260709-021-cross-product-design-language-convergence.md)）。brief 里没给品牌名，两个产品都自己编了一个——v0 在两个不同账号上都把产品叫"Little Wins"（[OBS-031](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260709-031-v0-rederives-same-brand-across-sessions.md)）。两个产品都往打卡列表里填了同样的起始习惯，其中两条——"Read to the kids" 和 "Drink a glass of water"——在两家产品的导出代码里**逐字符完全一致**（[OBS-037](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260710-037-cross-product-verbatim-seed-convergence.md)）。

两个竞品，两家公司，两套界面，引擎盖下面坐着的，看起来是同一位设计师。

这应该改变我们对 AI 设计工具提问的方式。常见的那个问题——*哪家生成的设计更好？*——对这一对产品来说答案很无聊：同一份 brief，它们生成的基本是**同一份设计**。有意思的差异全部发生在产物周围：生成之前工具问了你什么，哪些决策被交还给你，哪些被悄悄替你做了，以及当你亲自上手改的时候会发生什么。

Design Reasoning Lab 的前六个实验就在给这件事画地图：一个模糊度阶梯实验（EXP-001）、一次导出产物的代码解剖（EXP-002）、一个跨输出模式的一致性测试（EXP-003）、一个决策所有权机制探查（EXP-004），外加两个 v0 对照实验（EXP-005、EXP-006）。每个实验运行前都做了预注册；我们早期的几个假设被复现直接证伪了，也都如实记录在案。下面是幸存证据讲出的故事。

## 二、它总是先问——但不是因为它困惑

两个产品之间最显眼的行为差异，出现在第一个像素存在之前。给 Claude Design 的每一次原型请求——每一次，跨越所有实验——都会在生成前弹出一张结构化的问卷："A few quick questions before I build"，六到八个问题，并且"Decide for me（你替我决定）"和自由文本委托是一等公民选项（[OBS-001](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260708-001-structured-intake-form.md)）。

直觉的解释是：这是对模糊性的反应——工具不知道的时候才问。我们专门设计了实验来验证这一点：一个模糊度阶梯，从一份规格完整的 brief 一路降到一句五个词的 prompt。结果这个直觉在梯子两端都错了。

Claude Design 在**每一级**都问了，包括规格最完整的那一级，而且问题预算几乎恒定：五个条件下分别是 7、6、8、8、8 个问题（[FND-001](https://github.com/yuki-uix/design-reasoning-lab/blob/main/findings/FND-001-elicitation-is-product-policy.md)）。v0 在**任何一级**都没问，包括那句五个词的 prompt——它自己发明了一整套设计方向，还宣称需求"清晰"（[OBS-032](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260709-032-v0-vague-zero-questions-hypothesis-test.md)）。九次运行，两个产品，与模糊度零相关。**一个 AI 设计工具生成前问不问你，不是你 brief 的属性，而是产品团队拍板的政策**，跟发送按钮是什么颜色一样固定。

模糊度真正调节的——在那个会问的产品上——是问题的**高度**。规格完整的 brief 引来的是子决策问题：绿色具体哪一档、连续打卡怎么可视化。五个词的 brief 引来的是地基问题：什么形态、什么整体气质、"习惯"用什么模型建模（[OBS-003](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260708-003-question-count-flat-altitude-varies.md)）。预算恒定，花在哪一层随不确定性移动。它的行为不像一个困惑时才发问的协作者，更像一个自带固定"提问槽位"的产品，永远用当前最不确定的那批决策把槽位填满。

## 三、它问什么：取决于出错的代价

既然问题预算是固定的，那真正有信息量的是：什么被问了，什么被悄悄假设了。语料里有一组几乎外科手术般干净的对照。

同一天，我们让 Claude Design 做两个东西：一个咖啡烘焙工坊的落地页，和一个电商数据分析看板。做落地页时，问卷的第一个问题就是烘焙坊的**名字**——"还是我帮你编一个？"。做看板时，身份问题一个都没出现，产物直接内置了一家凭空捏造的商店、一个虚构的用户画像、一整套没人要求的商品目录（[OBS-039](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260710-039-brand-vacuum-elicited-then-invented.md)、[OBS-041](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260710-041-identity-vacuum-ask-or-assume-by-domain.md)）。

两个案例里缺失的事实是同一个：*这是谁家的生意？*不同的是猜错的代价。挂着错误品牌名的落地页，坏得让主人没法忽视；一个演示用的"Acme Store"看板则无所谓，因为编造的身份只是布景。我们目前的解读（中等置信度，只有这一组对照）：**问与不问的边界，是按"这个决策错了对产物的代价"逐个划的，而不是按 brief 应该包含什么的一般理论。**

反面空缺也支持这个读法。整个语料里，Claude Design 从来没有直接问过"目标用户是谁"——人类设计合作里经典的第一问（[OBS-004](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260708-004-audience-removed-silent-default.md)）。它只通过具体的代理变量接近受众，比如"展示什么样的示例数据"。抽象的 brief 层事实不会让产物**看起来**错，所以永远进不了问卷。

## 四、没人决定的时候，设计从哪来

固定预算的问题问完了，你答了几个、委托了几个，brief 仍然留下上百个悬而未决的决策。这些归谁？开头的轶事已经给了答案：归先验（priors）——而且这些先验显然是**跨产品共享**的，这就是为什么两个竞品不停交出同一个打卡工具。

更有意思的结论是：这种填充是有结构的。它分层，而且各层的稳定性可以测出来不一样（[FND-003](https://github.com/yuki-uix/design-reasoning-lab/blob/main/findings/FND-003-priors-fill-vacuums-in-layers.md)）。

**底层，接近确定性**：同一份带风格的 brief，每次都映射到同一套设计语言，两个产品皆然——那个暖底色、那个鼠尾草绿、那批圆润无衬线、温和的文案语气，以及受众缺失时同样的四条通用自我关怀习惯。这一层跨运行、跨账号、跨厂商几乎不变。

**中层，家族稳定、取值抽样**：具体 token 值以"近似而不相等"的方式聚集。绿色永远是*某种*鼠尾草绿，但跨全新会话从来不是同一个鼠尾草绿（[OBS-027](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260709-027-fresh-session-converges-on-language-not-values.md)）。

**顶层，逐次抽样**：名字。品牌、人物、slogan。Claude Design 两次生成了叫"Maya"的 persona；v0 在两个账号上都叫"Little Wins"。池子很小，每次独立抽取。

而且编出来的细节**局部可信、全局不校验**。有一次生成的咖啡烘焙坊，正文说自己开在旧金山 Mission 区——页脚印的却是奥克兰的街道地址（[OBS-039](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260710-039-brand-vacuum-elicited-then-invented.md)）。每个细节单独抽得都不错，只是没有任何东西负责让它们互相对上。这大概是"先验填充"最好的一张单帧概括：纹理连贯，没有所指。

对一线设计师，这个分层有一个很实用的读法：**你没写进 brief 的东西，既不会被随机决定，大多也不会通过提问回到你手上——它由训练分布决定，而且不管你买哪家的工具，决定结果都一样。**你的 brief 真正的功能，是把决策从先验层推进你控制的层。

## 五、除了品味，它什么都不记得

这个分层同时回答了本实验室的立项问题：Claude Design 做设计的时候，中间到底存不存在一个"设计"——一个介于意图和产物之间的持久表征——还是只是文本生成文本？

我们从两个方向探。**同一会话内跨输出模式**，一致性真实且直白到惊人：把原型转成幻灯片时，产品用的是一条货真价实的截图流水线，具体数值精确复现（[OBS-026](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260709-026-same-session-consistency-is-value-level.md)）。**全新会话给同一份 brief**，只有设计语言的"族"活了下来，每一个具体值都发散（[OBS-027](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260709-027-fresh-session-converges-on-language-not-values.md)）。而在导出产物内部，找不到任何权威层：重复出现的值没有单一定义源，token 系统这次运行有、下次没有，组件拆分跟着数据形状走而不是设计结构走，你要它解释设计理由，解释是在产物之后生成的，不是之前被查阅的（OBS-022 至 OBS-024、OBS-028）。

行为记录不与之矛盾的最简模型是：**会话上下文 + 先验，没有任何持久的设计表征**（[FND-002](https://github.com/yuki-uix/design-reasoning-lab/blob/main/findings/FND-002-consistency-is-context-not-representation.md)）。你在会话内体验到的一致性，是对话在记得它自己；你跨会话体验到的一致性，是模型的品味。没有第三种东西。（有一个值得记录的例外：deck 模式会在生成前输出一份书面计划（[OBS-029](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260709-029-written-plan-artifact-appears-in-deck-mode.md)）——证明产品*有能力*把计划外化，也暗示了真正的表征将来可以住在哪里。）

这是对一个黑箱系统的行为学断言——是"没有证据、也没有解释上的必要"，不是"不存在"。但它有牙齿：它预测（目前全部应验）**任何设计决策都活不过一个新会话，除非你重新说一遍**。不管"设计系统"在 AI 原生工具里最终意味着什么，至少在这个 Research Preview 里，它不是一个工具会替你保存的东西。

## 六、所有权栈

到这里为止，讲的都是决策从你手里流走——流进问卷、流进先验。最后一个实验绘制的是决策**流回来**的机制，也是 Claude Design 与 v0 彻底分道扬镳的地方。

不存在单一的人类/AI 边界。存在的是一个**所有权返还机制栈**，在不同时刻、不同高度、以不同的可靠性触发（[FND-004](https://github.com/yuki-uix/design-reasoning-lab/blob/main/findings/FND-004-ownership-mechanism-stack.md)）：

**生成前**，问卷返还 brief 级决策——返还哪些，取决于它对产物有多"身份攸关"（烘焙坊的名字会被问；看板的公司被悄悄编造），且委托永远可选。

**生成后**，"Tweaks"控件把一部分品味级决策参数化成产物上的滑块和选择器（[OBS-007](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260708-007-unspecified-dimensions-become-controls.md)）。但它是**看缘分的**：一个项目上出现了三个控件，接下来两个项目一个都没有（OBS-038、OBS-040）。而且有时只是名义上的：一个主题色控件实际改动的比它展示的少——派生出的深浅色变体是写死的（[OBS-036](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260710-036-tweaks-inventory-p-full.md)）。**握着控件，不等于握着决策。**

**逐次请求时**，你选择的反馈通道分配最后一块所有权——具体说，是"你指的是什么"由谁解释。在聊天里说"把主操作做得更突出"，由 agent 决定哪个元素算"主操作"；在我们的运行里，它选的元素和人类心里想的不是同一个（[OBS-042](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260710-042-channel-determines-element-and-layer.md)）。换成在元素上锚定一条评论，产品会把你的评论编译成绑定到那个具体 DOM 节点的指令——指代权回到你手里，执行仍归 agent。直接在画布上编辑，agent 则完全退出回路。

最后这一级有锋利的边。当人类直接编辑时，没有任何东西守护产物自己的抽象：在我们的运行里，保存一次直接编辑，悄悄把一个模板绑定替换成了静态值——发生在一个用户根本没碰过的元素上（[OBS-043](https://github.com/yuki-uix/design-reasoning-lab/blob/main/observations/OBS-20260710-043-canvas-edit-breaks-binding-comment-anchor-persists.md)）。你拿到完整所有权的那一刻，产品就停止维护那些让产物不止是像素的结构。

整个栈还有一条贯穿性质：**转移是无摩擦且单向的**。在所有被观察的交互里，agent 从未要求过确认，也从未为自己做过的任何决策辩护过一次。你要什么，就给什么。（重要的但书：我们的请求都是低风险的样式改动，还没有人要求它违反无障碍约束。"从不辩护"恰恰在辩护最要紧的地方没被测过。）

v0 的对照把这一整节压扁：没有问卷、没有控件、捕获的运行里也没有评论功能。v0 用户握有的唯一所有权，是事后改代码。**这两个产品最大的差异不在设计能力，而在决策所有权界面**——它们的产出本来就趋同。

## 七、那么，AI 设计工具到底是什么

把碎片拼起来，这份 case study 对"Claude Design 如何思考"的一句话回答是：**它用的是和所有人一样的那个模型来思考，外面包了一层产品，把"决策归谁"的谈判外化了出来。**

这句话是双刃的，诚实要求把两面都摆出来。

往善意里读，Claude Design 是关于"AI 设计工具是什么"的一套真正不同的理论。v0 的隐含理论是**自动售货机**：brief 进，产物出，模糊性由先验静默消化，不满意就去改代码。Claude Design 的隐含理论是**谈判**：每个产物都始于一次人类与 agent 之间明确的决策分配，一部分决策以实体控件的形式回流，反馈界面按"你想保留多少解释权"分了档。这些是产品发明而不是模型能力，而且它们是真实的——v0 用户没有其中任何一样的对应物。

往怀疑里读，这场谈判有相当一部分是仪式性的。问题预算固定，与需要无关。控件三个项目里只出现一次。把决策委托出去，它路由到的正是 v0 静默查询的同一批先验——"你替我决定"和"从来没被问过"产出的是同一个鼠尾草绿。有的控件调节的比它展示的少。这个谈判界面在承重决策上（烘焙坊的名字）是**真诚的**，在边缘地带则更接近**表演**。

两种读法同时为真，而它们之间的张力，我们怀疑正是这个产品品类真正的设计前沿。往模型上拴一张问卷谁都会。难的问题——这份语料记录的每一道接缝里都看得见——是让谈判**从头到脚都承重**：问题存在是因为答案会改变产物；控件接通了它声称的一切；"委托给你"和"沉默"可以被区分开；以及一个分得清"你的品味"和"你的错误"、并且只跟第二种争论的 agent。

## 八、这项研究不能说明什么

这是对一个 Research Preview 为期四天的行为学研究，绝大多数格子只有一次运行，阶梯实验只用了一个意图域（习惯打卡），先验只在它最强的地方被探过（一份"安静温暖"的消费级 brief）。两个产品跑的是不同的、部分未公开的模型，产品层和模型层的解释全程混淆——所以本文所有断言都停在"用户体验到什么"的层面。若干判别性实验已注册待跑：重跑带风格的一句话 brief（解决控件的缘分问题）、聊天通道 ×3（指代解释的稳定性）、画布编辑绑定丢失的最小复现、一份偏离分布的风格 brief（先验最弱处）、以及第三个对照产品（区分"Claude Design 特殊"还是"v0 特殊"）。

完整证据链——原始导出、截图、解包后的产物代码、43 条区分了事实与解读的原子观察——全部公开在仓库里：

**https://github.com/yuki-uix/design-reasoning-lab**

如果你跑了任何一个已注册的后续实验，或者证伪了上面任何一条，欢迎提 PR。

---

*Design Reasoning Lab 研究 AI 原生设计工具如何理解意图、做出决策、与人协作——方法是逆向其行为，而不是评测其产出。Claude Design 是第一个 case study；Figma Make、Google Stitch、Lovable、Cursor 在候选名单上。*
