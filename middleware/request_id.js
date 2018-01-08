var request_id = new TykJS.TykMiddleware.NewMiddleware({});

request_id.NewProcessRequest(function(request, session) {
  var tykContentRequestId = request.Headers["X-Request-Identifier"][0];
  var requestId = request.Headers["X-Correlation-Identifier"];
  if (requestId === undefined) {
    request.SetHeaders["X-Correlation-Identifier"] = tykContentRequestId;
  }
  return request_id.ReturnData(request, session.meta_data);
});
