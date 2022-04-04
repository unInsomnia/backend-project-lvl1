install: # установка зависимостей
	npm ci

brain-games: # Запуск игр разума
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint: # запустить линтер
	npx eslint .

test:
	npm test

test-coverage:
	npm test --coverage --coverageProvider=v8