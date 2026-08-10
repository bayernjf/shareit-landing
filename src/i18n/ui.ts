export type Locale = 'zh' | 'en';

export const languages: Record<Locale, string> = {
  zh: '中文',
  en: 'English',
};

export const defaultLocale: Locale = 'zh';

export type FaqItem = { q: string; a: string };
export type FeatureItem = { icon: string; title: string; desc: string };
export type PainItem = { icon: string; title: string; desc: string };

export interface Translation {
  // 元数据
  htmlLang: string;
  siteName: string;
  siteShortName: string;
  siteDescription: string;
  siteTagline: string;

  // 导航
  navHome: string;
  navFeatures: string;
  navFaq: string;
  navContact: string;
  navCta: string;

  // Hero
  heroEyebrow: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroPrimaryCta: string;
  heroSecondaryCta: string;
  heroNote: string;

  // 痛点
  painEyebrow: string;
  painTitle: string;
  painSubtitle: string;
  painPoints: PainItem[];

  // 解决方案
  solutionEyebrow: string;
  solutionTitle: string;
  solutionSubtitle: string;
  solutionSteps: { title: string; desc: string }[];

  // 功能亮点
  featuresEyebrow: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: FeatureItem[];

  // 存储模式
  storageEyebrow: string;
  storageTitle: string;
  storageSubtitle: string;
  storageFreeName: string;
  storageFreePrice: string;
  storageFreeFeatures: string[];
  storageProName: string;
  storageProPrice: string;
  storageProFeatures: string[];
  storageNote: string;

  // FAQ
  faqEyebrow: string;
  faqTitle: string;
  faqSubtitle: string;
  faqItems: FaqItem[];

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;

  // Footer
  footerTagline: string;
  footerProduct: string;
  footerCompany: string;
  footerCompanyAbout: string;
  footerCompanyContact: string;
  footerLegal: string;
  footerLegalPrivacy: string;
  footerLegalTerms: string;
  footerCopyright: string;
  footerContactEmail: string;
  footerLangLabel: string;

  // 给 AI 看的纯文本定义
  aiDefinition: string;
}

const zh: Translation = {
  htmlLang: 'zh-CN',
  siteName: 'ShareIt - 家庭隐私图片视频分享',
  siteShortName: 'ShareIt',
  siteDescription:
    'ShareIt 是一款面向家庭的隐私图片视频分享应用。通过延时确认、角色权限和形象保护机制，让子女与长辈之间的分享更安全、更安心。',
  siteTagline: '分享有温度，隐私有边界',
  aiDefinition:
    'ShareIt 是一款保护家庭隐私的图片视频分享应用。核心机制：分享内容前需授权确认，并设延时反悔窗口；区分子女与长辈角色，支持选择性分享；形象保护内容增加额外确认层。提供免费到期存储与永久会员存储两种模式。',

  navHome: '首页',
  navFeatures: '功能',
  navFaq: '常见问题',
  navContact: '联系',
  navCta: '联系我们',

  heroEyebrow: '家庭隐私分享',
  heroTitle: '分享有温度',
  heroHighlight: '隐私有边界',
  heroSubtitle:
    'ShareIt 让你安心地把生活分享给家人。延时确认给你反悔的机会，角色权限让内容只给对的人看，形象保护让每一次分享都妥帖。',
  heroPrimaryCta: '了解更多',
  heroSecondaryCta: '联系团队',
  heroNote: '面向子女与长辈的双向分享 · 隐私优先设计',

  painEyebrow: '为什么需要 ShareIt',
  painTitle: '分享给家人，不该有顾虑',
  painSubtitle: '家庭分享里藏着那些没说出口的担心——ShareIt 帮你把它们解决掉。',
  painPoints: [
    {
      icon: 'clock',
      title: '分享容易，撤回太难',
      desc: '图片视频一旦发出去，就收不回来了。冲动分享或发错内容时，只能干着急。',
    },
    {
      icon: 'shield',
      title: '该给谁看，说不清',
      desc: '有些内容只想给长辈，有些只想给孩子；全发一个群里，谁都不自在。',
    },
    {
      icon: 'heart',
      title: '形象管理失控',
      desc: '随手发的照片可能被转给亲戚、发到朋友圈，自己的形象不再由自己掌控。',
    },
  ],

  solutionEyebrow: '我们的方案',
  solutionTitle: '三道防线，守护每一次分享',
  solutionSubtitle: '从确认到送达，每一步都把选择权交还给你。',
  solutionSteps: [
    {
      title: '授权确认',
      desc: '分享内容前需要明确授权，让你有意识地决定"这次要发什么"。',
    },
    {
      title: '延时反悔窗口',
      desc: '分享不是即时送达，留出一段反悔时间。想撤回？来得及。',
    },
    {
      title: '角色与形象保护',
      desc: '区分子女与长辈角色，按角色选择性分享；涉及形象的内容增加额外确认层。',
    },
  ],

  featuresEyebrow: '核心功能',
  featuresTitle: '为家庭分享而生的细节',
  featuresSubtitle: '每一项功能都围绕"安全地分享"展开。',
  features: [
    {
      icon: 'clock',
      title: '延时确认送达',
      desc: '分享后不立即送达，反悔窗口内可一键撤回，告别"发完就后悔"。',
    },
    {
      icon: 'users',
      title: '角色权限',
      desc: '子女、长辈角色清晰区分，内容可定向分享给指定角色，互不打扰。',
    },
    {
      icon: 'shield',
      title: '形象保护层',
      desc: '涉及"形象保护"的内容增加额外确认与授权过滤，避免被随意转发。',
    },
    {
      icon: 'database',
      title: '灵活存储模式',
      desc: '免费模式到期自动失效，会员模式永久保存，按需选择不浪费。',
    },
  ],

  storageEyebrow: '存储模式',
  storageTitle: '选择适合你的存储方式',
  storageSubtitle: '免费够用，永久安心。',
  storageFreeName: '免费模式',
  storageFreePrice: '¥0',
  storageFreeFeatures: [
    '分享内容免费存储',
    '到期后自动失效',
    '适合临时分享场景',
    '延时确认与角色权限全功能',
  ],
  storageProName: '永久存储',
  storageProPrice: '会员订阅',
  storageProFeatures: [
    '内容永久保存',
    '不限到期时间',
    '适合珍藏重要回忆',
    '全部高级功能',
  ],
  storageNote: '所有模式均包含完整的隐私保护机制',

  faqEyebrow: '常见问题',
  faqTitle: '你可能想了解的',
  faqSubtitle: '关于 ShareIt 的隐私与使用，一次说清。',
  faqItems: [
    {
      q: 'ShareIt 是什么？',
      a: 'ShareIt 是一款面向家庭的隐私图片视频分享应用。核心是让子女与长辈之间的分享更安全：分享前需授权确认，并设有延时反悔窗口，区分角色权限，对涉及形象的内容额外保护。',
    },
    {
      q: '什么是"延时反悔窗口"？',
      a: '你在分享内容后，系统不会立即送达，而是留出一段反悔时间。在这段时间内你可以随时撤回，避免冲动分享或发错内容带来的尴尬。',
    },
    {
      q: '角色权限是怎么区分的？',
      a: 'ShareIt 区分"子女"和"长辈"两种角色。你可以选择性地把某些内容只分享给长辈，或只分享给孩子，互不打扰，各看各的。',
    },
    {
      q: '"形象保护"内容会怎么处理？',
      a: '系统识别到涉及"形象保护"的内容时，会增加额外的确认与授权过滤层，确保这类内容不会被随意转发到不该看到的地方。',
    },
    {
      q: '免费模式和永久存储有什么区别？',
      a: '免费模式下分享内容到期后会自动失效，适合临时分享；永久存储需会员订阅，内容永久保存，适合珍藏重要回忆。两种模式都包含完整的隐私保护机制。',
    },
    {
      q: '我的内容安全吗？',
      a: 'ShareIt 以隐私优先设计：内容分享需授权确认，延时送达可撤回，角色权限控制可见范围，形象保护层防止误传。每一步都把选择权交给你。',
    },
  ],

  ctaTitle: '准备好更安心的家庭分享了吗？',
  ctaSubtitle: '联系我们的团队，了解 ShareIt 如何守护你的家庭回忆。',
  ctaButton: '联系我们',

  footerTagline: '分享有温度，隐私有边界',
  footerProduct: '产品',
  footerCompany: '公司',
  footerCompanyAbout: '关于',
  footerCompanyContact: '联系',
  footerLegal: '法律',
  footerLegalPrivacy: '隐私政策',
  footerLegalTerms: '服务条款',
  footerCopyright: 'ShareIt. 保留所有权利。',
  footerContactEmail: 'hello@shareit.app',
  footerLangLabel: '语言',
};

const en: Translation = {
  htmlLang: 'en-US',
  siteName: 'ShareIt - Privacy-First Family Photo & Video Sharing',
  siteShortName: 'ShareIt',
  siteDescription:
    'ShareIt is a privacy-first family photo and video sharing app. With delayed confirmation, role-based permissions, and an image-protection layer, sharing between you and your elders is safer and more reassuring.',
  siteTagline: 'Share with warmth, privacy with boundaries',
  aiDefinition:
    'ShareIt is a privacy-first family photo and video sharing app. Core mechanisms: content requires authorization before sharing, with a delayed regret window; distinguishes child and elder roles for selective sharing; image-protection content has an extra confirmation layer. Offers free expiring storage and permanent member storage.',

  navHome: 'Home',
  navFeatures: 'Features',
  navFaq: 'FAQ',
  navContact: 'Contact',
  navCta: 'Contact Us',

  heroEyebrow: 'Privacy-First Family Sharing',
  heroTitle: 'Share with warmth,',
  heroHighlight: 'privacy with boundaries',
  heroSubtitle:
    'ShareIt lets you safely share life with family. A delayed confirmation gives you a second chance, role-based permissions keep content with the right people, and image protection makes every share appropriate.',
  heroPrimaryCta: 'Learn More',
  heroSecondaryCta: 'Contact Team',
  heroNote: 'Two-way sharing for kids and elders · Privacy-first design',

  painEyebrow: 'Why ShareIt',
  painTitle: 'Sharing with family should not feel risky',
  painSubtitle:
    'Behind every family share hides an unspoken worry; ShareIt resolves them.',
  painPoints: [
    {
      icon: 'clock',
      title: 'Sharing is easy, un-sharing is hard',
      desc: 'Once a photo or video is sent, you cannot take it back. Impulsive or mistaken shares leave you helpless.',
    },
    {
      icon: 'shield',
      title: 'Who should see what',
      desc: 'Some content is only for elders, some only for the kids; dumping everything in one group makes everyone uneasy.',
    },
    {
      icon: 'heart',
      title: 'Image out of control',
      desc: 'A casual photo can be forwarded to relatives or social circles; your image is no longer your own.',
    },
  ],

  solutionEyebrow: 'Our Approach',
  solutionTitle: 'Three lines of defense for every share',
  solutionSubtitle: 'From confirmation to delivery, control stays with you.',
  solutionSteps: [
    {
      title: 'Authorization confirmation',
      desc: 'Content requires explicit authorization before sharing, so you consciously decide what goes out.',
    },
    {
      title: 'Delayed regret window',
      desc: 'Sharing is not instant: there is a window to regret. Want to undo? You still can.',
    },
    {
      title: 'Role & image protection',
      desc: 'Child and elder roles are separated for selective sharing; image-sensitive content gets an extra confirmation layer.',
    },
  ],

  featuresEyebrow: 'Core Features',
  featuresTitle: 'Details built for family sharing',
  featuresSubtitle: 'Every feature revolves around sharing safely.',
  features: [
    {
      icon: 'clock',
      title: 'Delayed confirmation delivery',
      desc: 'No instant delivery: undo with one tap during the regret window, no more post-share regret.',
    },
    {
      icon: 'users',
      title: 'Role-based permissions',
      desc: 'Child and elder roles clearly separated; direct content to the right role without cross-noise.',
    },
    {
      icon: 'shield',
      title: 'Image protection layer',
      desc: 'Image-sensitive content gets extra confirmation and authorization filtering to prevent careless forwarding.',
    },
    {
      icon: 'database',
      title: 'Flexible storage modes',
      desc: 'Free mode auto-expires, member mode keeps forever: choose on demand, no waste.',
    },
  ],

  storageEyebrow: 'Storage Modes',
  storageTitle: 'Choose the storage that fits you',
  storageSubtitle: 'Free is enough, permanent is peace of mind.',
  storageFreeName: 'Free Mode',
  storageFreePrice: '¥0',
  storageFreeFeatures: [
    'Free content storage',
    'Auto-expires after a period',
    'Great for temporary shares',
    'Full delay confirmation & role permissions',
  ],
  storageProName: 'Permanent Storage',
  storageProPrice: 'Membership',
  storageProFeatures: [
    'Content kept permanently',
    'No expiration',
    'Great for treasured memories',
    'All advanced features',
  ],
  storageNote: 'All modes include the full privacy protection mechanism',

  faqEyebrow: 'FAQ',
  faqTitle: 'What you might want to know',
  faqSubtitle: 'Privacy and usage of ShareIt, explained.',
  faqItems: [
    {
      q: 'What is ShareIt?',
      a: 'ShareIt is a privacy-first family photo and video sharing app. It makes sharing between children and elders safer: authorization is required before sharing, with a delayed regret window, role-based permissions, and extra protection for image-sensitive content.',
    },
    {
      q: 'What is the "delayed regret window"?',
      a: 'After you share content, the system does not deliver it instantly; it leaves a regret window during which you can undo the share at any time, avoiding the awkwardness of impulsive or mistaken shares.',
    },
    {
      q: 'How do role permissions work?',
      a: 'ShareIt separates "child" and "elder" roles. You can selectively share certain content only with elders, or only with the kids, without cross-interference: each sees their own.',
    },
    {
      q: 'How is "image-protected" content handled?',
      a: 'When the system detects image-sensitive content, it adds an extra confirmation and authorization filter, ensuring such content is not carelessly forwarded to the wrong audience.',
    },
    {
      q: 'What is the difference between Free and Permanent storage?',
      a: 'In Free mode, shared content auto-expires after a period, ideal for temporary shares. Permanent storage requires a membership and keeps content forever, ideal for treasured memories. Both include the full privacy protection mechanism.',
    },
    {
      q: 'Is my content safe?',
      a: 'ShareIt is privacy-first by design: sharing requires authorization, delayed delivery is undoable, role permissions control visibility, and the image protection layer prevents misdelivery. Every step leaves control with you.',
    },
  ],

  ctaTitle: 'Ready for safer family sharing?',
  ctaSubtitle: 'Reach out to our team to learn how ShareIt protects your family memories.',
  ctaButton: 'Contact Us',

  footerTagline: 'Share with warmth, privacy with boundaries',
  footerProduct: 'Product',
  footerCompany: 'Company',
  footerCompanyAbout: 'About',
  footerCompanyContact: 'Contact',
  footerLegal: 'Legal',
  footerLegalPrivacy: 'Privacy Policy',
  footerLegalTerms: 'Terms of Service',
  footerCopyright: 'ShareIt. All rights reserved.',
  footerContactEmail: 'hello@shareit.app',
  footerLangLabel: 'Language',
};

export const translations: Record<Locale, Translation> = { zh, en };
