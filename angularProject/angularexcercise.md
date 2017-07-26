# Angular

### Knowledge round-up

- **Component**
 - Briefly explain Event Binding in Angular?
Link data from template to component.
It uses for link component's method with DOM's event
Synstax example: ```<button (click) = function()></button>```
- Briefly explain Data Binding in Angular?
It allows to link Application data value one way from Component to Template, help the application is easier to write, read and maintaince.
  - What are Event Emitters and how it works in Angular?
  Even Emitters is an Angular abstraction, emitting custom Events in components, useful for Parent Component getting data from Child Component.
  When Child Component declare ```@Output event = new EventEmitter<any>()```, the @Output exposes an event that parents can attach listeners to in its template. 
  It has a method name: ```emit()```, we can send any data from Child to Parent with it, when Event occurs.
- Explain the life cycle hooks of Angular application?
Directive and component instances have a lifecycle as Angular creates, updates, and destroys them. Each interface has a single hook method.
-- ngOnChanges(): Respond when Angular (re)sets data-bound input properties.
-- ngOnInit(): Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties. Called once, after the first ngOnChanges().
-- ngDoCheck(): Detect and act upon changes that Angular can't or won't detect on its own.
-- ngAfterContentInit(): Respond after Angular projects external content into the component's view.
-- ngAfterContentChecked(): Respond after Angular checks the content projected into the component.
-- ngAfterViewInit(): Respond after Angular initializes the component's views and child views.
-- ngAfterViewChecked(): Respond after Angular checks the component's views and child views.
-- ngOnDestroy: Cleanup just before Angular destroys the directive/component
 - Explain the `ContentChild` `ContentChildren` and write an example?
 -- `ContentChild`: return the Child Component which stand inside Parent Component, but Child Component was declared by another Component, not appear in Parent Component Template
 -- `ContentChildren`: it returns all of Child Component like ContentChild
 -- Example: in Project
 - **Extra**
  - Briefly explain ElementRef in Angular? Write an example.
Provides access to the underlying native element (DOM element).
-- Example: In Project - User Model and ListComponent  
