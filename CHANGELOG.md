# [v1.2.0](https://github.com/size-up/freegamescatcher/compare/v1.1.3...v1.2.0) (2022-10-14)

## ✨ Introduce new features
- [`f2d269b`](https://github.com/size-up/freegamescatcher/commit/f2d269b)  Button Unsubscribe added in email template 

## 🐛 Bug fixes
- [`091c791`](https://github.com/size-up/freegamescatcher/commit/091c791)  Missing &#x60;.data&#x60; for &#x60;getDocument&#x60; method 

## ♻️ Refactor code
- [`e6fa5d2`](https://github.com/size-up/freegamescatcher/commit/e6fa5d2)  Adapt email sender to hexagonal architecture (#37) (Issues: [`#37`](https://github.com/size-up/freegamescatcher/issues/37))
- [`6d493fa`](https://github.com/size-up/freegamescatcher/commit/6d493fa)  Update &#x60;receiver&#x60; module 
- [`8e259cd`](https://github.com/size-up/freegamescatcher/commit/8e259cd)  Update &#x60;emailSender&#x60; service

# [v1.1.3](https://github.com/size-up/freegamescatcher/compare/v1.1.2...v1.1.3) (2022-10-10)

## 🐛 Bug fixes
- [`7604593`](https://github.com/size-up/freegamescatcher/commit/7604593)  Revert &quot;🔧 Optimize &#x60;VERSION&#x60; env. variable&quot;

# [v1.1.2](https://github.com/size-up/freegamescatcher/compare/v1.1.1...v1.1.2) (2022-10-10)

## 🔧 Add or update configuration files
- [`986086e`](https://github.com/size-up/freegamescatcher/commit/986086e)  Optimize &#x60;VERSION&#x60; env. variable 

## 📝 Add or update documentation
- [`49a84be`](https://github.com/size-up/freegamescatcher/commit/49a84be)  Update &#x60;README.md&#x60; with application versionning

# [v1.1.1](https://github.com/size-up/freegamescatcher/compare/v1.1.0...v1.1.1) (2022-10-08)

## 🐛 Bug fixes
- [`185a6d1`](https://github.com/size-up/freegamescatcher/commit/185a6d1)  Export version to image (#34) (Issues: [`#34`](https://github.com/size-up/freegamescatcher/issues/34))

# [v1.1.0](https://github.com/size-up/freegamescatcher/compare/v1.0.0...v1.1.0) (2022-10-08)

## ✨ Introduce new features
- [`98ad7c6`](https://github.com/size-up/freegamescatcher/commit/98ad7c6)  Google drive implementation (#33) (Issues: [`#33`](https://github.com/size-up/freegamescatcher/issues/33))

# v1.0.0 (2022-10-04)

## ✨ Introduce new features
- [`f29d733`](https://github.com/size-up/freegamescatcher/commit/f29d733)  Init. project with base config. 
- [`be36489`](https://github.com/size-up/freegamescatcher/commit/be36489)  HTTP receiver structure and misc. improvements (#19) (Issues: [`#19`](https://github.com/size-up/freegamescatcher/issues/19))
- [`234af0e`](https://github.com/size-up/freegamescatcher/commit/234af0e)  Email sender with template (#23) (Issues: [`#23`](https://github.com/size-up/freegamescatcher/issues/23))
- [`716984c`](https://github.com/size-up/freegamescatcher/commit/716984c)  Setup winston as logger 

## ⚡️ Improve performance
- [`491bcc2`](https://github.com/size-up/freegamescatcher/commit/491bcc2)  Change interval from 5 to 10 seconds 

## 🐛 Bug fixes
- [`799d9be`](https://github.com/size-up/freegamescatcher/commit/799d9be)  Fix CI cache 
- [`52765c5`](https://github.com/size-up/freegamescatcher/commit/52765c5)  How reading &#x60;banner.txt&#x60; 

## 📌 Pin dependencies to specific versions
- [`22f3173`](https://github.com/size-up/freegamescatcher/commit/22f3173)  Use &#x60;lts-alpine3.16&#x60; image version 

## 🔧 Add or update configuration files
- [`ee48824`](https://github.com/size-up/freegamescatcher/commit/ee48824)  Add &#x60;CODEOWNERS&#x60; file 
- [`0b59837`](https://github.com/size-up/freegamescatcher/commit/0b59837)  Push &#x60;vscode&#x60; config. 
- [`dc62b46`](https://github.com/size-up/freegamescatcher/commit/dc62b46)  Standardize &#x60;Dockerfile&#x60; 

## 🍱 Add or update assets
- [`8694785`](https://github.com/size-up/freegamescatcher/commit/8694785)  Add a banner in ASCII and build to &#x60;build&#x60; dir 

## 📝 Add or update documentation
- [`8798182`](https://github.com/size-up/freegamescatcher/commit/8798182)  Update &#x60;README.md&#x60; 

## ♻️ Refactor code
- [`c463951`](https://github.com/size-up/freegamescatcher/commit/c463951)  Relocate client saving data in a file service (#21) (Issues: [`#21`](https://github.com/size-up/freegamescatcher/issues/21) [`#23`](https://github.com/size-up/freegamescatcher/issues/23))
- [`d1da173`](https://github.com/size-up/freegamescatcher/commit/d1da173)  Delocate all API logging into the &#x60;DefaultMiddleware&#x60; 

## 🔨 Add or update development scripts
- [`a165af8`](https://github.com/size-up/freegamescatcher/commit/a165af8)  Add vscode &#x60;tasks&#x60; and use in &#x60;preLaunchTask&#x60; 

## 🚚 Move or rename resources (e.g.: files, paths, routes)
- [`14a412f`](https://github.com/size-up/freegamescatcher/commit/14a412f)  Move &#x60;data&#x60; to &#x60;/&#x60;
