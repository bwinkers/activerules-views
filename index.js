'use strict;'

// activerules-views/index.js

/**
 *  Use Marko and ActiveRules site data to render pages.
 */
var viewResolver = require('/home/brian/sandbox/activerules-view-resolver');

// Create the return object
var AR = function () {};

/**
 * 
 * @param {object} options
 * @returns {undefined}
 */
AR.prototype.init = function (options){
  if(typeof options.arRoot === 'string') {
    this.arRoot = options.arRoot;
  }
};

/**
 * 
 * @param {type} req
 * @param {type} res
 * @param {type} page
 * @returns {undefined}
 */
AR.prototype.sendPage = function (req, res, page) {
    
    // Load the HTML5 wrapper when returning web pages, there's no reason to override this currently.
    var template = require(this.arRoot + 'site/default/view/layouts/html5.marko');
    
    // Default layout name
    var layoutView = 'mobile_first';
    
    // Use a site defined view layout if defined.
    if(typeof req.ar.site.view !== 'undefined' && typeof req.ar.site.view.layout === 'string') {
      layoutView = req.ar.site.view.layout;
    }
    
    var arRoot = this.arRoot;
    
    // Determine if there is a site override for the named layout
    viewResolver.view(arRoot, 'layouts/' + layoutView, req.ar.site)
    .then(function(layoutViewPath){
      
        var layout  = require(layoutViewPath);
      
        // Determine if there is a site override for the requested page view
        viewResolver.view(arRoot, 'pages/' + page, req.ar.site)
        .then(function(pageViewPath){
        
            var core = require(pageViewPath);

            // Use Marko to respond with HTML created by the layouts.
            res.marko(template, {
                arViews: {
                  layout: layout,
                  core: core
                }
            });
        });
        
      
      
    });
    
   
    
};

// Export a new instance of the object/function
module.exports = exports = new AR();


