
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol;


   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {

         sym.play(0);

      });


   })("stage");
   

})(jQuery, AdobeEdge, "EDGE-9412320");