// import {ADMIN, PORTAL} from '../constants/ADMIN';
// import {API} from '../constants/API';
// export default class Router {
//     private base: string;
//     private resource: string;
//
//     constructor(resource: string, base: string = ADMIN.base) {
//         this.base = base;
//         this.resource = resource;
//     }
//
//     public static get(base: string) {
//         return new Router(base);
//     }
//
//     public static api(base: string) {
//         return new Router(base, API.base);
//     }
//
//     public static root(base: string) {
//         return new Router(base, window.ROOT);
//     }
//
//     public static portalRoute(base: string) {
//         return new Router(base, PORTAL.base);
//     }
//
//     public url(id?: string|number, action?: string) {
//         const parameters = [this.base, this.resource, id ? '' + id : null, action];
//         return '/' + parameters.filter((p) => p && p.length).join('/');
//
//     }
//
//     public actionUrl(action?: string) {
//         const parameters = [this.base, this.resource, action];
//         return '/' + parameters.filter((p) => p && p.length).join('/');
//     }
// }
