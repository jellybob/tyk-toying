var request_id = new TykJS.TykMiddleware.NewMiddleware({});

// Initialise it with your functionality by passing a closure that accepts two objects
// into the NewProcessRequest() function:
request_id.NewProcessRequest(function(request, session) {

  console.log("This middleware does nothing, but will print this to your terminal.")

  // You MUST return both the request and session metadata
  return request_id.ReturnData(request, session.meta_data);
});
