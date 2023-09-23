fetch("https://cart-database-e297e-default-rtdb.firebaseio.com/", {
  "headers": {
    "content-type": "text/plain;charset=UTF-8",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "Referer": "http://localhost:5173/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"cartItems\":[],\"seeCart\":false,\"DUMMY_PRODUCTS\":[]}",
  "method": "PUT"
});