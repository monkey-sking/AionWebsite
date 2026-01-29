export interface ChangelogItem {
  version: string;
  date: string;
  new?: string[];
  improved?: string[];
  fixed?: string[];
}

export const changelogData: ChangelogItem[] = [
  {
    version: 'v2.0.0',
    date: '2026-02-01',
    new: [
      'The Reborn Update: Completely redesigned for macOS 15 release.',
      'Instant Task Mode: "Use & Go" automation for utility apps.',
      'Global Localization: Now supports 11 languages including Chinese, Japanese, and German.',
    ],
    improved: [
      'Visuals: All-new macOS native aesthetic with dark mode support.',
      'Performance: Memory usage reduced by 60%, startup time 2x faster.',
      'Smart Guard: Enhanced precision for audio and download detection.',
    ]
  },
  {
    version: 'v1.9.5',
    date: '2026-01-15',
    new: [
      'Helper Tool: Added privileged helper for "Force Quit" capabilities.',
      'System Cleanup: Deep maintenance mode to remove zombie processes.',
    ],
    improved: [
      'Settings: Reorganized preferences into clear categories.',
      'Onboarding: New welcome flow with permission guidance.',
    ]
  },
  {
    version: 'v1.9.0',
    date: '2025-12-20',
    new: [
      'Smart Guard Engine: First introduction of intelligent activity detection.',
      'Resource Monitor: Added real-time CPU and RAM stats to the menu bar.',
    ],
    fixed: [
      'Fixed an issue where "Do Not Disturb" mode was not detected correctly.',
      'Resolved a crash when switching users constantly.',
    ]
  },
  {
    version: 'v1.0.0',
    date: '2025-10-01',
    new: [
      'Initial Release: The foundation of the auto-quit engine.',
      'Basic Whitelist & Blacklist management.',
    ]
  }
];
