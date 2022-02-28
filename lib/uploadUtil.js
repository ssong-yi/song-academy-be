const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const multer = require('multer');

// 메인 업로드 디렉토리 설정
const uploadDir = 'upload';

// post 이미지 업로드 디렉토리 생성
const postDir = 'post';
const postImageDir = path.join(__dirname, '../', uploadDir, postDir); // 이미지가 업로드 될 디렉토리: /upload/post
// 디렉토리가 존재하지 않을 경우, 생성함(부모까지)
if (!fs.existsSync(postImageDir)) fs.mkdirSync(postImageDir, { recursive: true });
