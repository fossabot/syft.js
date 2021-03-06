rm -rf dist;
rm -rf docs;
tsc && find src -name '*.ts' | xargs standardts && typedoc --gitRevision $(git log -n 1 --pretty=format:"%H") --theme node_modules/typedoc-clarity-theme/bin src/ --out docs;
touch ./docs/.nojekyll
