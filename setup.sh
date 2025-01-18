#!/bin/bash
npm install --save @fortawesome/fontawesome-free
npm install --save normalize-scss
npm install --save sass-mq

npm install --save-dev \
  stylelint\
  stylelint-scss \
  stylelint-config-recommended-scss \
  @stylistic/stylelint-plugin \
  stylelint-no-indistinguishable-colors \
  stylelint-declaration-block-no-ignored-properties

npm install --save-dev --save-exact prettier
npm install --save-dev @awmottaz/prettier-plugin-void-html

npm init @eslint/config@latest

npm install --save-dev \
  prettier-eslint \
  eslint-config-prettier \
  eslint-plugin-prettier \
  @html-eslint/parser \
  @html-eslint/eslint-plugin \
  eslint-plugin-html

npm i -D husky lint-staged
