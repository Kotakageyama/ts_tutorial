# インストール

```bash
yarn install
```

# prettier 自動整形

```bash
touch .vscode/settings.json
```

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

# Unknown at rule @tailwind

PostCSS Language Support を拡張機能で入れる
もしくは以下のように変更する。

```CSS:index.css
// index.css
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

# run

```bash
yarn dev
```

# 参考

[daisyui](https://daisyui.com/docs/)

[tailwindcss](https://tailwindcss.com/docs/installation)
