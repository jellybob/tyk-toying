var request_id = new TykJS.TykMiddleware.NewMiddleware({});

request_id.NewProcessRequest(function(request, session) {
  var tykContentRequestId = request.Headers["Tyk-Content-Request-Id"][0];
  var requestId = request.Headers["Request-Id"];
  if (requestId === undefined) {
    request.SetHeaders["Request-Id"] = tykContentRequestId;
  }
  return request_id.ReturnData(request, session.meta_data);
});
