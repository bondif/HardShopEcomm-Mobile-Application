import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { SQLite } from '@ionic-native/sqlite';

//pages
import { HomePage } from '../pages/home/home';
import { Category } from '../pages/category/category';
import { SignUp } from '../pages/sign-up/sign-up';
import { Login } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//providers
import {Data} from "../providers/data";
import { Helpers } from '../providers/helpers';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // the root (or first) page
    rootPage = HomePage;
    pages: Array<{title: string, component: any}>;
    shownGroup = null;
    nothing:boolean = false;
    searchTerm:string = '';
    filtredCategories = [];
    cats = [];

    constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public data: Data,
    public helpers: Helpers,
    public network: Network,
    public sqlite: SQLite
    ) {
        this.initializeApp();

        // set our app's pages
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Category', component: Category}
        ];

        this.data.getCategories()
            .then(cats => {
                this.cats = cats;
        });
    }


    initializeApp() {
    this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.

        this.sqlite.create({
            name: 'cart.db',
            location: 'default'
        })
            .then((db) => {
            db.executeSql('create table danceMoves(name VARCHAR(32))', {})
                .then(() => console.log('Executed SQL'))
                .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
        this.statusBar.styleDefault();
        this.splashScreen.hide();
    });
    }

    openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
    }

    toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
    };
    isGroupShown(group) {
    return this.shownGroup === group;
    };

    goToCategory(cat){
        this.nav.push(Category, {
            target: cat
        });
        this.menu.close();
    }

    goToSignUp(){
    this.nav.push(SignUp);
    this.menu.close();
    }

    goToLogin(){
    this.nav.push(Login);
    this.menu.close();
    }

    setFiltredCategories() {
        let catsToPass = [];
        for(let cat of this.cats){
            if(cat.idSupCat){
                catsToPass.push(cat);
            }
        }
        this.filtredCategories = this.searchTerm ? this.helpers.filterCategories(this.searchTerm, catsToPass) : [];
        this.nothing = this.helpers.filterCategories(this.searchTerm, catsToPass).length ? false : true;
        console.log(this.filtredCategories);
    }
}
