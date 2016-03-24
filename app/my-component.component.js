System.register(['angular2/core', './test.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, test_component_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (test_component_1_1) {
                test_component_1 = test_component_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                }
                MyComponentComponent.prototype.ngOnInit = function () {
                    this.name = "Simon";
                };
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\n    Hi, I'm <span [style.color]=\"inputElement.value === 'yes' ? 'red' : 'blue'\">{{name}}</span> and this is my first angular2 component! <span [class.is-awesome]=\"inputElement.value === 'yes'\">It is awesome!</span>\n    <br>\n    <br>\n    Is it awesome?\n    <input type=\"text\" #inputElement (keyup)=\"0\">\n    <br>\n    <br>\n    <button [disabled]='inputElement.value != \"yes\"'>Only enabled if 'yes' was entered</button>\n    <test></test>\n  ",
                        styleUrls: ['src/css/mycomponent.css'],
                        directives: [test_component_1.TestComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFIQyx1Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUN0QixDQUFDO2dCQXJCSDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNULFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsMmNBVVQ7d0JBQ0QsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7d0JBQ3RDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7cUJBQzVCLENBQUM7O3dDQUFBO2dCQU9GLDJCQUFDO1lBQUQsQ0FOQSxBQU1DLElBQUE7WUFORCx1REFNQyxDQUFBIiwiZmlsZSI6Im15LWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7VGVzdENvbXBvbmVudH0gZnJvbSAnLi90ZXN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgSGksIEknbSA8c3BhbiBbc3R5bGUuY29sb3JdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJyA/ICdyZWQnIDogJ2JsdWUnXCI+e3tuYW1lfX08L3NwYW4+IGFuZCB0aGlzIGlzIG15IGZpcnN0IGFuZ3VsYXIyIGNvbXBvbmVudCEgPHNwYW4gW2NsYXNzLmlzLWF3ZXNvbWVdPVwiaW5wdXRFbGVtZW50LnZhbHVlID09PSAneWVzJ1wiPkl0IGlzIGF3ZXNvbWUhPC9zcGFuPlxyXG4gICAgPGJyPlxyXG4gICAgPGJyPlxyXG4gICAgSXMgaXQgYXdlc29tZT9cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNpbnB1dEVsZW1lbnQgKGtleXVwKT1cIjBcIj5cclxuICAgIDxicj5cclxuICAgIDxicj5cclxuICAgIDxidXR0b24gW2Rpc2FibGVkXT0naW5wdXRFbGVtZW50LnZhbHVlICE9IFwieWVzXCInPk9ubHkgZW5hYmxlZCBpZiAneWVzJyB3YXMgZW50ZXJlZDwvYnV0dG9uPlxyXG4gICAgPHRlc3Q+PC90ZXN0PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJ3NyYy9jc3MvbXljb21wb25lbnQuY3NzJ10sXHJcbiAgZGlyZWN0aXZlczogW1Rlc3RDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICBuZ09uSW5pdCgpOmFueSB7XHJcbiAgICB0aGlzLm5hbWUgPSBcIlNpbW9uXCI7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
