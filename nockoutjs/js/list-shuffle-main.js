requirejs(['jquery', 'knockout', 'util'],
function($, ko, util) {
  // Model
  function Item(name, value) {
    this.name = name;
    this.value = value;
  }

  function ViewModel() {
    this.leftItems = ko.observableArray([
      new Item("Item1", 111),
      new Item("Item3", 333),
      new Item("Item5", 555)
    ]);
    this.rightItems = ko.observableArray([
      new Item("Item2", 222),
      new Item("Item4", 444),
      new Item("Item6", 666)
    ]);

    this.selectedLeft = ko.observableArray([]);
    this.selectedRight = ko.observableArray([]);
  }

  // Move selected items from 'fromList' to 'toList.'
  ViewModel.prototype.moveList = function(selectedItems, fromList, toList) {
    selectedItems().forEach(function(selectedItem) {
      if (selectedItem) {
        toList.push(selectedItem);
        fromList.remove(selectedItem);
      }
    }, this);
  };

  ViewModel.prototype.movePosition = function(weight) {
    var itemsToSort = this.rightItems();

    this.selectedRight().forEach(function(item) {
      var pos = this.rightItems.indexOf(item);
      util.swap(itemsToSort, pos, pos + weight);
    }, this);

    this.rightItems(itemsToSort);
  };

  // Move down selected items in the left list.
  ViewModel.prototype.moveUp = function() {
    this.movePosition(-1);
  };

  // Move up selected items in the left list.
  ViewModel.prototype.moveDown = function() {
    this.movePosition(1);
  };

  ViewModel.prototype.moveLeft = function() {
    this.moveList(this.selectedRight, this.rightItems, this.leftItems);
  };

  ViewModel.prototype.moveRight = function() {
    this.moveList(this.selectedLeft, this.leftItems, this.rightItems);
  };

  ViewModel.prototype.bindMoveItemWithDblclick = function(option, item) {
    var fn = function() {
      this.moveItemToOther(item);
    };
    ko.applyBindingsToNode(option, {event: {dblclick: fn}}, this);
  };

  ViewModel.prototype.moveItemToOther = function(item) {
    // ダブルクリックされた項目が左のリストにいるか、右のリストにいるか調べておく
    var existsInLeft = this.leftItems.indexOf(item) >= 0;
    var existsInRight = this.rightItems.indexOf(item) >= 0;

    if (existsInLeft) {
      this.leftItems.remove(item);
      this.rightItems.push(item);
    } else if (existsInRight) {
      this.rightItems.remove(item);
      this.leftItems.push(item);
    }
  };

  $(document).ready(function() {
    ko.applyBindings(new ViewModel());
  });
});