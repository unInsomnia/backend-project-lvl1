install: # установка зависимостей
	npm ci

brain-games: # Запуск игр разума
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

publish:
	npm publish --dry-run

lint: # запустить линтер
	npx eslint .
