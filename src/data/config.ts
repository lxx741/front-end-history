export const CATEGORIES = {
  technology: {
    name: 'technology',
    label: '技术标准',
    color: '#3B82F6',
    bgColor: '#DBEAFE'
  },
  framework: {
    name: 'framework', 
    label: '框架工具',
    color: '#10B981',
    bgColor: '#D1FAE5'
  },
  browser: {
    name: 'browser',
    label: '浏览器',
    color: '#F59E0B', 
    bgColor: '#FEF3C7'
  },
  organization: {
    name: 'organization',
    label: '组织机构',
    color: '#8B5CF6',
    bgColor: '#EDE9FE'
  },
  tool: {
    name: 'tool',
    label: '开发工具',
    color: '#EF4444',
    bgColor: '#FEE2E2'
  },
  milestone: {
    name: 'milestone',
    label: '重要里程碑',
    color: '#EC4899',
    bgColor: '#FCE7F3'
  }
} as const;

export const IMPORTANCE = {
  critical: {
    level: 'critical',
    label: '关键',
    size: 'large',
    priority: 4
  },
  high: {
    level: 'high', 
    label: '重要',
    size: 'medium-large',
    priority: 3
  },
  medium: {
    level: 'medium',
    label: '一般',
    size: 'medium', 
    priority: 2
  },
  low: {
    level: 'low',
    label: '次要',
    size: 'small',
    priority: 1
  }
} as const;