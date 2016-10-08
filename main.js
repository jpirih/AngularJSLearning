
var app = angular.module('store', []);
app.controller('StoreController', function(){
    this.products = gems;
});

app.controller('PanelController', function(){
    this.tab = 1;
    this.selectTab = function(setTab){
      this.tab = setTab;  
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;  
    };
});
var gems = [
    { 
        name: 'Dodechaedron',
        price: 2.95,
        description: 'To je opis izdelka Dodechaedron ',
        canPurchase: true,
        soldOut: false,
        
    },
    { 
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'To je opis izdelka Pentagonal gem ... ',
        canPurchase: true,
        soldOut: false
    }
];
