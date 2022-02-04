---
layout: post
title: "REST API with cURL"
tags: [API, Shell]
icon: curl.svg
iconWhite: true
notfull: 1
keywords: "rest api curl http request put set get post patch"
date: 2022-02-01
---

- [Official doc](https://curl.se/).
- In **[Postman](https://www.postman.com/)**, we can click on "Code snippet" icon (on the right side) to show the curl command (and other commands too). 

General:

```bash
# -X = --request
curl -X [method] [options] [URL]
```

Some examples:

```bash
# GET
curl -X GET 'http://abc:3000/xyz/enpoint?paramOne=1&paramTwo=2' \
	--header 'clientEmail: abc@xyz.com' \
	--header 'privateKey: LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQU'
	}'
```

```bash
# POST
curl -X POST 'http://abc:3000/xyz/enpoint?paramOne=1&paramTwo=2' \
	--header 'clientEmail: abc@xyz.com' \
	--header 'privateKey: LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQU' \
	--header 'Content-Type: application/json' \
	--data-raw '{
		"dataMain": {
			"keyOne": "valueOne",
			"keyTwo": 2
		}
	}'
	
# or
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "linuxize", "email": "linuxize@example.com"}' \
    https://example/contact
```

```jsx
// Form
<form method="POST" enctype='multipart/form-data' action="upload.cgi">
  <input type=file name=upload>
  <input type=submit name=press value="OK">
</form>
    
<!-- POST with file upload
-F = --form
-->
curl -F upload=@/home/user/Pictures/wallpaper.jpg -F press=OK [URL]
```

