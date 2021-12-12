# GIT WORK
```
(command permettant de ne pas prendre en compte les derniers changement en local)
1. git checkout . / git checkout nom_du_fichier.html


(command ignorant les changements apres avoir fait git add . )
2. git reset .

3. git add .
4. git commit -m "final version"

(откатить свои изменения после коммита)
5. git reset --hard HEAD^1

(обслеживать свои коммиты, voir ses differents commit)
6. git log

(Переключиться в том состоянии до коммита)
7. git reset --soft HEAD^1

(Поменять название коммита)
8. git commit -m "Я только что коммитил мои изменения с каким-то названием" 
9. git commit --amend -m "Решели поменять название коммита"

GITHUB PAGES в разделе (settings) permet de publier son projet en ligne sans utiliser un HOSTING
11. https://jeandev84.github.io/skillfactorygit/


link how to install git bash in windows
https://makeuseof.com/install-git-git-bash-windows
```

### Remove directory in the repository git
https://stackoverflow.com/questions/6313126/how-to-remove-a-directory-from-git-repository
$ git rm -r folder_name
$ git add --all
$ git commit -m "delete folder .idea"
$ git push origin master


try rm -r -f <folder name> or rm -r --force <folder name> - forcefully delete a folder
git filter-branch --tree-filter 'rm -rf path/to/your/file' HEAD
git push