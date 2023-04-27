import React from 'react';

const EMAIL = '123123'
const PASSWORD = '0907'


export const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === EMAIL && password === PASSWORD) resolve(email)
            else reject('이메일 혹은 패스워드 오류로 로그인에 실패하였습니다')
        }, 1000)
    })
}
