// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
    console.log("why?")

  createStoryJS({
    type: 'timeline',
    height: '600',
    source: 'data',
    embed_id: 'time_line'
  });
});

