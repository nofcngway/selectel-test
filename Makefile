install:
	npm ci

start:
	npm run start

build:
	npm run build

clean:
	rm -rf dist/ .angular/

deploy:
    ng deploy --base-href="https://nofcngway.github.io/selectel-test/"
