import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// GitHub Pages用の設定
// リポジトリ名に合わせて base を変更してください
// 例: https://username.github.io/arakaku-site/ の場合は base: '/arakaku-site/'
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: 'static',
  // base: '/arakaku-site/', // GitHub Pages公開時はコメントアウトを外してください
});
