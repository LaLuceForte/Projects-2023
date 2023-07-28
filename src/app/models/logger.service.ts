//this file defines a Logger class


import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Logger {
    writeCount(count: number) { //function
        console.warn(count);
    }
}