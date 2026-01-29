export interface ChangelogItem {
  version: string;
  date: string;
  new: Record<string, string[]>;
  improved: Record<string, string[]>;
  fixed: Record<string, string[]>;
}

export const changelogData: ChangelogItem[] = [
  {
    version: 'v2.0.0',
    date: '2026-02-01',
    new: {
      en: [
        'The Reborn Update: Completely redesigned for macOS 15 release.',
        'Instant Task Mode: "Use & Go" automation for utility apps.',
        'Global Localization: Now supports 11 languages including Chinese, Japanese, and German.',
      ],
      'zh-hans': [
        '重生更新：专为 macOS 15 重新设计。',
        '瞬时任务模式：工具类应用的“即用即走”自动化。',
        '全球化适配：现已支持包括中文、日语、德语在内的 11 种语言。',
      ]
    },
    improved: {
      en: [
        'Visuals: All-new macOS native aesthetic with dark mode support.',
        'Performance: Memory usage reduced by 60%, startup time 2x faster.',
        'Smart Guard: Enhanced precision for audio and download detection.',
      ],
      'zh-hans': [
        '视觉升级：全新的 macOS 原生美学设计，完美支持深色模式。',
        '性能优化：内存占用降低 60%，启动速度提升 2 倍。',
        '智能守卫：增强了音频和下载检测的精确度。',
      ]
    },
    fixed: { en: [], 'zh-hans': [] }
  },
  {
    // Commit: feat: Implement Pro features, license management, and new SmartGuards audio detection capabilities.
    // Date: 2026-01-27
    version: 'v1.9.5',
    date: '2026-01-27',
    new: {
      en: [
        'Advanced Media Detection: Implemented multi-signal detection (MediaRemote + Audio Hardware) for precise playback status.',
        'Pro Features: Added License Management and exclusive Pro capabilities.',
        'Focus Mode Integration: Added AppIntents for system-level Focus Mode synchronization.',
      ],
      'zh-hans': [
        '高级媒体检测：实施多信号检测（MediaRemote + 音频硬件）以精确获取播放状态。',
        'Pro 功能：新增许可证管理和独家 Pro 功能。',
        '专注模式集成：添加 AppIntents 以支持系统级专注模式同步。',
      ]
    },
    improved: {
      en: [
        'Icon Library: Expanded to 120+ top SF Symbols for scene customization.',
        'Onboarding: Polished welcome experience with refined copy and transitions.',
      ],
      'zh-hans': [
        '图标库：扩展至 120+ 顶级 SF Symbols 图标，用于场景自定义。',
        '引导流程：优化的欢迎体验，包含精炼的文案和过渡动画。',
      ]
    },
    fixed: {
      en: [
        'Resolved robust ProcessMonitor refresh and fallback logic.',
        'Fixed empty menu bar app list issues.',
      ],
      'zh-hans': [
        '解决了 ProcessMonitor 刷新和回退逻辑的健壮性问题。',
        '修复了菜单栏应用列表为空的问题。',
      ]
    }
  },
  {
    // Commit: feat: support dynamic scroll speed based on content length
    // Date: 2026-01-24 (Estimated from surrounding logic in git log)
    version: 'v1.9.0',
    date: '2026-01-25',
    new: {
      en: [
        'Scrolling App Names: Added marquee effect for long application names in the menu bar.',
        'Checklist Manager: Introduced internal tool for tracking launch readiness.',
      ],
      'zh-hans': [
        '滚动应用名称：为菜单栏中的长应用名称添加了跑马灯效果。',
        '清单管理器：引入用于跟踪发布准备状态的内部工具。',
      ]
    },
    improved: {
      // Commit: refactor: move SystemObserver to AionCore
      en: [
        'Architecture: Moved SystemObserver to AionCore for better modularity.',
      ],
      'zh-hans': [
        '架构：将 SystemObserver 迁移至 AionCore 以获得更好的模块化支持。',
      ]
    },
    fixed: { en: [], 'zh-hans': [] }
  },
  {
    // Commit: feat: implement Scene Strategy
    version: 'v1.8.0',
    date: '2026-01-20', 
    new: {
      en: [
        'Scene Strategy: Introduced configurable scenes (Whitelist/Blacklist logic) for different workflows.',
      ],
      'zh-hans': [
        '场景策略：引入可配置的场景（白名单/黑名单逻辑）以适应不同的工作流。',
      ]
    },
    improved: {
      en: [], 'zh-hans': []
    },
    fixed: { en: [], 'zh-hans': [] }
  }
];
