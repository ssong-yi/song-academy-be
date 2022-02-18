# SONG-ACADEMY-BE
song-academy의 백엔드 기능

## 환경설정
`.env`의 환경 설정은 다음과 같다.

> /.env
```
NODE_ENV=development
PORT=3000
LOGGER_LEVEL=debug
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=song-academy
DB_ID=postgres
DB_PASS=postgres
DB_DIALECT=postgres
```

### User API
#### 사용자 등록
> request
```
method: POST
url: /users
body:
{
	"userid" : "<사용자 아이디: String>",
	"password" : "<사용자 패스워드: String>",
	"name" : "<사용자 이름: String>",
	"gender" : "<사용자 성별(f/m): String>",
	"auth" : "<기본 권한(admin/customer): String>",
	"mobile" : "<휴대폰 번호: String>",
	"active" : <Boolean>
}
```
> response
```
{
	"id" : <Integer>,
	"userid" : "<사용자 아이디: String>",
	"password" : "<사용자 패스워드: String>",
	"name" : "<사용자 이름: String>",
	"gender" : "<사용자 성별(f/m): String>",
	"auth" : "<기본 권한(admin/customer): String>",
	"mobile" : "<휴대폰 번호: String>",
	"active" : <Boolean>,
	"createdAt": "<등록일: Date>"
	"updatedAt": "<수정일: Date>"
	"deletedAt": "<삭제일: Date>"
}
```

#### 사용자 리스트
> request
```
method: GET
url: /users
query: name || userid
```
> response
```
{
	"count": <해당 조건의 리스트 갯수>,
	"rows": [
		{
			"id" : <Integer>,
			"userid" : "<사용자 아이디: String>",
			"password" : "<사용자 패스워드: String>",
			"name" : "<사용자 이름: String>",
			"gender" : "<사용자 성별(f/m): String>",
			"auth" : "<기본 권한(admin/customer): String>",
			"mobile" : "<휴대폰 번호: String>",
			"active" : <Boolean>
		}
	]
}
```

#### 사용자 수정
> request
```
method: PUT
url: /users/<:id>
body:
{
	"id" : <Integer>,
	"userid" : "<사용자 아이디: String>",
	"password" : "<사용자 패스워드: String>",
	"name" : "<사용자 이름: String>",
	"gender" : "<사용자 성별(f/m): String>",
	"auth" : "<기본 권한(admin/customer): String>",
	"mobile" : "<휴대폰 번호: String>",
	"active" : <Boolean>
}
```
> response
```
{
	"updatedCount": 수정된 리스트 갯수
}
```

#### 사용자 삭제
> request
```
method: DELETE
url: /users/<:id>
```
> response
```
{
	"deletedCount": 삭제된 리스트 갯수
}
```