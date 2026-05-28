import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['試合結果', 'お知らせ', '選手情報', '大会情報', 'ライブ情報']),
    summary: z.string(),
  }),
});

const players = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nameKana: z.string(),
    nickname: z.string().optional(),
    organization: z.enum(['ターゲット', 'エンペラー', 'マウンテンヒーローズ']),
    weightClass: z.string(),
    wins: z.number(),
    losses: z.number(),
    draws: z.number(),
    debut: z.string(),
    nationality: z.string().optional(),
    finishMethod: z.string().optional(),
  }),
});

export const collections = { news, players };
