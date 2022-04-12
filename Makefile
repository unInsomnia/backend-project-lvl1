install: # установка зависимостей
	npm ci

brain-games: # Запуск игр разума
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js
publish:
	npm publish --dry-run

lint: # запустить линтер
	npx eslint .
