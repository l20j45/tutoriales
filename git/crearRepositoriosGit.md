#crear repositorio por linea de comandos

echo "# tutoriales" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:l20j45/tutoriales.git
git push -u origin main


#hacer push de un repositorio local

git remote add origin git@github.com:l20j45/tutoriales.git
git branch -M main
git push -u origin main
