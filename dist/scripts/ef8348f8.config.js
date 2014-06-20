"use strict";

 angular.module("config", [])

.constant("ENV", {
  "name": "production",
  "apiEndpoint": "http://hindsight-server.herokuapp.com"
})

;