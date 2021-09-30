requirejs(['jquery', 'knockout'],
function($, ko) {
  /**
   * Model
   */
  function Item(name, checked) {
    this.name = ko.observable(name);
    this.checked = ko.observable(checked || false);
  }

  function ViewModel() {
    this.toggleAll = ko.observable(false);
    this.items = ko.observableArray([
      new Item("Foo 1"),
      new Item("Foo 2", true),
      new Item("Foo 3")
    ]);

    this.toggleAll.subscribe(function(newValue) {
      this.items().forEach(function(item) {
        item.checked(newValue);
      });
    }, this);
  }

  $(document).ready(function() {
    ko.applyBindings(new ViewModel());
  });
});