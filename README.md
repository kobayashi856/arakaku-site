# アラカク 公式情報サイト

お笑いコンビ「クロコップ」の荒木好之が幼少期から構築し続けている架空の格闘技界「アラカク」の情報サイトです。

## 開発環境の起動

```bash
npm install
npm run dev
```

ブラウザで http://localhost:4321 を開いてください。

## ページ構成

| ページ | URL | 説明 |
|--------|-----|------|
| トップ | / | サイト紹介・ナビゲーション |
| アラカクとは | /about | 世界観・ルール・四大団体 |
| 歴史の流れ | /history | 1995年〜現在の年表 |
| 選手リスト | /players | 団体・階級でフィルタリング可能 |
| 選手詳細 | /players/[slug] | 個別選手プロフィール |
| 試合記録 | /matches | 全試合記録・YouTube対応 |
| MAXバウト | /maxbout | トーナメント記録 |
| NEWS | /news | お知らせ・新着情報 |

## データの編集方法

### 選手データの追加
`src/data/players.json` を編集してください。

```json
{
  "id": "選手のID（英数字）",
  "name": "選手名",
  "nameKana": "よみがな",
  "nickname": "ニックネーム",
  "organization": "TARGET | EMPEROR | M | H",
  "weightClass": "ヘビー級 など",
  "wins": 0,
  "losses": 0,
  "draws": 0,
  "finishMethod": "得意技",
  "debut": "1995",
  "nationality": "日本",
  "bio": "選手紹介文",
  "slug": "url用スラッグ（英数字ハイフン）"
}
```

### 試合記録の追加
`src/data/matches.json` を編集してください。

YouTube動画を埋め込む場合は `youtubeId` に YouTube の動画IDを入力してください。
例: `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → `"youtubeId": "dQw4w9WgXcQ"`

### MAXバウトの追加
`src/data/tournaments.json` を編集してください。

### 歴史年表の追加
`src/data/history.json` を編集してください。

### ニュース記事の追加
`src/content/news/` フォルダに Markdown ファイルを作成してください。

```markdown
---
title: "記事タイトル"
date: "2024-01-01"
category: "お知らせ"  # 試合結果 / 大会情報 / 選手情報 / お知らせ
summary: "一行サマリー"
---

記事本文（Markdown形式）
```

## GitHub Pages への公開

1. GitHubにリポジトリを作成してプッシュ
2. `astro.config.mjs` の `base` の行をコメントアウト解除し、リポジトリ名を設定
3. GitHub リポジトリの Settings → Pages → Source を "GitHub Actions" に設定
4. `main` ブランチにプッシュすると自動デプロイされます

## 技術スタック

- [Astro](https://astro.build/) v4
- [Tailwind CSS](https://tailwindcss.com/) v3
- GitHub Pages (静的ホスティング)
