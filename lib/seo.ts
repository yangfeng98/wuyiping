export const seo = {
  title: 'yiping',
  description:
    '杨锋，yiping',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
