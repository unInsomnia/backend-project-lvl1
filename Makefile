install: # установка зависимостей
	npm ci
brain-games: # Запуск игр разума
	node bin/brain-games.js
publish:
	npm publish --dry-run