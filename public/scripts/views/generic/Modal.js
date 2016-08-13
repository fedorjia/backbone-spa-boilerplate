/***
 * Generic Modal
 */
const Modal = Backbone.View.extend({
  
  initialize: function() {

  },

  render: function() {
    	this.$el.addClass('modal');
      $('body').append(this.$el);

      $('.modal-mask').velocity({
        opacity: 0.8,
        display: 'block'
      }, {
        display: 'block',
        duration: 200,
        complete: function() {
          this.didAppear();
        }.bind(this)
      });
      return this;
  },

  remove: function() {
      this.$el.remove();
  },

  dismiss: function() {
      $('.modal-mask').velocity("fadeOut", 400);
      this.didDisappear();
  },

  /***** life cycle  ****/

  didDisappear: function() {
     this.$el.velocity("fadeOut", 400, function() {
        this.remove();
     }.bind(this));
  },

  didAppear: function() {
	   this.$el.velocity("fadeIn");
  }
});

module.exports = Modal;