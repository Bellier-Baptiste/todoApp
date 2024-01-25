**Application ToDo**

---

Bienvenue dans notre application ToDo ! Cette application simple mais efficace vous aide à organiser vos tâches de manière efficace. Que ce soit les corvées quotidiennes, les tâches professionnelles ou les objectifs personnels, l'application ToDo vous permet de rester sur la bonne voie et concentré.

### Fonctionnalités :

1. **Gestion des tâches** : Créez, éditez et supprimez des tâches facilement. Marquez les tâches comme terminées une fois qu'elles sont faites pour maintenir votre liste propre.

2. **Catégories** : Organisez vos tâches en catégories pour une meilleure organisation et clarté. Filtrez facilement les tâches par catégorie pour vous concentrer sur des domaines spécifiques.

3. **Comptes utilisateur** : Créez votre compte pour personnaliser votre expérience ToDo. Gardez vos tâches privées et accédez-y depuis n'importe quel appareil.

4. **Mode sombre** : Passez du mode clair au mode sombre pour une visualisation confortable dans n'importe quel environnement.

5. **Export/Import** : Exportez vos tâches au format JSON ou CSV pour les sauvegarder ou les partager. Importez des tâches à partir de fichiers externes pour les intégrer facilement avec d'autres outils.

### Affichage :

1. **Liste** : Sur cette page vous avez le choix entre un affichage sous forme de liste et un affichage sous forme de carte. C'est également sur cette page que vous avez la possibilité de recherche une ou plusieurs tâche(-s) particulière(-s). Pour ce faire il vous suffit d'inscrire le filtre que vous souhaitez dans le champ de recherche et d'appui sur entrée. Un message vous indiquera le nombre de tâches trouvées pour votre filtre ou vous demandera d'essayer un autre filtre si ce dernier ne correspond à aucune tâche. Il vous est également possible d'ajouter une tâche grâce au bouton prévu à cette effet, qui vous renverra vers un formulaire à compléter entièrement (sauf le champ 'description' qui est optionnel) avant de valider votre tâche. Il faut savoir qu'un clique sur une tâche vous envoie directement sur les détailes de celle-ci.

2. **Tableau de bord** : Sur cette page vous verrez vos tâches rangées dans des colonnes selon leur état : non démarré, en cours ou bien complété. Ici aussi il vous est possible d'ajouter une tâche de la même manière que sur la page Liste, et d'avoir accès aux détails d'une tâche particulière en cliquant dessus.

3. **Calendrier** : Sur cette page vous verrez un calendrier comportant des pastilles indiquant le nombre de tâches pour chaque jour ayant au moins une tâche. (voir l'image pour plus de clarté) En appuyant sur un date vous avez donc la possibilité de visualiser les tâches du jour en question. Comme pour les autres page l'ajout d'une nouvelle tâche et la visualisation des détails d'une tâche sont possible. 


### Comment utiliser :

1. **Inscription/Connexion** : Commencez par vous inscrire pour un nouveau compte ou connectez-vous si vous en avez déjà un.
   N'ayant pas de base de données externe la gestion des mots de passe n'est pas optimale et sécurisée en revanche il est tout de même possible de créer de nouveau compte. Si vous préférez trois comptes sont déjà existants et peuvent être utilisés pour parcourir et tester l'application :
   - login : User1   |  mdp : password1
   - login : User2   |  mdp : password2
   - login : toto    |  mdp : root

3. **Créer des tâches** : Cliquez sur le bouton "Add" pour créer une nouvelle tâche. Entrez les détails de la tâche, tels que le titre, la description, la date d'échéance et la catégorie. Tous les champs hormi la description sont obligatoires.

4. **Gérer les tâches** : Une fois créées, vos tâches apparaîtront sur le tableau de bord. Modifiez des tâches selon vos besoins. Marquez les tâches comme terminées une fois terminées.

5. **Organiser** : Utilisez les catégories pour regrouper les tâches connexes. Choisissez parmi celles existantes pour garder vos tâches organisées.

6. **Export/Import** : Exportez vos tâches au format JSON ou CSV à l'aide de la fonction d'exportation. Importez des tâches à partir de fichiers externes pour peupler votre liste de ToDo rapidement. Malheureusement l'import n'est pas fonctionnel dans le sens où les tâches importées ne remplacent pas les tâches préalablement existantes.
  
8. **Personnalisation** : Personnalisez votre expérience ToDo en ajustant les paramètres, tels que les préférences de thème (mode clair/sombre).

### Technologies utilisées :

- **React** : Cadre frontal pour la création d'une interface utilisateur réactive et dynamique.
- **MobX** : Bibliothèque de gestion d'état pour gérer l'état de l'application et le flux de données.
- **Material-UI** : Bibliothèque de composants UI pour créer des interfaces utilisateur modernes et élégantes.
- **Node.js** : Environnement d'exécution backend pour la gestion de l'authentification utilisateur, le stockage de données et les points de terminaison API.
- **Express.js** : Cadre d'application web pour la création d'API RESTful et la logique côté serveur.

### Pour commencer :

Pour exécuter l'application ToDo localement sur votre machine, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale :

```bash
git clone <URL-du-dépôt>
```

2. Naviguez jusqu'au répertoire du projet :

```bash
cd todoApp
```

3. Installez les dépendances à l'aide de npm ou yarn :

```bash
npm install
```
ou
```bash
yarn install
```

4. Lancez le serveur de développement :

```bash
npm run dev
```
ou
```bash
yarn run dev
```

5. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour accéder à l'application ToDo.

### Contribuer :

Les contributions à l'application ToDo sont les bienvenues ! Si vous avez des suggestions pour de nouvelles fonctionnalités, des améliorations ou des corrections de bogues, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

### Licence :

L'application ToDo est un logiciel open-source sous licence [MIT License](https://opensource.org/licenses/MIT). N'hésitez pas à utiliser, modifier et distribuer le code source conformément aux termes de la licence.
