git config --global user.name "FIRST_NAME LAST_NAME" 
# repositorye adinizi config eder
git config --global user.email "MY_NAME@example.com"
# repositorye mailinizigit config eder
git config user.name
# username test etme
git config user.emaili
# emaili test etme
git status
# faylda deyisiklikleri gosterer
git add . 
# butun fayllari ara eraziye yigar
git add fayladi
# fayliadini faylini ara eraziye yigar
git commit -m "commit aciglamasi"
# ara erazideki deyisikleri uzak repositorye kocurer
git commit -am "commit aciglamasi"
# auto olarag ara eraziye kocurub sora uzak reposotoriye add etmeden kocurer
git remote add origin "repository linki"
# remote elave etme
git remote -v
# remote u test etme
git checkout HEAD~ -- static/img/universities
# istenilen pathi geri qayatiri evvelki commitden
git checkout a8684616ee7ece95d99d86ac5a744c55b910fefa  -- templates/head.html
# istenilen pathi geri qayatiri istenilen commitden
git checkout -f <branch-name>
#axrinci commit edilmis versiyani yukleyir pull push falan etmeden

