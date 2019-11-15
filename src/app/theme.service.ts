import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomController } from '@ionic/angular';

interface Theme {
  name: string;
  styles: ThemeStyle[];
}

interface ThemeStyle {
  themeVariable: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private themes: Theme[] = [];
  public currentTheme = 0;

  constructor(private domCtrl: DomController, @Inject(DOCUMENT) private document) {
    this.themes = [
      {
        name: 'day',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#3880ff'},
          { themeVariable: '--ion-background-color', value: '#ffffff'},
          { themeVariable: '--whiteColor', value: '#ffffff'},
          { themeVariable: '--darkToLight', value: '#222222'},
          { themeVariable: '--lightToDark', value: '#ffffff'},
          { themeVariable: '--grey', value: '#eeeeee'},

        ]
      },
      {
        name: 'night',
        styles: [
          { themeVariable: '--ion-color-primary', value: '#222428'},
          { themeVariable: '--ion-color-primary-rgb', value: '34,34,34'},
          { themeVariable: '--ion-color-primary-contrast', value: '#ffffff'},
          { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255'},
          { themeVariable: '--ion-color-primary-shade', value: '#1e2023'},
          { themeVariable: '--ion-color-primary-tint', value: '#383a3e'},
          { themeVariable: '--ion-item-ios-background-color', value: '#717171'},
          { themeVariable: '--ion-item-md-background-color', value: '#717171'},
          { themeVariable: '--ion-tabbar-background-color', value: '#222428'},
          { themeVariable: '--ion-tabbar-ios-text-color-active', value: '#ffffff'},
          { themeVariable: '--ion-tabbar-md-text-color-active', value: '#ffffff'},
          { themeVariable: '--ion-background-color', value: '#383838'},
          { themeVariable: '--darkToLight', value: '#ffffff'},
          { themeVariable: '--lightToDark', value: '#222222'},
          { themeVariable: '--grey', value: '#333333'},

        ]
      }
    ]
  }

  setTheme(name): void {
    let theme = this.themes.find(theme => theme.name === name);
    this.domCtrl.write(() => {
      theme.styles.forEach(style => {
        document.documentElement.style.setProperty(style.themeVariable, style.value);
      });

    });

  }
}
