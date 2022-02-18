# SONG-ACADEMY-BE
song-academy의 백엔드 기능

## 환경설정
---
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
## API
---
## User API
---
### 사용자 등록
#### request
> (POST) /users

**Body** raw(json)
```
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
#### response
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

### 사용자 리스트
#### request
> (GET) /users

**Query Params**
- name
- userid

#### response
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

### 사용자 수정
#### request
> (PUT) /users/<:id>

**Body** raw(json)
```
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
#### response
```
{
	"updatedCount": 수정된 리스트 갯수
}
```

### 사용자 삭제
#### request
> (DELETE) /users/<:id>

#### response
```
{
	"deletedCount": 삭제된 리스트 갯수
}
```

## Lesson API
---
### 레슨 등록
#### request
> (POST) /lesson

**Body** raw(json)
```
{
	"name": "레슨명": String, 필수",
	"price": "레슨 가격: Integer",
	"description": "상세 정보: Text",
	"maxUserCount": "최대 인원: Integer",
	"time": "소요 시간: Integer",
	"images": "레슨 이미지: Array",
}
```
#### response
```
{
	"id": <Integer>,
	"name": "<레슨명: String>",
	"price": <레슨 가격: Integer>,
	"description": "<상세 정보: Text>",
	"maxUserCount": <최대 인원: Integer>,
	"time": <소요 시간: Integer>,
	"images": "<레슨 이미지: Array>",
	"createdAt": "<등록일: Date>"
	"updatedAt": "<수정일: Date>"
	"deletedAt": "<삭제일: Date>"
}
```

### 레슨 리스트
#### request
> (GET) /lessons

**Query Params**
- name

#### response
```
{
	"count": <해당 조건의 리스트 갯수>,
	"rows": [
		{
			"id": <Integer>,
			"name": "<레슨명: String>",
			"price": <레슨 가격: Integer>,
			"description": "<상세 정보: Text>",
			"maxUserCount": <최대 인원: Integer>,
			"time": <소요 시간: Integer>,
			"images": "<레슨 이미지: Array>",
			"createdAt": "<등록일: Date>"
			"updatedAt": "<수정일: Date>"
			"deletedAt": "<삭제일: Date>"
		}
	]
}
```

### 레슨 수정
#### request

> (PUT) /lessons/<:id>

**Body** raw(json)
```
{
	"name": "레슨명: String, 필수",
	"price": "레슨 가격: Integer",
	"description": "상세 정보: Text",
	"maxUserCount": "최대 인원: Integer",
	"time": "소요 시간: Integer",
	"images": "레슨 이미지: Array",
}
```
#### response
```
{
	"updatedCount": 수정된 리스트 갯수
}
```

### 레슨 삭제
#### request

> (DELETE) /lessons/<:id>

#### response
```
{
	"deletedCount": 삭제된 리스트 갯수
}
```