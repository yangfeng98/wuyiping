export const seo = {
  title: 'yangshuming | wuyiping',
  description:
    '杨锋，开发者',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const