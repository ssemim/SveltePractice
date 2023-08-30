//스벨트의 스토어는 바닐라 자바스크립트를 이용한다

import {writable} from 'svelte/store'
//쓰기 가능한 함수의 형태로 어딘가에 할당하겠다는 뜻 
//실행되면 스벨트에 store 객체가 반환된다
//외부에서 수정 가능한 형태로 빈 문자열로 초기화하여 외부에서 사용하겠다

export let storeName = writable('Heropy')
