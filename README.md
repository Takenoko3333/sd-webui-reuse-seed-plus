# sd-webui-reuse-seed-plus

[日本語](#日本語) | [English](#english)

# 日本語

# 説明

## 機能付き生成ボタンの追加

- txt2img, img2imgの画面に三つの機能付き生成ボタンを追加します。
- 🎲: ランダムに設定される新たなシードで生成します。
- ♻️: 前回生成時のシードがある場合、シードを再利用して生成します。
- +1: シードが設定されている場合、シードに1を足して生成します。シードが-1の場合、このボタンは無効化されます。
  <br><br>
  <p>
  <img src="images/image1.png" width="300">
  </p>
  <br>

## Hires.fix 連動機能

- Hires.fixのオン/オフに連動して他の機能のオン/オフを切り替えます。
- Hires.fixボタンの上に各機能のチェックボックスが追加されます。
- Hires.fix with ♻️ & ADetailer: チェックボックスがオンの場合、Hires.fixに連動して♻️(Reuse seed)とADetailerを切り替えます。ADetailerがインストールされていない場合は♻️(Reuse seed)のみ連動します。
- Hires.fix with ADetailer: チェックがオンの場合、Hires.fix に連動してADetailerを切り替えます。ADetailerがインストールされていない場合は非表示となります。
- Hires.fix with Tiled VAE: チェックボックスがオンの場合、Hires.fix に連動してTiled VAEを切り替えます。Forge及び、Tiled VAEがインストールされていない場合は非表示となります。
- Reuse delay time: シード再利用生成ボタンを使用した時、シードが再利用されなかった場合はこの値を大きくしてください。初期値は500(msec)です。
<br><br>
  <p>
  <img src="images/image2.png" width="600">
  </p>
  <br>

# インストール方法

AUTOMATIC1111のExtensionsタブをクリック、Install from URLタブをクリックし、URL for extension's git repositoryに以下のurlを入力しInstallボタンをクリックしてください。

```
https://github.com/Takenoko3333/sd-webui-reuse-seed-plus.git
```

<br>

# 変更履歴

## [0.3.0] - 2024-7-28

### 追加, 修正

- ADetailerの仕様変更で連動しない問題を修正
- 非対応の機能を非表示にする対応
- シード再利用生成ボタン使用時の遅延時間を変更できる機能を追加
- READMEの誤字を修正

## [0.2.0] - 2024-6-8

### 追加, 修正

- 機能付き生成ボタン(🎲, ♻️, +1)を追加
- Hires.fix 連動機能に'Hires.fix ADetailer', 'Hires.fix with Tiled VAE'を追加
- 文言を修正

## [0.1.4] - 2024-6-6

### 修正

- チェックボックスのidを修正
- チェックボックスのセレクターを修正

## [0.1.3] - 2024-6-6

### 修正

- 関数を修正

## [0.1.2] - 2024-6-6

### 修正

- cssを修正

## [0.1.1] - 2024-6-6

### 修正

- READMEを修正

## [0.1.0] - 2024-6-6

### 追加

- v0.1.0リリース
  <br><br>

# ライセンス

Copyright © 2024 Takenoko  
Released under the [MIT License](https://opensource.org/licenses/mit-license.php).
<br><br><br>

# English

# Description

## Adding Functional Generation Buttons

- Three functional generation buttons will be added to the txt2img and img2img screens.
- 🎲: Generates with a new seed set randomly.
- ♻️: Reuses the seed from the previous generation if available.
- +1: Adds 1 to the current seed if a seed is set. If the seed is -1, this button is disabled.
  <br><br>
  <p>
  <img src="images/image1.png" width="300">
  </p>
  <br>

## Hires.fix Integration Feature

- The other functions are switched on and off in conjunction with the Hires.fix on/off.
- A checkbox for each function is added above the Hires.fix button.
- Hires.fix with ♻️ & ADetailer: If the checkbox is on, switches ♻️ (Reuse seed) and ADetailer in conjunction with Hires.fix. If ADetailer is not installed, only ♻️ (Reuse seed) is linked.
- Hires.fix with ADetailer: if checked, switches ADetailer in conjunction with Hires.fix; if ADetailer is not installed, it is hidden.
- Hires.fix with Tiled VAE: if checked, switches Tiled VAE in conjunction with Hires.fix, hidden if Forge and Tiled VAE are not installed.
- Reuse delay time: increase this value if the seed is not reused when using the Generate Seed Reuse button. The default value is 500 (msec).
  <br><br>
  <p>
  <img src="images/image2.png" width="600">
  </p>
  <br>

# Installation Instructions

Click on the Extensions tab in AUTOMATIC1111, then click on the Install from URL tab. Enter the following URL in the URL for extension's git repository field and click the Install button.

```
https://github.com/Takenoko3333/sd-webui-reuse-seed-plus.git
```

<br>

# Change Log

## [0.3.0] - 2024-7-28

### Additions, Fixes.

- Fixes issues not linked to ADetailer specification changes.
- Support for hiding unsupported functions.
- Added function to change the delay time when using the seed reuse generation button
- Fixed typos in README

## [0.2.0] - 2024-6-8

### Add and Fixed

- Added functional generation buttons (🎲, ♻️, +1)
- Added 'Hires.fix ADetailer' and 'Hires.fix with Tiled VAE' to the Hires.fix integration feature
- Revised text and wording

# Changelog

## [0.1.4] - 2024-6-6

### Fixed

- Fixed chexbox id name
- Fixed chexbox selector

## [0.1.3] - 2024-6-6

### Fixed

- Fixed function

## [0.1.2] - 2024-6-6

### Fixed

- Fixed css

## [0.1.1] - 2024-6-6

### Fixed

- Fixed README

## [0.1.0] - 2024-6-6

### Added

- v0.1.0 release

# License

Copyright © 2024 Takenoko  
Released under the [MIT License](https://opensource.org/licenses/mit-license.php).
