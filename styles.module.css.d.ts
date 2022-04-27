declare module '*.css'{
    const exports : { [exportName:string]:string };
    export = exports
} 
// для импорта module.css