export interface ChangelogItem {
  version: string;
  date: string;
  new?: Record<string, string[]>;
  improved?: Record<string, string[]>;
  fixed?: Record<string, string[]>;
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
    }
  },
  {
    version: 'v1.9.5',
    date: '2026-01-15',
    new: {
      en: [
        'Helper Tool: Added privileged helper for "Force Quit" capabilities.',
        'System Cleanup: Deep maintenance mode to remove zombie processes.',
      ],
      'zh-hans': [
        '特权助手：新增 Helper Tool 以支持“强制退出”功能。',
        '系统清理：新增深度维护模式，可清理僵尸进程。',
      ]
    },
    improved: {
      en: [
        'Settings: Reorganized preferences into clear categories.',
        'Onboarding: New welcome flow with permission guidance.',
      ],
      'zh-hans': [
        '设置重组：将首选项重新组织为清晰的分类。',
        '引导流程：全新的欢迎引导，包含权限设置指引。',
      ]
    }
  },
  {
    version: 'v1.9.0',
    date: '2025-12-20',
    new: {
      en: [
        'Smart Guard Engine: First introduction of intelligent activity detection.',
        'Resource Monitor: Added real-time CPU and RAM stats to the menu bar.',
      ],
      'zh-hans': [
        '智能守卫引擎：首次引入智能活动检测。',
        '资源监控：在菜单栏新增实时 CPU 和内存统计。',
      ]
    },
    fixed: {
      en: [
        'Fixed an issue where "Do Not Disturb" mode was not detected correctly.',
        'Resolved a crash when switching users constantly.',
      ],
      'zh-hans': [
        '修复了“勿扰模式”检测不正确的问题。',
        '解决了频繁切换用户时的崩溃问题。',
      ]
    }
  },
  {
    version: 'v1.0.0',
    date: '2025-10-01',
    new: {
      en: [
        'Initial Release: The foundation of the auto-quit engine.',
        'Basic Whitelist & Blacklist management.',
      ],
      'zh-hans': [
        '初始发布：自动退出引擎的基础版本。',
        '基础的白名单与黑名单管理。',
      ]
    }
  }
];
