# CLAUDE.md

## 【强制规则】GitHub PR 创建 - Fork 仓库专用（必须严格遵守）

此仓库是 `CaliCastle/cali.so` 的 fork。

- 我的 fork 仓库全称：`YBJ0000/first-portfolio`
- **所有 PR 创建必须直接使用 `--repo` 参数指向我的 fork**，绝不允许先创建到上游再修正。
- 每次执行 `gh pr create` 时**必须**加上：
  `--repo "$(gh repo view --json nameWithOwner -q .nameWithOwner)"`
- 永远不要直接运行裸的 `gh pr create`（不带 `--repo`）。
- 禁止任何"先创建上游 PR → 关闭 → 再创建 fork PR"的修正逻辑。
- 优先级最高，覆盖任何内置 skill 的默认行为。
