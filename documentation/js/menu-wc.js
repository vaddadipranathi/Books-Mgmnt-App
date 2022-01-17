'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">books-mgmnt-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' : 'data-target="#xs-controllers-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' :
                                            'id="xs-controllers-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' : 'data-target="#xs-injectables-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' :
                                        'id="xs-injectables-links-module-AppModule-505f40241e074d4b3e731d00be752823d0bdf55fee58ac9cb13645fbbb19924a9bf6f47bf35848c51219a4c5def5510c049a9e31a9fb8c3bafd994f3f103edd1"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' : 'data-target="#xs-controllers-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' :
                                            'id="xs-controllers-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' }>
                                            <li class="link">
                                                <a href="controllers/BooksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' : 'data-target="#xs-injectables-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' :
                                        'id="xs-injectables-links-module-BooksModule-7914c439fe776e2bd5bbe9d8005c76a5f5b7fb9302c35a1800cc89d34507d0c7583dacf2d5adb92429fa598c581bc6576355c8536f22fd17de880ec9e12302fd"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksUsersModule.html" data-type="entity-link" >BooksUsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' : 'data-target="#xs-controllers-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' :
                                            'id="xs-controllers-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' }>
                                            <li class="link">
                                                <a href="controllers/BooksUsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksUsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' : 'data-target="#xs-injectables-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' :
                                        'id="xs-injectables-links-module-BooksUsersModule-cd5a39593b074fd278e0cb0e5e92096b18239abb382190d774d877e69c1fb5c141fc6d496cee16a5864631eee3e24f00015b6045d271d06589bb078558e1ce71"' }>
                                        <li class="link">
                                            <a href="injectables/BooksUsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksUsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' : 'data-target="#xs-controllers-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' :
                                            'id="xs-controllers-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' }>
                                            <li class="link">
                                                <a href="controllers/LoginController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' : 'data-target="#xs-injectables-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' :
                                        'id="xs-injectables-links-module-LoginModule-bf22f5f3b5722c0a121eecf0faf930eb70e7c54793c6d2e4889472393c0b90bfd10390505efd512b97ffe625e31bd76064b72cac9d115b136db3031326485bbe"' }>
                                        <li class="link">
                                            <a href="injectables/LoginService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PersonModule.html" data-type="entity-link" >PersonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' : 'data-target="#xs-controllers-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' :
                                            'id="xs-controllers-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' }>
                                            <li class="link">
                                                <a href="controllers/PersonController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' : 'data-target="#xs-injectables-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' :
                                        'id="xs-injectables-links-module-PersonModule-7bc58507a2ca47c54305465504d947280c3761c7ba66692e8b7b844a0cfbe9cc66431c9036c3cf8a7130d2fc03276a8658daca7c93b14002695f9ae2b026dddd"' }>
                                        <li class="link">
                                            <a href="injectables/PersonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PersonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksController.html" data-type="entity-link" >BooksController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksUsersController.html" data-type="entity-link" >BooksUsersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LoginController.html" data-type="entity-link" >LoginController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PersonController.html" data-type="entity-link" >PersonController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookUsers.html" data-type="entity-link" >BookUsers</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomException.html" data-type="entity-link" >CustomException</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/Person.html" data-type="entity-link" >Person</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidationExceptionFilter.html" data-type="entity-link" >ValidationExceptionFilter</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksUsersService.html" data-type="entity-link" >BooksUsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PersonService.html" data-type="entity-link" >PersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SwaggerConfig.html" data-type="entity-link" >SwaggerConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});